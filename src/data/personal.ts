export type AboutBlock = {
  title: string;
  text: string;
};

export const personal = {
  name: 'Андрей Герасименко',
  nickname: 'S1nBer',
  role: 'Frontend Engineer',
  years: 6,
  location: 'Москва',
  availability: 'Открыт к предложениям · удалённо / гибрид',

  pitch:
    'Строю быстрые и красивые интерфейсы. 6 лет коммерческой разработки на Vue и React. Сейчас углубляюсь в AI и Python.',

  about: [
    {
      title: 'Опыт',
      text: 'Frontend-разработчик с 6-летним коммерческим опытом. Работал с Vue 2/3, Nuxt, Pinia и Vuex, а также с React, Redux Toolkit и Zustand — вёл проекты на обоих фреймворках, поэтому комфортно чувствую себя в любом.',
    },
    {
      title: 'Что делаю',
      text: 'Разработка клиентской части: адаптивная вёрстка по макетам Figma, pixel-perfect, CSS/JS-анимации, сложные формы и интерактивные элементы. Уделяю внимание производительности — виртуализация списков, оптимизация бандла, кэширование, серверная пагинация для таблиц с 10 000+ записей.',
    },
    {
      title: 'Real-time',
      text: 'Опыт работы с real-time данными: WebSocket, Canvas API, Chart.js. Участвовал в разработке трейдинговой платформы с графиками в реальном времени и карты мониторинга транспорта.',
    },
    {
      title: 'Архитектура',
      text: 'Внедрял Feature-Sliced Design как единый стандарт, проектировал domain-слои, выносил shared-логику в переиспользуемые модули. Работал с микрофронтендами на Module Federation. Веду документацию по архитектуре и процессам онбординга.',
    },
    {
      title: 'Сейчас',
      text: 'Изучаю Python и AI/ML — хочу соединить опыт в интерфейсах с новыми возможностями LLM и визуализации данных.',
    },
  ] as AboutBlock[],

  facts: [
    { label: 'Локация', value: 'Москва' },
    { label: 'Опыт', value: '6 лет' },
    { label: 'Формат', value: 'Удалённо / гибрид' },
    { label: 'Статус', value: 'Открыт к предложениям' },
  ],

  contacts: {
    telegram: { label: 'Telegram', value: '@S1nBer', url: 'https://t.me/S1nBer' },
    github: { label: 'GitHub', value: 'S1nBer', url: 'https://github.com/S1nBer' },
    email: {
      label: 'Email',
      value: 'gerasimenko_andrei@bk.ru',
      url: 'mailto:gerasimenko_andrei@bk.ru',
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'andrei-gerasimenko',
      url: 'https://www.linkedin.com/in/andrei-gerasimenko-7035a1237',
    },
  },

  cvUrl: '/cv.pdf',
} as const;
