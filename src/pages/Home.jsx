import Hero from "../components/Hero";
import CaseStudies from "../components/CaseStudies";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="space-y-32">
      <Hero />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <CaseStudies />
      <div className="grid lg:grid-cols-2 gap-16">
        <TechStack />
        <Experience />
      </div>
    </div>
  );
}
