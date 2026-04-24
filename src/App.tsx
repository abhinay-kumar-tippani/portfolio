// import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      {/* <Cursor /> */}
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Achievements />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
