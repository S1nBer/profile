import { useLenis } from '../hooks/useLenis';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { CustomCursor } from '../components/layout/CustomCursor';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Learning } from '../components/sections/Learning';
import { Contact } from '../components/sections/Contact';

function App() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
