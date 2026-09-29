import { motion } from 'motion/react';
import { AuroraShader } from '../../three/AuroraShader';
import { personal } from '../../data/personal';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AuroraShader />

      {/* Затемнение поверх шейдера — чтобы текст читался */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p variants={item} className="font-mono text-sm text-accent-2 mb-6 tracking-wider">
          Привет, меня зовут
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
        >
          {personal.name.split(' ')[0]}{' '}
          <span className="bg-gradient-to-r from-accent via-accent-3 to-accent-2 bg-clip-text text-transparent">
            {personal.name.split(' ')[1]}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-text-dim max-w-2xl mx-auto"
        >
          {personal.role} · {personal.years} лет опыта · {personal.location}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 text-base md:text-lg text-text-dim/80 max-w-xl mx-auto"
        >
          {personal.pitch}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-7 py-3.5 rounded-full bg-text text-bg font-medium text-sm overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Смотреть проекты</span>
          </a>
          <a
            href={personal.cvUrl}
            download
            className="px-7 py-3.5 rounded-full border border-border hover:border-accent hover:text-accent text-sm font-medium transition-colors"
          >
            Скачать CV
          </a>
        </motion.div>
      </motion.div>

      {/* Индикатор скролла */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted font-mono tracking-wider">скролл</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
