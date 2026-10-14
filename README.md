# S1nBer · Portfolio

Персональный сайт-портфолио: тёмная тема, aurora-шейдер на Three.js, плавный скролл и аккуратные анимации.

🔗 **Живая версия:** [s1nber.github.io/profile](https://s1nber.github.io/profile/)

---

## Стек

**Основа**

- React 19 + TypeScript
- Vite — сборка
- React Router v7

**Стили и анимации**

- Tailwind CSS v4
- motion (ex-Framer Motion) — UI-анимации
- GSAP + ScrollTrigger — scroll-анимации
- Lenis — smooth scroll

**3D**

- Three.js + @react-three/fiber
- Кастомный GLSL-шейдер (aurora в hero)

**Качество**

- ESLint + Prettier
- GitHub Actions → GitHub Pages

---

## Что внутри

- **Hero** — aurora-шейдер на GLSL, реагирует на курсор через uniform
- **About** — аватар с вращающейся градиентной рамкой, блоки по смыслу
- **Skills** — группировка по категориям, hover-эффекты, акцент на «Сейчас изучаю»
- **Experience** — таймлайн с accordion-достижениями, ScrollTrigger-заливка
- **Projects** — featured-карточка + сетка, WIP-бейджи
- **Learning** — прогресс-бары по темам (Python, AI/ML, LLM, FastAPI)
- **Contact** — контакты + скачивание CV

Контент хранится в `src/data/*.ts` — легко обновлять без правки компонентов.

---

## Lighthouse

Desktop:

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :-----------: | :------------: | :-: |
|     99      |      100      |      100       | 100 |

---

## Запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:5173/profile/](http://localhost:5173/profile/)

**Сборка:**

```bash
npm run build
npm run preview
```

---

## Структура

```
src/
├── app/           # App, роутинг
├── components/
│   ├── layout/    # Header, Footer, CustomCursor
│   ├── sections/  # Hero, About, Skills, Experience, Projects, Learning, Contact
│   └── ui/        # Section, Avatar, Tag, Accordion, ProjectCard и др.
├── data/          # personal, experience, projects, skills, learning
├── hooks/         # useLenis
├── lib/           # cn (clsx + tailwind-merge)
└── three/         # AuroraShader (GLSL)
```

---

## Деплой

Автоматически через GitHub Actions при пуше в `master` → GitHub Pages.

Конфиг: [`.github/workflows/static.yml`](.github/workflows/static.yml)

---

## Контакты

- Telegram: [@S1nBer](https://t.me/S1nBer)
- GitHub: [S1nBer](https://github.com/S1nBer)
- Email: gerasimenko_andrei@bk.ru
- LinkedIn: [andrei-gerasimenko](https://www.linkedin.com/in/andrei-gerasimenko-7035a1237)
