export type SkillGroup = {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  highlight?: boolean;
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
  },
  {
    id: 'state',
    title: 'State & Data',
    icon: '◇',
    skills: ['Redux Toolkit', 'Zustand', 'Pinia', 'Vuex', 'React Query', 'GraphQL', 'REST API'],
  },
  {
    id: 'realtime',
    title: 'Real-time & Visual',
    icon: '◈',
    skills: ['Canvas API', 'WebSocket', 'Chart.js', 'CSS/JS-анимации'],
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
  },
  {
    id: 'tooling',
    title: 'Инструменты',
    icon: '▤',
    skills: ['Vite', 'Webpack', 'Git', 'Docker', 'CI/CD', 'Vitest', 'Jest', 'ESLint', 'Prettier'],
  },
  {
    id: 'monitoring',
    title: 'Мониторинг',
    icon: '◇',
    skills: ['Sentry', 'Grafana', 'Core Web Vitals', 'Lighthouse'],
  },
  {
    id: 'learning',
    title: 'Сейчас изучаю',
    icon: '✦',
    skills: ['Python', 'AI / ML', 'LLM', 'FastAPI'],
    highlight: true,
  },
];

/** Общие инженерные практики */
export const practices: string[] = [
  'CI/CD (GitHub Actions, GitLab CI)',
  'Core Web Vitals · Lighthouse > 90',
  'Мониторинг: Sentry, Grafana',
  'Scrum / Agile',
  'Code Review, менторство',
  'Документация и онбординг',
];
