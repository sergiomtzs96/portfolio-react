import sergio from '../img/sergio-color.png';
import download from '../img/download.svg';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import email from '../img/email.svg';
import arrowDown from '../img/arrowdown.svg';
import cv from '../img/CV SERGIO ESPAÑOL 2025.pdf';
// If you get an error with the above import, try the following instead:
// const sergio = require('../img/sergio-color.png');

const Header = () => {
    return (
        <div id="header" className='mt-20 w-full min-h-screen flex flex-col items-center justify-center text-center gap-y-6 p-2 mx-auto'>
            <div data-aos="fade-up">
                <img src={sergio} alt="imagen" className='w-64 rounded-full hover:scale-125 transition-transform duration-300 ease-in-out' />
            </div>
            <div className='w-full text-center' data-aos="fade-up">
                <p className='text-6xl font-bold mb-5'>Hola, soy <span className='bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent'>Sergio Martínez</span></p>
                <p className='text-2xl text-gray-500 text-center'>Desarrollador web especializado en crear experiencias web modernas, funcionales y visualmente atractivas</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row  gap-4 text-center justify-between items-center p-3' data-aos="fade-down">
                <a href="#proyects" className='p-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl text-white font-bold hover:scale-110 transition duration-300 ease-in-out w-full active:scale-95 transition-all duration-300'>Ver mis proyectos</a>
                <a href="#contact" className='w-full p-4 px-6 border-2 border-blue-500 rounded-xl hover:bg-blue-500 text-blue-500 font-bold hover:text-white active:scale-95 transition duration-300 ease-in-out'>Contacto</a>
                <a href={cv} download className='w-full flex gap-3 bg-gray-100 p-4 rounded-xl justify-center p-2 hover:shadow-lg hover:bg-gray-200 active:scale-95 transition duration-300 ease-in-out'><img className='w-6' src={download} alt="descarga" />Descargar CV</a>

            </div>
            <div className='flex gap-8 mt-5 items-center justify-center w-full' data-aos="fade-right">
                <img className='w-8 hover:scale-110 transition duration-300 ease-in-out ' src={github} alt="github" />
                <img className='w-8 hover:scale-110 transition duration-300 ease-in-out' src={linkedin} alt="linkedin" />
                <img className='w-8 hover:scale-110 transition duration-300 ease-in-out' src={email} alt="email" />
            </div>
            <div className='mt-20 flex justify-center animate-bounce'>
                <img className='w-5' src={arrowDown} alt="arrow" />
            </div>
        </div>
    )
}

export default Header;