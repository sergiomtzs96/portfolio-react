import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import imgLogo1 from '../img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contacto", href: "#contact" }
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020040]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
        <a href="#home" className="w-[48px] h-[48px] relative shrink-0 block hover:opacity-80 transition-opacity">
           <img src={imgLogo1} alt="Logo" className="w-full h-full object-contain" />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 font-['Roboto_Slab:Regular',sans-serif] text-white text-[16px]">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-300 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* Mobile menu toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-[#020040] border-t border-white/10 absolute top-full left-0 w-full px-8 py-6 flex flex-col gap-6 shadow-xl">
           {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="font-['Roboto_Slab:Regular',sans-serif] text-white text-[18px] hover:text-blue-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;