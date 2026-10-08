import { motion } from 'motion/react';
import { cn } from '../../lib/cn';

type ContactLinkProps = {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
};

export function ContactLink({ href, label, value, icon, external = true }: ContactLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative flex flex-col gap-3 p-5 md:p-6 rounded-2xl',
        'bg-bg-soft border border-border-soft',
        'hover:border-accent transition-colors duration-300',
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-text-muted group-hover:text-accent transition-colors">{icon}</span>
        <span className="text-text-muted group-hover:text-text transition-colors">
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
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-1">
          {label}
        </p>
        <p className="text-text text-sm md:text-base truncate">{value}</p>
      </div>
    </motion.a>
  );
}
