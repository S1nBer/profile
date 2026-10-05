import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../../lib/cn';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  accent?: string;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  accent = '#6366F1',
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border-soft last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 py-4 text-left group"
        aria-expanded={open}
      >
        {/* Маркер */}
        <span
          className={cn(
            'shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300',
            open ? 'scale-150' : 'scale-100 opacity-60 group-hover:opacity-100',
          )}
          style={{ background: accent }}
        />

        <span
          className={cn(
            'flex-1 font-medium transition-colors duration-300 text-[15px]',
            open ? 'text-text' : 'text-text-dim group-hover:text-text',
          )}
        >
          {title}
        </span>

        {/* Плюс/минус */}
        <span
          className={cn(
            'shrink-0 relative w-4 h-4 transition-transform duration-300',
            open ? 'rotate-45' : 'rotate-0',
          )}
        >
          <span className="absolute top-1/2 left-0 w-full h-px bg-current -translate-y-1/2" />
          <span className="absolute top-0 left-1/2 w-px h-full bg-current -translate-x-1/2" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.3, ease: 'easeOut' },
            }}
            className="overflow-hidden"
          >
            <div className="pl-5 pb-5 text-text-dim leading-relaxed text-[15px]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
