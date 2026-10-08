export type LearningTopic = {
  name: string;
  /** Уровень: 1 = начал, 2 = изучаю, 3 = практикую, 4 = уверенно */
  level: 1 | 2 | 3 | 4;
  status: string;
};

export const learning = {
  intro:
    '6 лет работаю во фронтенде, а последний год двигаюсь в сторону AI/ML. Хочу соединить опыт в интерфейсах с новыми возможностями LLM — делать не просто красиво, но и умно.',
  topics: [
    { name: 'Python', level: 3, status: 'Практикую' },
    { name: 'AI / ML', level: 2, status: 'Изучаю' },
    { name: 'LLM', level: 1, status: 'Изучаю' },
    { name: 'FastAPI', level: 1, status: 'Планирую' },
  ] as LearningTopic[],
  note: 'Слежу за экосистемой и пробую идеи в pet-проектах. Планирую добавить в портфолио AI-инструменты в ближайшие месяцы.',
};
