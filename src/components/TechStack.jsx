import { motion } from "motion/react";
import { Cpu } from "lucide-react";
import { techStack } from "../data/techStack";

export default function TechStack() {
  return (
    <section id="stack" className="space-y-6 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Cpu size={18} className="text-muted-foreground" />
          Tech Stack Core
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-0 border border-border bg-card"
      >
        {techStack.map((tech, i) => (
          <div
            key={tech.name}
            className={`flex items-center gap-2.5 p-4 border-b border-r border-border hover:bg-secondary transition-colors
              ${(i + 1) % 3 === 0 ? 'sm:border-r-0' : ''}
              ${i >= 6 ? 'border-b-0' : ''}
            `}
          >
            <tech.icon className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-mono">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
