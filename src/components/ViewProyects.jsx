import github from '../img/github.svg';
import ventana from '../img/window.svg';
export default function ViewProyects({ image, title, description, tecnology1, tecnology2, tecnology3, tecnology4, link, code }) {
    return (
        <div className='mt-10 w-full flex flex-col  p-3 lg:max-w-2xl'>
            <div className='flex flex-col h-full group relative overflow-hidden w-full border border-gray-300 rounded-xl shadow-xl'>
                <img className='rounded-t-xl object-cover group-hover:scale-110 transition duration-300 ease-in-out w-full h-80' src={image} alt="proyecto" />
                <div className='mt-5 p-4 flex flex-col h-full justify-between'>
                    <p className='font-bold text-xl'>{title}</p>
                    <p className='text-gray-500 mt-3'>{description}</p>
                    <div className='flex gap-4 mt-3 w-full'>
                        <p className='bg-blue-200 text-blue-800 p-2 rounded-2xl w-auto'>{tecnology1}</p>
                        <p className='bg-blue-200 text-blue-800 p-2 rounded-2xl w-auto'>{tecnology2}</p>
                        <p className='bg-blue-200 text-blue-800 p-2 rounded-2xl w-auto'>{tecnology3}</p>
                        <p className='bg-blue-200 text-blue-800 p-2 p-1 rounded-2xl w-auto'>{tecnology4}</p>
                    </div>
                    <div className='mt-5 flex gap-2 items-center justify-center w-full lg:justify-start'>
                        <div className='border-2 border-gray-300 rounded-lg w-full items-center hover:border-blue-500 hover:text-blue-500 transition duration-300 lg:w-32'>
                            <a className='flex gap-2 p-3 justify-center' href={code}><img className='w-4' src={github} alt="github" /> Código </a>
                        </div>
                        <div className='bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl hover:brightness-125 transition duration-300 ease-in-out w-full lg:w-auto'>
                            <a className='flex gap-2 p-3 text-white ' href={link}> <img className='w-4' src={ventana} alt="ventana " /> Ver proyecto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

