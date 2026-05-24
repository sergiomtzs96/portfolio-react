import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Layers, CheckCircle2, Box, LineChart, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

const iconMap = {
  "home-inventory": Box,
  "football-stats": LineChart,
  "rohigarnez": Box
};

export default function CaseStudies() {
  return (
    <section id="proyectos" className="space-y-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Layers size={20} className="text-muted-foreground" />
          Casos de Estudio
        </h2>
        <p className="text-muted-foreground text-sm max-w-2xl">
          Análisis profundo de la arquitectura, toma de decisiones y desarrollo fullstack detrás de mis aplicaciones principales.
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, index) => {
          const Icon = iconMap[project.id] || Box;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Link to={`/${project.id}`} className="block group">
                <div className="border border-border bg-card overflow-hidden hover:border-foreground/30 transition-colors">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center">
                            <Icon className="text-foreground w-5 h-5" />
                          </div>
                          <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="space-y-2 pt-4">
                          {project.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                              <CheckCircle2 size={14} className="text-muted-foreground" /> {f}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-8 flex items-center justify-between">
                        <div className="flex gap-2">
                          {project.tags.map((t) => (
                            <span key={t} className="px-2 py-1 bg-secondary text-[10px] font-mono border border-border text-muted-foreground">{t}</span>
                          ))}
                        </div>
                        <span className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:underline">
                          Ver Case Study <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                    <div className="bg-secondary/30 relative h-[300px] md:h-auto overflow-hidden">
                      <div className="absolute inset-0 p-8 flex items-center justify-center">
                        <div className="w-full h-full bg-card border border-border shadow-2xl rounded-sm overflow-hidden flex flex-col transform group-hover:scale-[1.02] transition-transform duration-500">
                          <div className="h-6 border-b border-border flex items-center px-3 gap-2 bg-secondary">
                            <div className="w-2 h-2 rounded-full bg-border"></div>
                            <div className="w-2 h-2 rounded-full bg-border"></div>
                            <div className="w-2 h-2 rounded-full bg-border"></div>
                          </div>
                          <div className="flex-1 flex">
                            <div className="w-16 border-r border-border bg-secondary/50"></div>
                            <div className="flex-1 p-4 space-y-3">
                              <div className="h-4 w-1/3 bg-secondary rounded-sm"></div>
                              <div className="grid grid-cols-3 gap-2">
                                <div className="h-16 bg-secondary/50 rounded-sm border border-border"></div>
                                <div className="h-16 bg-secondary/50 rounded-sm border border-border"></div>
                                <div className="h-16 bg-secondary/50 rounded-sm border border-border"></div>
                              </div>
                              <div className="h-24 bg-secondary/50 rounded-sm border border-border w-full mt-4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
