import imgRG from '../img/proyectos/imageRohigarnez.png';
import imgHI from '../img/proyectos/imageHomeInventory.jpeg';

export const projects = [
  {
    id: "home-inventory",
    title: "Home Inventory SaaS",
    category: "SaaS / Fullstack",
    description: "Plataforma full-stack para gestión de inventario. Análisis de arquitectura MVC, diseño de API REST, implementación de autenticación JWT y creación de cuadros de mando reactivos.",
    features: [
      "Autenticación JWT y roles",
      "API REST con Express/MongoDB",
      "Dashboard UI & CRUD"
    ],
    tags: ["React", "Node.js", "MongoDB"],
    image: imgHI,
    linkGH: 'https://github.com/sergiomtzs96/home-inventory'
  },
  {
    id: "football-stats",
    title: "Data Analytics Platform",
    category: "Data Platform",
    description: "Plataforma intensiva en datos. Integración de APIs deportivas complejas, normalización de payloads, sistema de caché y visualización interactiva de analíticas.",
    features: [
      "Normalización de datos en cliente",
      "Renderizado condicional avanzado",
      "Gráficos de rendimiento (Recharts)"
    ],
    tags: ["React", "REST APIs", "Recharts"],
    linkGH: 'https://github.com/sergiomtzs96/portfolio-react'
  },
  {
    id: "rohigarnez",
    title: "Rohigarnez S.L.",
    category: "Web Corporativa",
    description: "Página web corporativa moderna para Rohigarnez, diseñada para mostrar servicios y productos. Interfaz responsiva con elementos visuales coherentes con la identidad de la empresa.",
    features: [
      "Diseño responsivo y moderno",
      "Secciones de servicios y testimonios",
      "Formulario de contacto integrado"
    ],
    tags: ["React", "JavaScript", "Node.js", "MongoDB"],
    image: imgRG,
    linkGH: 'https://github.com/sergiomtzs96/rohigarnez'
  }
];
