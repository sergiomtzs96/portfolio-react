import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight, Code2, Layers } from "lucide-react";
import imgHI from '../img/proyectos/imageHomeInventory.jpeg';
import imgRG from '../img/proyectos/imageRohigarnez.png';
import imgPF from '../img/proyectos/portfolio.png';

const ProjectCard = ({ title, category, description, image, tags, index, linkGH, link }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16 items-center`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 group relative overflow-hidden rounded-2xl shadow-2xl border border-white/5">
        <div className="absolute inset-0 bg-[#020040]/20 group-hover:bg-transparent transition-all duration-500 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
        />
        
        {/* Overlay Actions */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
           <a href={linkGH} className="p-3 bg-white rounded-full text-[#020040] hover:bg-blue-300 transition-colors shadow-lg">
             <Github size={20} />
           </a>
           <a href={link} className="p-3 bg-[#020040] rounded-full text-white border border-white/20 hover:bg-[#0a0650] transition-colors shadow-lg">
             <ExternalLink size={20} />
           </a>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div>
          <span className="text-blue-300 font-['Roboto_Slab:Regular',sans-serif] text-sm tracking-wider uppercase mb-2 block">
            {category}
          </span>
          <h3 className="text-3xl md:text-4xl font-['Inter:Bold',sans-serif] text-white leading-tight">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-300 text-lg font-['Inter:Regular',sans-serif] leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-['Inter:Regular',sans-serif]">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4">
          <a href={linkGH} className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors group">
            Ver detalles del proyecto
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Rohigarnez S.L.",
      category: "WEB CORPORATIVA",
      description: "Este proyecto consiste en una página web moderna para la empresa Rohigarnez, diseñada para mostrar sus servicios y productos de manera clara y atractiva. La web permite a los usuarios conocer la empresa, explorar sus servicios, consultar testimonios de clientes y ponerse en contacto fácilmente. La interfaz es responsiva y fácil de usar, adaptándose a cualquier dispositivo, y cuenta con elementos visuales coherentes con la identidad de la empresa. El proyecto fue desarrollado utilizando React para el frontend y TailwindCSS para los estilos, demostrando capacidades en el desarrollo de aplicaciones web dinámicas y profesionales.",
      image: imgRG,
      tags: ["React", "JavaScript", "MongoDB", "Node.js", "JWT / Auth"],
      linkGH: 'https://github.com/sergiomtzs96/rohigarnez',
    },
    {
      title: "Home Inventory",
      category: "Plataforma de Control de Stock",
      description: "Este proyecto es una aplicación web diseñada para ayudar a los usuarios a organizar y controlar todos los productos y objetos de su hogar. Permite añadir y clasificar artículos por categorías y ubicaciones, llevar control de cantidades y fechas importantes, y consultar el inventario de forma rápida y sencilla. La interfaz es intuitiva y responsiva, pensada para ofrecer una experiencia clara y práctica, mientras que funcionalidades como filtros, búsqueda y descarga de reportes facilitan la gestión del inventario doméstico. Este proyecto fue desarrollado utilizando React para el frontend, TailwindCSS para el diseño y estilo, y tecnologías modernas de almacenamiento y gestión de datos, demostrando capacidades en el desarrollo de aplicaciones web completas y funcionales.",
      image: imgHI,
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "JWT / Auth"],
      linkGH: 'https://github.com/sergiomtzs96/home-inventory'
    },
    {
      title: "Portafolio Sergio Martínez",
      category: "Portafolio Personal",
      description: "Este proyecto consiste en mi propia página web de portafolio, diseñada para mostrar de manera clara y profesional mis proyectos, habilidades y experiencia en desarrollo web. La web permite a los visitantes explorar mis trabajos, ver detalles de cada proyecto y conocer las tecnologías que utilizo, todo desde una interfaz moderna, limpia y responsiva. La página está construida con React para componentes dinámicos y TailwindCSS para un diseño rápido, coherente y adaptativo a cualquier dispositivo. Incluye secciones de proyectos, contacto, información personal y badges de tecnologías, ofreciendo una experiencia de usuario clara y profesional.",
      image: imgPF,
      tags: ["React", "Animations / Motion", "TailwindCSS", "JavaScript"],
      linkGH: 'https://github.com/sergiomtzs96/portfolio-react',
      link: 'https://sergiomtzs.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-['Inter:Bold',sans-serif] text-white mb-6">Proyectos Seleccionados</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Una colección de trabajos que destacan mi pasión por el diseño limpio y el código eficiente.
        </p>
      </motion.div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
      
      <div className="mt-24 text-center">
         <a href="https://github.com/sergiomtzs96" className="inline-block px-8 py-4 border border-white/20 rounded-full text-white font-medium hover:bg-white hover:text-[#020040] transition-colors">
            Ver todos los proyectos en Github
         </a>
      </div>
    </section>
  );
}