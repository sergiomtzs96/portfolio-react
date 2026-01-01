import code from '../../img/code.jpg';
import Stats from '../Stats.jsx'
import Campos from '../Campos.jsx';
import users from '../../img/users.svg';
import coffee from '../../img/coffee.svg';
import medal from '../../img/medal.svg';
import coding from '../../img/coding.svg';
import ray from '../../img/ray.svg';
import palette from '../../img/palette.svg';

export default function AboutMe() {
    return (
        <div className='bg-gray-100'>
            <div id='aboutme' className="grid grid-cols-2 grid-rows-1 gap-4 max-w-7xl mx-auto" data-aos="fade-up">
                <div className='flex flex-col h-full justify-center'>

                    <div className='max-w-3xl flex flex-col w-full items-center p-10 text-center'>
                        <div className="w-full">
                            <h1 className="text-3xl font-bold mb-5">Acerca de mí</h1>
                            <p className="text-2xl text-gray-500">Soy un desarrollador apasionado con 1 año de experiencia creando proyectos propios y con ganas de emprender mi carrera profesional</p>
                        </div>
                        <div className='mt-10 w-full flex flex-col items-center text-center brightness-50'>
                            <img className='w-full max-w-2xl rounded-xl' src={code} alt="code" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center text-justify p-10 w-full'>
                    <div className='' data-aos="fade-down">
                        <div className='w-full '>
                            <h5 className='text-2xl font-bold text-center'>Mi historia</h5>
                            <p className='mt-5'> Comencé mi viaje en el desarrollo web hace más de 5 años. Mi pasión por resolver problemas complejos y crear experiencias digitales excepcionales me ha llevado a especializarme en tecnologías modernas como React, Node.js y cloud computing.

                                Me encanta trabajar en proyectos desafiantes donde puedo combinar creatividad con tecnología para crear soluciones que realmente impacten a los usuarios. </p>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center gap-3' data-aos="fade-right">
                        <div className='flex flex-col lg:flex-row gap-5 justify-between w-full lg:max-w-2xl'>
                            <Stats icon={users} value="3" description="Proyectos completados" />
                            <Stats icon={medal} value="2" description="Años de experiencia" />
                            <Stats icon={coffee} value="20.000" description="Tazas de café" />
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center p-3' data-aos="fade-left">
                        <div className='w-full justify-center lg:max-w-2xl'>
                            <Campos icon={coding} campo="Desarrollo Frontend" description="Experto en React, Vue.js y tecnologías modernas de frontend" />
                            <Campos icon={ray} campo="Desarrollo Backend" description="Especializado en Node.js, Python y bases de datos modernas" />
                            <Campos icon={palette} campo="Diseño UI/UX" description="Creación de interfaces intuititvas y experiencias de usuario excepcionales" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}