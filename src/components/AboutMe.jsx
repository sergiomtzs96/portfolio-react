import code from '../../img/code.jpg';
import Stats from '../Stats.jsx'
import Campos from '../Campos.jsx';
import users from '../../img/users.svg';
import coffee from '../../img/coffee.svg';
import medal from '../../img/medal.svg';
import coding from '../../img/coding.svg';
import ray from '../../img/ray.svg';
import palette from '../../img/palette.svg';

import { CodeXml, ServerCog, Palette, Users, Medal, Coffee } from 'lucide-react'

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import DomeGallery from '../gsap/DomeGallery'
import BlurText from '../gsap/BlurText';

export default function AboutMe() {

    const skills = [
        {
            icon: <CodeXml size={40} color='purple' />,
            title: 'Frontend',
            description: 'Experto en React y tecnologías modernas de frontend'
        },
        {
            icon: <ServerCog size={40} color='yellow' />,
            title: 'Backend',
            description: 'Especializado en Node.js, Python y bases de datos modernas'
        },
        {
            icon: <Palette size={40} color='blue' />,
            title: 'Diseño UI/UX',
            description: 'Creación de interfaces intuitivas y experiencias de usuario excepcionales.'
        }
    ]

    const data = [
        {
            icon: <Users />,
            title: 'Proyectos Completados',
            data: 3
        },
        {
            icon: <Medal />,
            title: 'Años de experiencia',
            data: 1.5
        },
        {
            icon: <Coffee />,
            title: 'Tazas de Café',
            data: 16.522
        }
    ]

    const handleAnimationComplete = () => {
        console.log('MI historia');
    };

    return (
        <div className='bg-[#11057E]'>
            <div id='aboutme' className="md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4 md:w-full md:mx-auto md:px-6" data-aos="fade-up">
                <div className='flex flex-col h-full justify-center w-full'>
                    <div className='hidden md:block' style={{ width: '50vw', height: '100vh' }}>
                        <DomeGallery />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center text-justify md:p-10 w-full'>
                    <Card className={'bg-[#11057E] text-white'}>
                        <CardHeader>
                            <CardTitle className={'flex flex-col gap-4 space-y-4'}>
                                <BlurText
                                    text="Mi historia"
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                    onAnimationComplete={handleAnimationComplete}
                                    className="flex justify-center text-2xl lg:text-4xl  mb-8 text-center font-bold"
                                />
                                <p>Comencé mi viaje en el desarrollo web hace más de 5 años. Mi pasión por resolver problemas complejos y crear experiencias digitales excepcionales me ha llevado a especializarme en tecnologías modernas como React, Node.js y cloud computing.

                                    Me encanta trabajar en proyectos desafiantes donde puedo combinar creatividad con tecnología para crear soluciones que realmente impacten a los usuarios.</p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='flex flex-col w-full lg:flex-row items-center justify-center gap-3 pb-6 md:h-50' data-aos="fade-right">
                                {data.map((data, j) => (
                                    <Card className={'w-full h-full justify-between'}>
                                        <CardHeader>
                                            <CardTitle>
                                                <div className='flex flex-col gap-4 items-center justify-center text-justify'>
                                                    <div>{data.icon}</div>
                                                    <p className='text-center'>{data.title}</p>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className={'flex justify-center'}>
                                            <p className='text-2xl font-bold'>{data.data}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4' data-aos="fade-left">
                                {skills.map((skill, i) => (
                                    <Card className={'w-full'}>
                                        <CardHeader>
                                            <CardTitle className={'flex justify-center'}>
                                                <div className='flex gap-4 items-center'>
                                                    {skill.icon}
                                                    <p>{skill.title}</p>
                                                </div>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='text-center'>{skill.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}