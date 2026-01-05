import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020040] overflow-x-hidden selection:bg-blue-300 selection:text-[#020040]">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 font-['Inter:Regular',sans-serif]">
        <p>Hecho con ❤️ por Sergio Martínez</p>
      </footer>
    </div>
  );
}