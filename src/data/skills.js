import { Monitor, Server, Cloud, Palette } from "lucide-react";

export const skillCategories = [
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
