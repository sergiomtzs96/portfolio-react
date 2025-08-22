import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='w-full flex items-center p-2 border-b border-gray-300' data-aos="fade-right">
        <div className='p-3'>
          <a className='hover:text-blue-500' href=""><h1 className='font-bold text-2xl'>Sergio</h1></a>
        </div>

        {/* Botón hamburguesa (móvil) */}
        <button
          className='ml-auto md:hidden p-2'
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        {/* Menú pantallas grandes */}

        <div className='hidden lg:flex w-full items-center justify-end p-2'>
          <ul className='flex gap-6 text-gray-500 items-center'>
            <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#header" >Inicio</a></li>
            <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#aboutme">Acerca de</a></li>
            <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#proyects">Proyectos</a></li>
            <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#skills">Habilidades</a></li>
            <li className='hover:rounded-lg hover:bg-gray-200 p-2 hover:text-blue-600 hover:font-bold'><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>

      {/* Menú móvil (cuando open = true ) */}

      {open && (
        <div className="md:hidden w-full bg-white shadow-lg">
          <ul className="flex flex-col gap-4 text-gray-600 p-4">
            <li>
              <a
                href="#header"
                className="block hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                className="block hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#proyects"
                className="block hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;