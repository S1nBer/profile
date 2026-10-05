import { motion } from 'motion/react';
import type { ExperienceItem } from '../../data/experience';
import { AccordionItem } from './Accordion';
import { Tag } from './Tag';

type ExperienceCardProps = {
  item: ExperienceItem;
  index: number;
  accent: string;
};

export function ExperienceCard({ item, index, accent }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      }}
      className="relative pl-0 md:pl-16"
    >
      {/* Точка на таймлайне */}
      <div
        className="hidden md:block absolute left-[-5px] top-8 w-3 h-3 rounded-full border-2"
        style={{
          borderColor: accent,
          background: '#07070D',
          boxShadow: `0 0 20px ${accent}`,
        }}
        aria-hidden
      />

      {/* Шапка */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-medium text-text">
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-2 transition-colors"
              >
                {item.company}
              </a>
            ) : (
              item.company
            )}
          </h3>
          <p className="text-text-dim mt-1">
            {item.role} · <span className="text-text-muted">{item.location}</span>
          </p>
        </div>
        <p className="font-mono text-sm text-text-muted whitespace-nowrap">{item.period}</p>
      </div>

      {/* Контекст */}
      <p className="text-text-dim leading-relaxed max-w-3xl mb-6">{item.context}</p>

      {/* Достижения */}
      <div className="rounded-2xl bg-bg-soft border border-border-soft px-5 md:px-6">
        {item.achievements.length > 0 &&
          item.achievements.map((ach, i) => (
            <AccordionItem key={ach.title} title={ach.title} defaultOpen={i === 0} accent={accent}>
              {ach.text}
            </AccordionItem>
          ))}

        {item.subProjects &&
          item.subProjects.map((sub) => (
            <div key={sub.name} className="py-4 first:pt-5 last:pb-5">
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent-2 mb-1">
                {sub.name}
              </h4>
              <div className="mt-2 border-t border-border-soft">
                {sub.achievements.map((ach) => (
                  <AccordionItem
                    key={ach.title}
                    title={ach.title}
                    defaultOpen={false}
                    accent={accent}
                  >
                    {ach.text}
                  </AccordionItem>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Стек */}
      <div className="mt-5 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </motion.article>
  );
}
