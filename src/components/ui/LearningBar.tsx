import { motion } from 'motion/react';
import type { LearningTopic } from '../../data/learning';

type LearningBarProps = {
  topic: LearningTopic;
  index: number;
};

const ACCENT = '#34D399'; // emerald

export function LearningBar({ topic, index }: LearningBarProps) {
  // 4 уровня → 4 сегмента
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
      className="grid grid-cols-[140px_1fr_auto] md:grid-cols-[180px_1fr_auto] gap-4 md:gap-6 items-center"
    >
      {/* Название */}
      <span className="font-mono text-sm md:text-base text-text">{topic.name}</span>

      {/* Сегменты */}
      <div className="flex gap-1.5">
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

      {/* Статус */}
      <span className="text-xs md:text-sm font-mono text-text-muted whitespace-nowrap">
        {topic.status}
      </span>
    </motion.div>
  );
}
