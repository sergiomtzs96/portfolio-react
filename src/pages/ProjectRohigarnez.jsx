import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ProjectRohigarnez() {
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
            Rohigarnez S.L.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Página web corporativa moderna para la empresa Rohigarnez, diseñada para mostrar sus servicios y productos de manera clara y profesional.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="https://github.com/sergiomtzs96/rohigarnez"
            className="flex items-center gap-2 bg-foreground text-background px-5 py-2 font-medium text-sm hover:bg-foreground/90 transition-colors"
          >
            Ver Repositorio
          </a>
        </div>
      </section>

      <section className="border border-border bg-secondary/30 p-4 md:p-8">
        <img
          src="/src/img/proyectos/imageRohigarnez.png"
          alt="Rohigarnez S.L."
          className="w-full object-cover rounded-sm border border-border"
        />
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
                Rohigarnez S.L. necesitaba una presencia web profesional que reflejara la calidad de sus servicios de fontanería y reformas. El objetivo era crear un sitio web moderno, responsivo y fácil de navegar.
              </p>
              <p>
                Desarrollé una aplicación completa con React para el frontend y Node.js con Express para el backend, con MongoDB como base de datos. La web incluye un panel de administración para gestionar servicios, testimonios y solicitudes de contacto.
              </p>
              <p>
                Implementé autenticación JWT para el panel de administración y diseñé una API REST completa para la gestión de contenido.
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
