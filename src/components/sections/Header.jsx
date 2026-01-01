import sergio from '../../img/sergio-formal.png';
import download from '../../img/download.svg';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';
import email from '../../img/email.svg';
import arrowDown from '../../img/arrowdown.svg';
import cv from '../../img/CV SERGIO ESPAÑOL 2025.pdf';

import TextType from '../gsap/TextType.jsx';
import GradientText from '../gsap/GradientText.jsx';
import Particles from '../gsap/Particles.jsx';
export default function Header() {
    return (
        <div>
            <div id="header" className='grid grid-cols-2 grid-rows-1 gap-4 items-center text-center w-full flex  min-h-screen place-items-center px-10 bg-gray-100'>
            <div className='absolute ' style={{ width: '100%', height: '800px', position: 'absolute' }}>
                <Particles
                    particleColors={['#444444ff', '#0a0a0aff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={200}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
                <div className='flex flex-col space-y-20'>
                    <div className='' data-aos="fade-up">
                        <TextType
                            text={["Hola, soy Sergio Martínez", "Desarrollador Full Stack", "Bienvenido a mi portafolio"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className={'text-4xl lg:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent'}
                        />
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="text-2xl text-gray-500 text-center"
                        >
                            Desarrollador web especializado en crear experiencias web modernas, funcionales y visualmente atractivas
                        </GradientText>
                    </div>
                    <div className='w-full flex flex-col lg:flex-row gap-4 text-center justify-between items-center px-3' data-aos="fade-down">
                        <a href="#proyects" className='p-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl text-white font-bold hover:scale-110 transition duration-300 ease-in-out w-full active:scale-95 transition-all duration-300'>Ver mis proyectos</a>
                        <a href="#contact" className='w-full p-4 px-6 border-2 border-blue-500 rounded-xl hover:bg-blue-500 text-blue-500 font-bold hover:text-white active:scale-95 transition duration-300 ease-in-out'>Contacto</a>
                        <a href={cv} download className='w-full flex gap-3 bg-gray-100 p-4 rounded-xl justify-center p-2 hover:shadow-lg hover:bg-gray-200 active:scale-95 transition duration-300 ease-in-out'><img className='w-6' src={download} alt="descarga" />Descargar CV</a>

                    </div>
                    <div className='flex gap-8 mt-5 items-center justify-center w-full' data-aos="fade-right">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <img className='w-8 hover:scale-110 transition duration-300 ease-in-out' src={github} alt="github" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <img className='w-8 hover:scale-110 transition duration-300 ease-in-out' src={linkedin} alt="linkedin" />
                        </a>
                        <a href="mailto:your.email@example.com">
                            <img className='w-8 hover:scale-110 transition duration-300 ease-in-out' src={email} alt="email" />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <img src={sergio} alt="imagen" className='w-200 h-auto' />
                </div>
            </div>
            <div className='mt-20 flex justify-center animate-bounce'>
                <img className='w-5' src={arrowDown} alt="arrow" />
            </div>
        </div>
    )
}