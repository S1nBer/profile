import { cn } from '../../lib/cn';

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function Avatar({ src, alt, size = 320, className }: AvatarProps) {
  return (
    <div className={cn('relative shrink-0', className)} style={{ width: size, height: size }}>
      {/* Внешнее свечение */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{
          background: 'conic-gradient(from 0deg, #6366F1, #A855F7, #22D3EE, #34D399, #6366F1)',
        }}
      />

      {/* Вращающаяся градиентная рамка */}
      <div
        className="absolute inset-0 rounded-full animate-[spin_12s_linear_infinite]"
        style={{
          background: 'conic-gradient(from 0deg, #6366F1, #A855F7, #22D3EE, #34D399, #6366F1)',
          padding: '2px',
        }}
      >
        {/* Внутренняя маска — фон сайта, чтобы рамка была тонкой */}
        <div className="w-full h-full rounded-full bg-bg" />
      </div>

      {/* Само фото */}
      <div className="absolute inset-[3px] rounded-full overflow-hidden bg-bg-elevated">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'saturate(0.85) contrast(1.05) brightness(0.95)',
          }}
          loading="eager"
        />
        {/* Лёгкая виньетка поверх фото */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, transparent 40%, rgba(7,7,13,0.55) 100%)',
          }}
        />
        {/* Холодный тон — сдвигаем кирпич в синеву */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-30"
          style={{
            background:
              'linear-gradient(160deg, rgba(99,102,241,0.5) 0%, transparent 50%, rgba(34,211,238,0.3) 100%)',
          }}
        />
      </div>
    </div>
  );
}
