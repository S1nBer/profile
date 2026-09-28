import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

const NAV = [
  { id: 'about', label: 'Обо мне' },
  { id: 'skills', label: 'Навыки' },
  { id: 'experience', label: 'Опыт' },
  { id: 'projects', label: 'Проекты' },
  { id: 'contact', label: 'Контакты' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-bg/70 backdrop-blur-xl border-b border-border-soft py-3'
          : 'bg-transparent py-6',
      )}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-lg font-semibold tracking-tight"
        >
          <span className="text-accent">S1n</span>Ber
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-text-dim hover:text-text transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a
          href="https://t.me/S1nBer"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}
