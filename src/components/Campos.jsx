const Campos = ( {icon, campo, description} ) => {
    return(
        <div className='flex flex-col items-center mt-10'>
            <div className='flex flex-col items-center text-center border-1 border-gray-200 w-full rounded-xl p-6 hover:shadow-lg transform-transition duration-300 ease-in-out'>
                <img className='w-12' src={icon} alt="icono" />
                <p className='font-bold'>{campo}</p>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    )
}

export default Campos;