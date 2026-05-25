import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Carousel from "../components/Carousel";
import AC1 from "../img/proyectos/AquaClean/ac1.png";
import AC2 from "../img/proyectos/AquaClean/ac2.png";
import AC3 from "../img/proyectos/AquaClean/ac3.png";
import AC4 from "../img/proyectos/AquaClean/ac4.png";
import AC5 from "../img/proyectos/AquaClean/ac5.png";
import AC6 from "../img/proyectos/AquaClean/ac6.png";
import AC7 from "../img/proyectos/AquaClean/ac7.png";
import AC8 from "../img/proyectos/AquaClean/ac8.png";

const images = [AC1, AC2, AC3, AC4, AC5, AC6, AC7, AC8];

export default function ProjectAquaCleanPro() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
        <ArrowLeft size={16} /> Volver
      </Link>

      <section className="space-y-6">
        <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
          <span>Case Study 03</span>
          <span className="w-8 h-px bg-border"></span>
          <span>Web Corporativa</span>
        </div>
        <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            AquaCleanPro
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Plataforma web profesional para empresa de servicios de limpieza. Catálogo de servicios, solicitud de presupuestos online y panel de administración para gestión de clientes.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="https://github.com/sergiomtzs96/rohigarnez"
            className="flex items-center gap-2 bg-foreground text-background px-5 py-2 font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Ver Repositorio
          </a>
          <a
            href="https://aquacleanprosl.vercel.app/"
            className="flex items-center gap-2 bg-foreground text-background px-5 py-2 font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Ir a la web
          </a>
        </div>
      </section>

      <section className="border border-border bg-secondary/30 p-2 md:p-3">
        <div className="border border-border overflow-hidden bg-card">
          <div className="h-10 border-b border-border bg-secondary flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/60"></div>
            <span className="ml-4 text-[11px] font-mono text-muted-foreground">AquaCleanPro — Screenshots</span>
          </div>
          <Carousel images={images} />
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Frontend", desc: "React, JavaScript, TailwindCSS" },
          { label: "Backend", desc: "Node.js, Express" },
          { label: "Database", desc: "MongoDB with Mongoose" },
          { label: "Auth", desc: "JWT Authentication" }
        ].map((tech) => (
          <div key={tech.label} className="p-5 border border-border bg-card">
            <h3 className="font-mono text-sm mb-1 text-foreground">{tech.label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </section>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Descripción del Proyecto</h2>
            <div className="text-muted-foreground leading-relaxed text-sm space-y-4">
              <p>
                AquaCleanPro necesitaba una presencia web profesional que reflejara la calidad de sus servicios de limpieza. El objetivo era crear un sitio web moderno con catálogo de servicios y un sistema de solicitud de presupuestos online.
              </p>
              <p>
                Desarrollé una aplicación full-stack con React para el frontend y Node.js con Express para el backend, con MongoDB como base de datos. La web incluye un panel de administración protegido con JWT para gestionar servicios y clientes.
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="border border-border bg-card p-5 space-y-4 sticky top-24">
            <h3 className="font-mono text-sm text-foreground border-b border-border pb-2">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"].map((t) => (
                <span key={t} className="px-2 py-1 bg-secondary text-[10px] font-mono border border-border text-muted-foreground">{t}</span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <h3 className="font-mono text-sm text-foreground mb-3">Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                  <span className="text-emerald-400 mt-0.5">-</span>
                  <span>Panel de administración protegido</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                  <span className="text-emerald-400 mt-0.5">-</span>
                  <span>Gestión de servicios y testimonios</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                  <span className="text-emerald-400 mt-0.5">-</span>
                  <span>Formulario de contacto integrado</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                  <span className="text-emerald-400 mt-0.5">-</span>
                  <span>Diseño responsivo y moderno</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
