import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { Avatar } from '../ui/Avatar';
import { personal } from '../../data/personal';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function About() {
  return (
    <Section id="about" title="Обо мне">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">
        {/* Аватар */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto lg:mx-0 lg:sticky lg:top-32"
        >
          <Avatar src="/avatar.jpg" alt={personal.name} size={320} />
        </motion.div>

        {/* Текст */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {personal.about.map((block) => (
            <motion.div key={block.title} variants={item}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent-2 mb-2">
                {block.title}
              </h3>
              <p className="text-text-dim leading-relaxed text-base md:text-lg">{block.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Строка фактов */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="mt-20 pt-10 border-t border-border-soft grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {personal.facts.map((fact) => (
          <div key={fact.label}>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
              {fact.label}
            </p>
            <p className="font-display text-lg text-text">{fact.value}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
