import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { SkillCard } from '../ui/SkillCard';
import { skillGroups } from '../../data/skills';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Навыки"
      subtitle="Стек, с которым работаю ежедневно, и то, куда двигаюсь дальше."
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      >
        {skillGroups.map((group) => (
          <SkillCard key={group.id} group={group} />
        ))}
      </motion.div>
    </Section>
  );
}
