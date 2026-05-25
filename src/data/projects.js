import HI1 from '../img/proyectos/projectsIMG/HomeInventory1.png';
import HI2 from '../img/proyectos/projectsIMG/HomeInventory2.png';
import HI3 from '../img/proyectos/projectsIMG/HomeInventory3.png';
import HI4 from '../img/proyectos/projectsIMG/HomeInventory4.png';
import HI5 from '../img/proyectos/projectsIMG/HomeInventory5.png';
import HI6 from '../img/proyectos/projectsIMG/HomeInventory6.png';
import AC1 from '../img/proyectos/AquaClean/ac1.png';
import AC2 from '../img/proyectos/AquaClean/ac2.png';
import AC3 from '../img/proyectos/AquaClean/ac3.png';
import AC4 from '../img/proyectos/AquaClean/ac4.png';
import AC5 from '../img/proyectos/AquaClean/ac5.png';
import AC6 from '../img/proyectos/AquaClean/ac6.png';
import AC7 from '../img/proyectos/AquaClean/ac7.png';
import AC8 from '../img/proyectos/AquaClean/ac8.png';

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
    image: [HI1, HI2, HI3, HI4, HI5, HI6],
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
    id: "aquacleanpro",
    title: "AquaCleanPro",
    category: "Web Corporativa",
    description: "Plataforma web profesional para empresa de servicios de limpieza. Catálogo de servicios, solicitud de presupuestos online y panel de administración para gestión de clientes.",
    features: [
      "Catálogo interactivo de servicios",
      "Solicitud de presupuestos online",
      "Panel de administración protegido"
    ],
    tags: ["React", "Node.js", "MongoDB"],
    image: [AC1, AC2, AC3, AC4, AC5, AC6, AC7, AC8],
    linkGH: 'https://github.com/sergiomtzs96/rohigarnez'
  }
];
