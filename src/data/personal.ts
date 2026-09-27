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
    'Frontend-разработчик с 6-летним коммерческим опытом. Работал с Vue 2/3, Nuxt, Pinia и Vuex, а также с React, Redux Toolkit и Zustand — вёл проекты на обоих фреймворках, поэтому комфортно чувствую себя в любом.',
    'Занимаюсь разработкой клиентской части: адаптивная вёрстка по макетам Figma, pixel-perfect, CSS/JS-анимации, сложные формы и интерактивные элементы. Уделяю внимание производительности — виртуализация списков, оптимизация бандла, кэширование, серверная пагинация для таблиц с 10 000+ записей.',
    'Есть опыт работы с real-time данными: WebSocket, Canvas API, Chart.js. Участвовал в разработке трейдинговой платформы с графиками в реальном времени и карты мониторинга транспорта.',
    'Уделяю внимание архитектуре: внедрял Feature-Sliced Design как единый стандарт, проектировал domain-слои, выносил shared-логику в переиспользуемые модули. Работал с микрофронтендами на Module Federation. Веду документацию по архитектуре и процессам онбординга.',
    'Сейчас изучаю Python и AI/ML — хочу соединить опыт в интерфейсах с новыми возможностями LLM и визуализации данных.',
  ],

  contacts: {
    telegram: { label: 'Telegram', value: '@S1nBer', url: 'https://t.me/S1nBer' },
    github: { label: 'GitHub', value: 'S1nBer', url: 'https://github.com/S1nBer' },
    email: { label: 'Email', value: 'gerasimenko_andrei@bk.ru', url: 'mailto:gerasimenko_andrei@bk.ru' },
    linkedin: {
      label: 'LinkedIn',
      value: 'andrei-gerasimenko',
      url: 'https://www.linkedin.com/in/andrei-gerasimenko-7035a1237',
    },
  },

  cvUrl: '/cv.pdf',
} as const