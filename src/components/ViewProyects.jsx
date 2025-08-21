import github from '../img/github.svg';
import ventana from '../img/window.svg';
const ViewProyects = ({image, title, description, tecnology1, tecnology2, tecnology3, tecnology4}) => {
    return (
        <div className='mt-10'>
            <div className='group relative overflow-hidden w-150 border-1 border-gray-300 rounded-xl shadow-xl'>
                <img className='rounded-t-xl object-cover group-hover:scale-110 transform-transition duration-300 ease-in-out w-full h-80' src={image} alt="proyecto" />
                <div className='mt-5 p-4'>
                    <p className='font-bold'>{title}</p>
                    <p className='text-gray-500 mt-3'>{description}</p>
                    <div className='flex gap-4 mt-3'>
                        <p className='bg-blue-200 text-blue-800 pr-3 pl-3 p-1 rounded-2xl'>{tecnology1}</p>
                        <p className='bg-blue-200 text-blue-800 pr-3 pl-3 p-1 rounded-2xl'>{tecnology2}</p>
                        <p className='bg-blue-200 text-blue-800 pr-3 pl-3 p-1 rounded-2xl'>{tecnology3}</p>
                        <p className='bg-blue-200 text-blue-800 pr-3 pl-3 p-1 rounded-2xl'>{tecnology4}</p>
                    </div>
                    <div className='mt-5 flex gap-2 items-center'>
                        <div className='border-3 border-gray-300 rounded-lg w-28 items-center hover:border-blue-500 hover:text-blue-500 transform-transition duration-300'>
                            <a className='flex gap-2 p-3 justify-center' href="#"><img className='w-4' src={github} alt="github" /> Código </a>
                        </div>
                        <div className='bg-linear-to-r from-cyan-500 to-violet-500 rounded-xl hover:brightness-125 transform-transition duration-300 ease-in-out'>
                            <a className='flex gap-2 p-3 text-white' href="#"> <img className='w-4' src={ventana} alt="ventana " /> Ver proyecto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProyects;