import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
     <Navbar />
     <Header id="header" />
     <AboutMe id="aboutme" />
     <Proyects id="proyects" />
     <Skills id="skills" />
     <Contact id="contact" />
     <Footer />
    </>
  )
}

export default App;
