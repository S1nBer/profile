import { cn } from '../../lib/cn';

type TagProps = {
  children: React.ReactNode;
  accent?: string;
  className?: string;
};

export function Tag({ children, accent, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono',
        'bg-bg-elevated border border-border-soft text-text-dim',
        'transition-colors duration-300',
        className,
      )}
      style={
        accent
          ? {
              borderColor: `${accent}40`,
              color: accent,
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}
