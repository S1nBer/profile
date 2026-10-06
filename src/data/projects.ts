export type ProjectStatus = 'done' | 'wip';

export type Project = {
  slug: string;
  title: string;
  /** Короткое описание — 1-2 строки */
  description: string;
  /** Что решает / чем интересен — для раскрытия */
  highlights?: string[];
  stack: string[];
  demo?: string;
  github?: string;
  status: ProjectStatus;
  /** Флагманский проект — показываем крупнее */
  featured?: boolean;
  /** Акцентный цвет для карточки (hex) */
  accent: string;
  /** Путь к превью-скриншоту */
  preview: string;
};

export const projects: Project[] = [
  {
    slug: 'resume-builder',
    title: 'Resume Builder',
    description:
      'Конструктор резюме с предпросмотром в реальном времени и экспортом в PDF. Несколько шаблонов, drag-and-drop секций, автосохранение.',
    highlights: [
      'Live-preview: изменения в форме моментально отражаются в макете',
      'Экспорт в PDF через html2canvas-pro + jsPDF — без сервера',
      'Drag-and-drop сортировка секций на @dnd-kit',
      'Zustand для стейта, чистые переиспользуемые компоненты',
    ],
    stack: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Zustand',
      'dnd-kit',
      'html2canvas-pro',
      'jsPDF',
    ],
    demo: 'https://s1nber.github.io/resume-builder/',
    github: 'https://github.com/S1nBer/resume-builder',
    status: 'done',
    featured: true,
    accent: '#6366F1',
    preview: '/projects/resume-builder.jpg',
  },
  {
    slug: 'admin-panel',
    title: 'Admin Panel',
    description:
      'Административная панель для управления контентом (посты, авторы, теги) с авторизацией и автообновлением токенов.',
    highlights: [
      'Redux Toolkit + Redux-Saga — асинхронные сайд-эффекты',
      'Axios с интерсепторами: обновление токена, обработка 401',
      'Ant Design как UI-база, CSS Modules для кастомных стилей',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Redux Toolkit',
      'Redux-Saga',
      'Ant Design',
      'Vite',
      'Axios',
      'CSS Modules',
    ],
    demo: 'https://adminpanelformachineheads.netlify.app/dashboard',
    github: 'https://github.com/S1nBer/admin-panel',
    status: 'done',
    accent: '#22D3EE',
    preview: '/projects/admin-panel.jpg',
  },
  {
    slug: 'keycloak-login',
    title: 'Keycloak Login',
    description: 'SPA с аутентификацией через Keycloak по Authorization Code Flow + PKCE.',
    highlights: [
      'Authorization Code Flow + PKCE — безопасная схема без client secret',
      'keycloak-js + React Router: защищённые роуты, refresh токенов',
      'Показывает понимание OAuth 2.0 / OpenID Connect изнутри',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'keycloak-js', 'React Router'],
    github: 'https://github.com/S1nBer/keycloak-login',
    status: 'done',
    accent: '#A855F7',
    preview: '/projects/keycloak-login.jpg',
  },
  {
    slug: 'horizon',
    title: 'Horizon',
    description:
      'Визуализация горизонта: небо рисуется на Canvas, положение солнца рассчитывается астрономически по координатам и времени.',
    highlights: [
      'Canvas API: динамическая отрисовка неба и объектов',
      'suncalc для астрономических расчётов положения Солнца',
      'Проект в разработке — экспериментирую с визуализацией',
    ],
    stack: ['Svelte', 'Canvas API', 'Vite', 'suncalc'],
    github: 'https://github.com/S1nBer/horizon',
    status: 'wip',
    accent: '#34D399',
    preview: '/projects/horizon.jpg',
  },
];
