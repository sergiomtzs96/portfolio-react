import sergio from '../img/sergio-color.png';
import download from '../img/download.svg';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import email from '../img/email.svg';
import arrowDown from '../img/arrowdown.svg';
import cv from '../img/CV SERGIO DAW DEFINITIVO.pdf';
// If you get an error with the above import, try the following instead:
// const sergio = require('../img/sergio-color.png');

const Header = () => {
    return (
        <div id="header" className='mt-30 h-210 flex flex-col items-center justify-center text-center gap-y-6 bg-linear-to-b from-white to-pink-50'>
            <div className=''>
                <img src={sergio} alt="imagen" className='w-64 rounded-full hover:scale-125 transition-transform duration-300 ease-in-out mask-b-from-50% mask-b-to-90%' />
            </div>
            <div className='w-full text-center'>
                <p className='text-6xl font-bold mb-5'>Hola, soy <span className='bg-linear-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent'>Sergio Martínez</span></p>
                <p className='text-2xl text-gray-500 text-center'>Desarrollador web especializado en crear experiencias web modernas, funcionales y visualmente atractivas</p>
            </div>
            <div className='flex gap-4 text-center justify-center items-center'>
                <div className='p-4 bg-linear-to-r from-cyan-500 to-violet-500 rounded-xl hover:scale-110 transform-transition duration-300 ease-in-out'>
                    <a className=' text-white font-bold' href="#proyects">Ver mis proyectos</a>
                </div>
                <div className='p-4 pr-8 pl-8 border-3 border-blue-500 rounded-xl hover:bg-blue-500 text-blue-500 font-bold hover:text-white transform-transition duration-300 ease-in-out'>
                    <a href="#contact">Contacto</a>
                </div>
                <div>
                    <a href={cv} download className='flex gap-3 bg-gray-100 p-4 rounded-xl pr-8 pl-8 hover:shadow-lg hover:bg-gray-200 transform-transition duration-300 ease-in-out'><img className='w-6' src={download} alt="descarga" />Descargar CV</a>
                </div>
            </div>
            <div className='flex gap-8 mt-5 items-center'>
                <img className='w-8 hover:scale-110 transform-transition duration-300 ease-in-out ' src={github} alt="github" />
                <img className='w-8 hover:scale-110 transform-transition duration-300 ease-in-out' src={linkedin} alt="linkedin" />
                <img className='w-8 hover:scale-110 transform-transition duration-300 ease-in-out' src={email} alt="email" />
            </div>
            <div className='mt-20 transform -translate-x-1/2 animate-bounce'>
                <img className='w-5' src={arrowDown} alt="arrow" />
            </div>
        </div>
    )
}

export default Header;