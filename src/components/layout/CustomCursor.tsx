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

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor-hover]')) {
        setHovering(true);
      }
    };
    const onOut = () => setHovering(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
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
