import { Section } from '../ui/Section';
import { ExperienceCard } from '../ui/ExperienceCard';
import { TimelineLine } from '../ui/TimelineLine';
import { experience } from '../../data/experience';

const ACCENTS = ['#6366F1', '#22D3EE', '#A855F7'];

export function Experience() {
  return (
    <Section
      id="experience"
      title="Опыт"
      subtitle="6 лет коммерческой разработки: от логистики до медиахолдинга и трейдинговой платформы."
    >
      <div className="relative">
        {/* Таймлайн */}
        <TimelineLine />

        {/* Карточки */}
        <div className="space-y-20 md:space-y-28">
          {experience.map((item, i) => (
            <ExperienceCard
              key={item.id}
              item={item}
              index={i}
              accent={ACCENTS[i % ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
