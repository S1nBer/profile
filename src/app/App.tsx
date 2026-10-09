import { lazy, Suspense } from 'react';
import { useLenis } from '../hooks/useLenis';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { CustomCursor } from '../components/layout/CustomCursor';
import { Hero } from '../components/sections/Hero';

// Lazy — грузятся в отдельных чанках
const About = lazy(() =>
  import('../components/sections/About').then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import('../components/sections/Skills').then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import('../components/sections/Experience').then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import('../components/sections/Projects').then((m) => ({ default: m.Projects })),
);
const Learning = lazy(() =>
  import('../components/sections/Learning').then((m) => ({ default: m.Learning })),
);
const Contact = lazy(() =>
  import('../components/sections/Contact').then((m) => ({ default: m.Contact })),
);

function App() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Learning />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
