import About from './components/About.jsx';
import BackgroundGrid from './components/BackgroundGrid.jsx';
import Contact from './components/Contact.jsx';
import CursorSpotlight from './components/CursorSpotlight.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ParticleField from './components/ParticleField.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <>
      <BackgroundGrid />
      <CursorSpotlight />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
