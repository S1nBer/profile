import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/cn';

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor-hover]')) {
        setHovering(true);
      }
    };
    const onOut = () => setHovering(false);

    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={cn(
        'pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference transition-all duration-200',
        visible ? 'opacity-100' : 'opacity-0',
        hovering ? 'w-12 h-12 bg-accent' : 'w-4 h-4 bg-text',
      )}
      style={{ willChange: 'transform' }}
    />
  );
}
