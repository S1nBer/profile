import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/cn';

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      // Только "настоящие" мыши/трекпады. Touch и pen игнорируем
      if (e.pointerType === 'touch') return;
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      if (!visible) setVisible(true);
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor-hover]')) {
        setHovering(true);
      }
    };
    const onOut = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      setHovering(false);
    };

    // Скрываем курсор, когда мышь уходит за пределы окна
    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerover', onOver);
    window.addEventListener('pointerout', onOut);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerout', onOut);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={cn(
        'pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference',
        'transition-[width,height,opacity] duration-200 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
        hovering ? 'w-12 h-12 bg-accent' : 'w-4 h-4 bg-text',
      )}
      style={{ willChange: 'transform' }}
    />
  );
}
