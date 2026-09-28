import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative py-24 md:py-32 lg:py-40 px-6', className)}>
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {title}
            </h2>
            {subtitle && <p className="mt-4 text-text-dim text-lg max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
