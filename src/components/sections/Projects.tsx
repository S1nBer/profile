import { Section } from '../ui/Section';
import { FeaturedProjectCard } from '../ui/FeaturedProjectCard';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Проекты"
      subtitle="Pet-проекты и тестовые задания. Все с открытым кодом и демо, где это возможно."
    >
      <div className="space-y-6 md:space-y-8">
        {/* Featured */}
        {featured && <FeaturedProjectCard project={featured} />}

        {/* Остальные */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
