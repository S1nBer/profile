import { motion } from 'motion/react';
import type { Project } from '../../data/projects';
import { Tag } from './Tag';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasDemo = !!project.demo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-bg-soft border border-border-soft transition-colors duration-300 hover:border-border"
    >
      {/* Превью */}
      <a
        href={hasDemo ? project.demo : project.github}
        target="_blank"
        rel="noreferrer"
        className="relative aspect-[16/10] overflow-hidden bg-bg-elevated"
      >
        <img
          src={project.preview}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        {/* Градиентный overlay при hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"
          style={{
            background: `linear-gradient(135deg, ${project.accent} 0%, transparent 60%)`,
          }}
        />
        {/* Бейдж WIP */}
        {project.status === 'wip' && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-bg/80 backdrop-blur-md border border-border text-text-dim">
            WIP
          </span>
        )}
      </a>

      {/* Контент */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-xl font-medium text-text">{project.title}</h3>
          <div className="flex items-center gap-3 shrink-0 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-text-muted hover:text-text transition-colors"
              >
                <GithubIcon />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Demo"
                className="text-text-muted hover:text-text transition-colors"
              >
                <ArrowIcon />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-dim text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Стек */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.stack.length > 5 && (
            <span className="text-xs text-text-muted font-mono self-center">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
