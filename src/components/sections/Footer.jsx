import TextType from "../gsap/TextType";
import GradientText from "../gsap/GradientText";

import { Github, Instagram, Facebook, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
export default function Footer() {

    const dates = {
        email: 'sergiomtzs96@gmail.com',
        phone: '656644312',
        ubi: 'Madrid, España',

    }

    return (
        <div className="bg-[var(--primary)]">
            <div className="md:grid grid-cols-3 p-10 w-full mx-auto gap-8">
                <div className="flex flex-col max-w-xl h-full items-center justify-center">
                    <TextType
                        text={["Sergio Martínez", "Desarrollador Full Stack"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className={'pb-10 text-2xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent sm:pt-10'}
                    />

                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="text-2xl text-gray-500 text-center"
                    >
                        Desarrollador web especializado en crear experiencias web modernas, funcionales y visualmente atractivas
                    </GradientText>
                    <div className="flex gap-4 pt-6">
                        <div className="bg-gray-400 p-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"> <a href="https://github.com/sergiomtzs96" target="_blank" rel="noopener noreferrer"> <Github color="white" /> </a></div>
                        <div className="bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] p-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"> <a href="https://www.instagram.com/sergiomtzs96/" target="_blank" rel="noopener noreferrer"> <Instagram color="white" /> </a></div>
                        <div className="bg-gradient-to-tr from-[#00C6FF] to-[#0072FF] p-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"> <a href="https://www.facebook.com/sergioalberto.martinezsalmeron" target="_blank" rel="noopener noreferrer"> <Facebook color="white" /> </a></div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-white text-center py-4 space-y-2">
                    <h3 className="text-center">Contacto</h3>
                    <div className="text-start space-y-4">
                        <a className="flex gap-2" mailto="sergiomtzs96@gmail.com" href="mailto:sergiomtzs96@gmail.com"><Mail color="aqua" /> sergiomtzs96@gmail.com</a>
                        <a className="flex gap-2"> <Phone color="green" /> 656644312 </a>
                        <a className="flex gap-2"> <MapPin color="red" /> Madrid, España</a>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-white">Enlaces rápidos: </h3>
                    <div>
                        <ul className="text-md text-white space-y-2">
                            <li><a href="#header">Inicio</a></li>
                            <li><a href="#aboutme">Sobre mí</a></li>
                            <li><a href="#skills">Habilidades</a></li>
                            <li><a href="#proyects">Proyectos</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <hr className="text-white" />
            </div>
            <div className="flex flex-col items-center text-center py-6 px-4">
                <p className="flex gap-4 items-center text-center text-white">© Sergio Martínez. Hecho con <span><Heart color="red" size={16} /></span> y React + TailwindCSS </p>
                <a className="mt-4 flex justify-center animate-bounce bg-indigo-400 p-2 rounded-lg text-gray-300" href="#header"><ArrowUp /></a>
            </div>
        </div>
    )
}

