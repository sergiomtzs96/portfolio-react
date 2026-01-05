import React from "react";
import { motion } from "motion/react";
import { Download, Github, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import imgSergioFormal1 from "../img/sergio-formal.png";

export default function Header() {

    const SocialButton = ({ Icon, href }) => (
        <a href={href || "#"} className="w-[58px] h-[56px] border border-white rounded-[100px] flex items-center justify-center hover:bg-white/10 transition-colors group">
            <Icon className="text-[#F3F3F3] w-[30px] h-[30px] stroke-[1.5]" />
        </a>
    );

    const ActionButton = ({ text, icon: Icon, primary, href, download }) => (
        <a
            href={href || "#"}
            download={download}
            className={`h-[48px] px-6 border rounded-[6px] flex items-center gap-2 font-['Inter:Regular',sans-serif] text-[14px] transition-colors
      ${primary
                    ? "bg-white text-[#020040] border-white hover:bg-gray-200"
                    : "border-white text-white hover:bg-white hover:text-[#020040]"
                }`}
        >
            {text}
            {Icon && <Icon size={16} />}
        </a>
    );

    const SkillItem = ({ title, desc }) => (
        <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="font-['Inter:Bold',sans-serif] text-xl text-white">{title}</h3>
            <p className="font-['Inter:Regular',sans-serif] text-gray-300 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    );


    return (
        <section id="home" className="relative pt-32 md:pt-40 pb-20 px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-8 z-10 order-2 lg:order-1"
                >
                    <div className="font-['Inter:Bold',sans-serif] text-white">
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                            Disponible para trabajar
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Hola, soy <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                                Sergio Martínez
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-lg leading-relaxed">
                            Desarrollador web especializado en crear experiencias digitales modernas, funcionales y visualmente impactantes.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <ActionButton text="Ver mis proyectos" primary href="#projects" />
                        <ActionButton text="Contacto" href="#contact" />
                        <ActionButton
                            text="CV"
                            icon={Download}
                            href="/img/CVSERGIOESPAÑOL2025.pdf"
                            download
                        />
                    </div>

                    <div className="flex gap-4 mt-8">
                        <SocialButton Icon={Github} href='https://github.com/sergiomtzs96' />
                        <SocialButton Icon={Linkedin} href='https://www.linkedin.com/in/sergiomtzs96/' />
                        <SocialButton Icon={ Facebook } href='https://www.facebook.com/sergioalberto.martinezsalmeron?locale=es_ES'/>
                        <SocialButton Icon={Instagram} href='https://www.instagram.com/sergiomtzs96/?hl=es'/>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-full flex items-center justify-center lg:justify-end order-1 lg:order-2"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

                    <img
                        src={imgSergioFormal1}
                        alt="Sergio Martínez"
                        className="relative z-10 max-h-[600px] w-auto object-contain drop-shadow-2xl mask-image-gradient"
                    />
                </motion.div>
            </div>

            {/* Detailed "About" Section (Integrated) */}
            <motion.div
                id="about"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="border-t border-white/10 pt-24"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-['Inter:Bold',sans-serif] text-white mb-6">Mi Historia</h2>
                        <p className="text-gray-300 leading-relaxed font-['Inter:Regular',sans-serif] mb-6">
                            Apasionado por la tecnología desde joven, he dedicado mi carrera a perfeccionar el arte del desarrollo web.
                        </p>
                        <p className="text-gray-300 leading-relaxed font-['Inter:Regular',sans-serif]">
                            Me enfoco en la intersección entre diseño y funcionalidad, asegurando que cada línea de código contribuya a una experiencia de usuario excepcional.
                        </p>
                    </div>

                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <SkillItem
                            title="Desarrollo Frontend"
                            desc="Especialista en React, Tailwind CSS y arquitecturas modernas para crear interfaces rápidas y reactivas."
                        />
                        <SkillItem
                            title="Diseño UI/UX"
                            desc="Enfoque centrado en el usuario, con atención al detalle en micro-interacciones y accesibilidad."
                        />
                        <SkillItem
                            title="Optimización"
                            desc="Compromiso con el rendimiento web, SEO y buenas prácticas de codificación limpia."
                        />
                        <SkillItem
                            title="Colaboración"
                            desc="Experiencia trabajando en equipos ágiles, transformando ideas complejas en soluciones digitales tangibles."
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}