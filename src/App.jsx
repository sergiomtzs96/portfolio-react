import Navbar from './components/sections/Navbar';
import Header from './components/sections/Header'
import AboutMe from './components/sections/AboutMe';
import Proyects from './components/sections/Proyects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <Header id="header" />
        <AboutMe id="aboutme" />
        <Proyects id="proyects" />
        <Skills id="skills" />
        <Contact id="contact" />
      </div>
      <Footer />
    </div>
  )
}

export default App;
