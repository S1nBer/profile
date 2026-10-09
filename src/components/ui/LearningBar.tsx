import { motion } from 'motion/react';
import type { LearningTopic } from '../../data/learning';

type LearningBarProps = {
  topic: LearningTopic;
  index: number;
};

const ACCENT = '#34D399';

export function LearningBar({ topic, index }: LearningBarProps) {
  const totalSegments = 4;
  const filled = topic.level;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className="flex flex-col gap-2 sm:grid sm:grid-cols-[140px_1fr_auto] sm:gap-4 md:gap-6 sm:items-center"
    >
      {/* Верхняя строка: название + статус (на мобилке) */}
      <div className="flex items-center justify-between sm:contents">
        <span className="font-mono text-sm md:text-base text-text">{topic.name}</span>
        <span className="text-xs md:text-sm font-mono text-text-muted whitespace-nowrap sm:order-3">
          {topic.status}
        </span>
      </div>

      {/* Сегменты — на мобилке во всю ширину под названием */}
      <div className="flex gap-1.5 sm:order-2">
        {Array.from({ length: totalSegments }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.08 + i * 0.06 + 0.2,
            }}
            className="h-1.5 flex-1 rounded-full origin-left"
            style={{
              background: i < filled ? ACCENT : '#1F1F2E',
              boxShadow: i < filled ? `0 0 12px ${ACCENT}50` : 'none',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
