import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector2, ShaderMaterial } from 'three';

/**
 * Фрагментный шейдер — рисует aurora / mesh gradient.
 * Идея: несколько «источников света» (blobs) с разными цветами,
 * их влияние суммируется, добавляется шум для живости.
 */
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  // 3D noise
  vec3 hash3(vec2 p) {
    vec3 q = vec3(
      dot(p, vec2(127.1, 311.7)),
      dot(p, vec2(269.5, 183.3)),
      dot(p, vec2(419.2, 371.9))
    );
    return fract(sin(q) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash3(i + vec2(0.0, 0.0)).xy, f - vec2(0.0, 0.0)),
          dot(hash3(i + vec2(1.0, 0.0)).xy, f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash3(i + vec2(0.0, 1.0)).xy, f - vec2(0.0, 1.0)),
          dot(hash3(i + vec2(1.0, 1.0)).xy, f - vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // Цвета палитры Cold Aurora
  const vec3 C_INDIGO = vec3(0.388, 0.400, 0.945); // #6366F1
  const vec3 C_CYAN   = vec3(0.133, 0.827, 0.933); // #22D3EE
  const vec3 C_PURPLE = vec3(0.659, 0.333, 0.969); // #A855F7
  const vec3 C_EMER   = vec3(0.204, 0.827, 0.600); // #34D399

  void main() {
    // Соотношение сторон — чтобы круглые blobs не растягивались
    vec2 uv = vUv;
    vec2 st = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
    st += 0.5;

    float t = uTime * 0.08;

    // Мышка в тех же координатах
    vec2 mouse = uMouse;

    // «Blobs» — 4 цветных пятна, каждое медленно двигается по своей орбите
    vec2 p1 = vec2(0.30 + 0.15 * sin(t * 1.1), 0.35 + 0.15 * cos(t * 0.9));
    vec2 p2 = vec2(0.70 + 0.15 * cos(t * 0.8), 0.30 + 0.15 * sin(t * 1.2));
    vec2 p3 = vec2(0.45 + 0.20 * sin(t * 0.7 + 1.5), 0.75 + 0.15 * cos(t * 1.0 + 0.5));
    vec2 p4 = vec2(0.80 + 0.10 * cos(t * 1.3), 0.80 + 0.10 * sin(t * 1.1));

    // Мышка слегка притягивает blobs к себе
    p1 += (mouse - 0.5) * 0.15;
    p3 += (mouse - 0.5) * 0.20;

    // Влияние каждого blob — чем ближе, тем сильнее
    float d1 = smoothstep(0.55, 0.0, distance(st, p1));
    float d2 = smoothstep(0.60, 0.0, distance(st, p2));
    float d3 = smoothstep(0.65, 0.0, distance(st, p3));
    float d4 = smoothstep(0.50, 0.0, distance(st, p4));

    // Шум — добавляет «дыхание»
    float n = noise(st * 3.0 + vec2(t * 2.0, t * 1.5));
    d1 *= 0.7 + 0.5 * n;
    d3 *= 0.7 + 0.4 * n;

    // Смешиваем цвета
    vec3 color = vec3(0.0);
    color += C_INDIGO * d1 * 0.9;
    color += C_CYAN   * d2 * 0.7;
    color += C_PURPLE * d3 * 0.8;
    color += C_EMER   * d4 * 0.35;

    vec3 bg = vec3(0.027, 0.027, 0.051); // #07070D

    // Виньетка
    float vignette = smoothstep(1.1, 0.3, distance(uv, vec2(0.5)));
    color = bg + color * vignette * 0.7;

    // Гамма-коррекция
    color = pow(color, vec3(0.85));

    gl_FragColor = vec4(color, 1.0);
  }
`;

/**
 * Меш с шейдером. Занимает весь экран (плоскость размером с viewport).
 */
function AuroraPlane() {
  const matRef = useRef<ShaderMaterial>(null);
  const { viewport, size } = useThree();
  const mouse = useRef(new Vector2(0.5, 0.5));
  const targetMouse = useRef(new Vector2(0.5, 0.5));

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetMouse.current.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight, // инвертируем Y, т.к. GLSL снизу вверх
      );
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((_, delta) => {
    if (!matRef.current) return;
    const mat = matRef.current;
    mat.uniforms.uTime.value += delta;
    // Плавно догоняем мышку — сглаживание
    mouse.current.lerp(targetMouse.current, 0.05);
    mat.uniforms.uMouse.value.copy(mouse.current);
    mat.uniforms.uResolution.value.set(size.width, size.height);
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new Vector2(0.5, 0.5) },
      uResolution: { value: new Vector2(size.width, size.height) },
    }),
    // size меняется при ресайзе — создаём uniform один раз, обновляем в useFrame
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

/**
 * Публичный компонент. Рендерит Canvas, если WebGL доступен.
 */
export function AuroraShader() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) setSupported(false);
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) {
    // Fallback — CSS-градиент
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <div
          className="absolute inset-0 opacity-70 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 30% 40%, #6366F1 0%, transparent 45%), radial-gradient(circle at 70% 30%, #22D3EE 0%, transparent 40%), radial-gradient(circle at 50% 75%, #A855F7 0%, transparent 45%)',
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false }}
        camera={{ position: [0, 0, 1], fov: 50 }}
      >
        <AuroraPlane />
      </Canvas>
    </div>
  );
}
