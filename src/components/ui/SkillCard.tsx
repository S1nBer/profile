import { motion } from 'motion/react';
import { cn } from '../../lib/cn';
import type { SkillGroup } from '../../data/skills';
import { Tag } from './Tag';

type SkillCardProps = {
  group: SkillGroup & { highlight?: boolean; accent?: string };
};

export function SkillCard({ group }: SkillCardProps) {
  const accent = group.accent ?? (group.highlight ? '#34D399' : '#6366F1');

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative rounded-2xl p-6 overflow-hidden',
        'bg-bg-soft border border-border-soft',
        'transition-colors duration-300',
        'hover:border-border',
      )}
    >
      {/* Свечение в углу при hover */}
      <div
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ background: accent }}
      />

      <div className="relative">
        {/* Иконка + заголовок */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xl leading-none" style={{ color: accent }} aria-hidden>
            {group.icon}
          </span>
          <h3 className="font-display text-lg font-medium text-text">{group.title}</h3>
          {group.highlight && (
            <span
              className="ml-auto text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border"
              style={{
                color: accent,
                borderColor: `${accent}40`,
              }}
            >
              new
            </span>
          )}
        </div>

        {/* Теги */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <Tag key={skill} accent={group.highlight ? accent : undefined}>
              {skill}
            </Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
