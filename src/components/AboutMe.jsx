import code from '../img/code.jpg';
import Stats from '../components/Stats.jsx'
import Campos from '../components/Campos.jsx';
import users from '../img/users.svg';
import coffee from '../img/coffee.svg';
import medal from '../img/medal.svg';
import coding from '../img/coding.svg';
import ray from '../img/ray.svg';
import palette from '../img/palette.svg';

const AboutMe = () => {
    return (
        <div className="mt-20 mb-10 w-full">
            <div className='justify-center p-10 text-center'>
                <div className="flex flex-col text-center gap-y-5">
                    <h1 className="text-3xl font-bold">Acerca de mí</h1>
                    <p className="text-2xl text-gray-500">Soy un desarrollador apasionado con 1 año de experiencia creando proyectos propios y con ganas de emprender mi carrera profesional</p>
                </div>
                <div className='mt-10 w-full flex flex-col items-center text-center brightness-50'>
                    <img className='w-150 rounded-xl' src={code} alt="code" />
                </div>
            </div>
            <div className='text-justify p-10 w-full'>
                <h5 className='text-2xl font-bold'>Mi historia</h5>
                <p className='mt-5'> Comencé mi viaje en el desarrollo web hace más de 5 años. Mi pasión por resolver problemas complejos y crear experiencias digitales excepcionales me ha llevado a especializarme en tecnologías modernas como React, Node.js y cloud computing.

                    Me encanta trabajar en proyectos desafiantes donde puedo combinar creatividad con tecnología para crear soluciones que realmente impacten a los usuarios. </p>
            </div>
            <div className='w-full flex items-center justify-center gap-20'>
                <Stats icon={users} value="50+" description="Proyectos completados" />
                <Stats icon={medal} value="5+" description="Años de experiencia" />
                <Stats icon={coffee} value="20000" description="Tazas de café" />
            </div>
            <div>
                <Campos icon={coding} campo="Desarrollo Frontend" description="Experto en React, Vue.js y tecnologías modernas de frontend" />
                <Campos icon={ray} campo="Desarrollo Backend" description="Especializado en Node.js, Python y bases de datos modernas" />
                <Campos icon={palette} campo="Diseño UI/UX" description="Creación de interfaces intuititvas y experiencias de usuario excepcionales" />
            </div>
        </div>
    )
}

export default AboutMe;