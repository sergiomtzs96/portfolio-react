import ViewProyects from './ViewProyects';
import portfolioImg from '../img/portfolio.png';
import portfolioBasic from '../img/basic portfolio.png';

function Proyects({ id }) {
    const infoProyects = [
        {
            title: 'Portfolio with React',
            description: 'Portafolio personal con React. Es esta web en la que estás navegando',
            image: portfolioImg,
            tecnology1: 'React',
            tecnology2: 'Node.js',
            tecnology3: 'Tailwind',
            tecnology4: 'JavaScript',
            code: 'https://github.com/sergiomtzs96/portfolio-react'
        },
        {
            title: 'Basic Portfolio',
            description: 'Portafolio básico utilizando las tres tecnologías principales.',
            image: portfolioBasic,
            tecnology1: 'HTML',
            tecnology2: 'Tailwind CSS',
            tecnology3: 'JavaScript',
            tecnology4: 'Git',
            code: 'https://github.com/sergiomtzs96/porfolio',
            link: 'https://sergiomtzs96.netlify.app/',
        },
        {
            title: 'Random Events',
            description: 'Sitio web de venta de entradas para eventos. Realización en las prácticas de empresa de DAW',
            image: 'https://images.unsplash.com/photo-1742440711413-da7afb0f4930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTU0NTk2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            tecnology1: 'HTML',
            tecnology2: 'Bootstrap',
            tecnology3: 'PHP',
            tecnology4: 'MySQL',
            code: 'https://github.com/sergiomtzs96/RandomEvents',
        }
    ];
    return (
        <div id={id} className="mt-10 mb-20 flex flex-col w-full items-center mx-auto">
            <div className="w-full text-center"  data-aos="fade-up">
                <h4 className="text-3xl font-bold">Proyectos Destacados</h4>
                <p className="text-gray-500">Una selección de mis proyectos más recientes que demuestran mis habilidades y experiencia</p>
            </div>
            <div className='flex flex-col w-full items-center justify-center mt-10' data-aos="fade-right">
                {infoProyects.map((proyecto, index) => 
                <ViewProyects key={index} image={proyecto.image} title={proyecto.title} description={proyecto.description} tecnology1={proyecto.tecnology1} tecnology2={proyecto.tecnology2} tecnology3={proyecto.tecnology3} tecnology4={proyecto.tecnology4} code={proyecto.code} link={proyecto.link} />
            )}
            </div>
        </div>
    )
}

export default Proyects;
