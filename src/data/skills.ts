export type SkillGroup = {
  id: string;
  title: string;
  /** Emoji или короткий символ для визуального маркера */
  icon: string;
  skills: string[];
  /** Флаг — подсветить группу акцентным цветом */
  highlight?: boolean;
  /** Акцентный цвет группы (hex) */
  accent?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '◆',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vue 2/3',
      'Nuxt',
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind',
    ],
    accent: '#6366F1',
  },
  {
    id: 'state',
    title: 'State & Data',
    icon: '◇',
    skills: ['Redux Toolkit', 'Zustand', 'Pinia', 'Vuex', 'React Query', 'GraphQL', 'REST API'],
    accent: '#22D3EE',
  },
  {
    id: 'realtime',
    title: 'Real-time & Visual',
    icon: '◈',
    skills: ['Canvas API', 'WebSocket', 'Chart.js', 'CSS/JS-анимации'],
    accent: '#A855F7',
  },
  {
    id: 'architecture',
    title: 'Архитектура',
    icon: '▣',
    skills: [
      'Feature-Sliced Design',
      'SOLID',
      'ООП',
      'Microfrontends (Module Federation)',
      'Дизайн-системы',
      'Storybook',
    ],
    accent: '#6366F1',
  },
  {
    id: 'tooling',
    title: 'Инструменты',
    icon: '▤',
    skills: ['Vite', 'Webpack', 'Git', 'Docker', 'CI/CD', 'Vitest', 'Jest', 'ESLint', 'Prettier'],
    accent: '#22D3EE',
  },
  {
    id: 'monitoring',
    title: 'Мониторинг',
    icon: '◎',
    skills: ['Sentry', 'Grafana', 'Core Web Vitals', 'Lighthouse'],
    accent: '#A855F7',
  },
  {
    id: 'learning',
    title: 'Сейчас изучаю',
    icon: '✦',
    skills: ['Python', 'AI / ML', 'LLM', 'FastAPI'],
    highlight: true,
    accent: '#34D399',
  },
];

export const practices: string[] = [
  'CI/CD (GitHub Actions, GitLab CI)',
  'Core Web Vitals · Lighthouse > 90',
  'Мониторинг: Sentry, Grafana',
  'Scrum / Agile',
  'Code Review, менторство',
  'Документация и онбординг',
];
