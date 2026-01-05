import React from "react";
import { motion } from "motion/react";
import { 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  GitBranch, 
  Cloud, 
  Palette, 
  PenTool, 
  Monitor, 
  Layers,
  Container,
  Globe
} from "lucide-react";

const SkillCategory = ({ title, icon: Icon, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-6 group"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-white/5 text-blue-300 group-hover:bg-blue-500/10 group-hover:text-blue-200 transition-colors">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-['Inter:Bold',sans-serif] text-white">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-4 py-2 border border-white/10 rounded-lg text-gray-300 text-sm font-['Inter:Regular',sans-serif] hover:border-blue-300/50 hover:bg-white/[0.03] transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: ["React", "TypeScript", "Vue.js", "Angular", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "MongoDB", "SQL", "RESTful APIs", "MySQL", "Authentication"]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD Pipelines", "Linux", "Nginx", "Performance"]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Prototyping", "Wireframing", "Responsive Design", "Accessibility (a11y)", "User Research", "Adobe Creative Suite"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-['Inter:Bold',sans-serif] text-white mb-6">
          Arsenal Técnico
        </h2>
        <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
          Un conjunto de herramientas y tecnologías modernas que utilizo para construir soluciones digitales robustas y escalables.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-20">
        {categories.map((category, index) => (
          <SkillCategory key={category.title} {...category} index={index} />
        ))}
      </div>
    </section>
  );
}