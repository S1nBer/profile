import { motion } from 'motion/react';
import type { Project } from '../../data/projects';
import { Tag } from './Tag';

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-bg-soft border border-border-soft transition-colors duration-300 hover:border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Превью */}
        <a
          href={project.demo ?? project.github}
          target="_blank"
          rel="noreferrer"
          className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-bg-elevated order-1 lg:order-1"
        >
          <img
            src={project.preview}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 mix-blend-overlay"
            style={{
              background: `linear-gradient(135deg, ${project.accent} 0%, transparent 70%)`,
            }}
          />
        </a>

        {/* Контент */}
        <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-2">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: project.accent }}
          >
            ★ Избранный проект
          </p>

          <h3 className="font-display text-3xl md:text-4xl font-medium text-text mb-4">
            {project.title}
          </h3>

          <p className="text-text-dim leading-relaxed mb-6">{project.description}</p>

          {/* Highlights */}
          {project.highlights && (
            <ul className="space-y-2.5 mb-7">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-text-dim leading-relaxed">
                  <span
                    className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                    style={{ background: project.accent }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Стек */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.stack.map((tech) => (
              <Tag key={tech} accent={project.accent}>
                {tech}
              </Tag>
            ))}
          </div>

          {/* Кнопки */}
          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text text-bg font-medium text-sm transition-transform hover:scale-105"
              >
                Смотреть демо
                <ArrowIcon />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-accent hover:text-accent text-sm font-medium transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
