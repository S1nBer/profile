import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 bottom-0 w-px bg-border-soft hidden md:block"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 origin-top"
        style={{
          scaleY,
          background: 'linear-gradient(to bottom, #6366F1, #A855F7, #22D3EE)',
        }}
      />
    </div>
  );
}
