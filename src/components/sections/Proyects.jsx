import ViewProyects from '../ViewProyects';
import portfolioImg from '../../img/portfolio.png';
import portfolioBasic from '../../img/basic portfolio.png';
import imageInventory from '../../img/imageHomeInventory.jpeg';
import imageRohigarnez from '../../img/imageRohigarnez.png';

export default function Proyects({ id }) {
    const infoProyects = [
        {
            title: 'Web Rohigarnez S.L.',
            description: 'Desarrollo de sitio web corporativo con información de servicios, contacto y galería de proyectos.',
            image: imageRohigarnez,
            tecnology1: 'React.js',
            tecnology2: 'JavaScript',
            tecnology3: 'MongoDB',
            tecnology4: 'IA',
            code: null
        },
        {
            title: 'Home Inventory',
            description: 'Aplicación web full stack para la gestión del inventario doméstico y la lista de compra. Permite controlar productos, filtrar por ubicación o categoría y recibir alertas de caducidad, ayudando a organizar mejor el hogar y reducir el desperdicio. Desarrollada con React (frontend), Node.js y Express (backend) y MongoDB (base de datos). Incluye autenticación segura con JWT, CRUD completo y diseño responsive con TailwindCSS.',
            image: imageInventory,
            tecnology1: 'React.js',
            tecnology2: 'Node.js',
            tecnology3: 'Express',
            tecnology4: 'MongoDB',
            code: 'https://github.com/sergiomtzs96/home-inventory'
        },
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
            <div className="w-full text-center" data-aos="fade-up">
                <h4 className="text-3xl font-bold">Proyectos Destacados</h4>
                <p className="text-gray-500">Una selección de mis proyectos más recientes que demuestran mis habilidades y experiencia</p>
            </div>
            <div className='grid grid-cols-2 h-full ' data-aos="fade-right">
                {infoProyects.map((proyecto, index) =>
                    <ViewProyects key={index} image={proyecto.image} title={proyecto.title} description={proyecto.description} tecnology1={proyecto.tecnology1} tecnology2={proyecto.tecnology2} tecnology3={proyecto.tecnology3} tecnology4={proyecto.tecnology4} code={proyecto.code} link={proyecto.link} />
                )}
            </div>
        </div>
    )
}

