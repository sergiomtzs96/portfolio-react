import React, { useState } from 'react';


const Navbar = () => {
    return (
        <nav>
            <div className='flex items-center p-2 border-b border-gray-300'>
                <div className='ml-30'>
                    <a className='hover:text-blue-500' href=""><h1 className='font-bold text-2xl'>Sergio</h1></a>
                </div>
                <div className='flex w-full items-center justify-end mr-30'>
                    <ul className='flex gap-6 text-gray-500 items-center'>
                        <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#" >Inicio</a></li>
                        <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#">Acerca de</a></li>
                        <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#">Proyectos</a></li>
                        <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#">Habilidades</a></li>
                        <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;