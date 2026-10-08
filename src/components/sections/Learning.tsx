import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { LearningBar } from '../ui/LearningBar';
import { learning } from '../../data/learning';

export function Learning() {
  return (
    <Section id="learning" title="Сейчас изучаю" subtitle="Куда двигаюсь дальше">
      <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-bg-soft border border-border-soft">
        {/* Emerald-свечение в углу */}
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: '#34D399' }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent-4 mb-4">
              ✦ Перекат в AI
            </p>
            <p className="text-text-dim leading-relaxed text-base md:text-lg mb-6">
              {learning.intro}
            </p>
            <p className="text-text-muted text-sm leading-relaxed">{learning.note}</p>
          </motion.div>

          {/* Бары */}
          <div className="flex flex-col gap-5 justify-center">
            {learning.topics.map((topic, i) => (
              <LearningBar key={topic.name} topic={topic} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
