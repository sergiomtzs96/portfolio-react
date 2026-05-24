import { motion } from "motion/react";
import { Terminal, ChevronRight } from "lucide-react";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="space-y-6 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Terminal size={18} className="text-muted-foreground" />
          Experiencia
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-0 border border-border bg-card"
      >
        {experience.map((exp) => (
          <div key={exp.role} className="p-5 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h3 className="text-sm font-semibold font-mono">{exp.role}</h3>
              <span className="text-[10px] font-mono text-muted-foreground bg-background border border-border px-2 py-1">{exp.period}</span>
            </div>
            <div className="text-xs text-muted-foreground mb-3 font-mono">{exp.company}</div>
            <ul className="space-y-2">
              {exp.descriptions.map((desc) => (
                <li key={desc} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                  <ChevronRight size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
