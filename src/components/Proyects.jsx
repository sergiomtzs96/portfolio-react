import ViewProyects from './ViewProyects';

function Proyects() {
    const infoProyects = [
        {
            title: 'E-commerce Platform',
            description: 'Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel de administración.',
            image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTU0NDIwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            title: 'Task Management App',
            description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
            image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTQ0MDI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            title: 'Portfolio Website',
            description: 'Sitio web de portafolio responsive con animaciones suaves, modo oscuro y optimización SEO.',
            image: 'https://images.unsplash.com/photo-1742440711413-da7afb0f4930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTU0NTk2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        }
    ];
    return (
        <div className="mt-10 mb-20">
            <div className="flex flex-col items-center">
                <h4 className="text-3xl font-bold">Proyectos Destacados</h4>
                <p className="text-gray-500">Una selección de mis proyectos más recientes que demuestran mis habilidades y experiencia</p>
            </div>
            <div className='flex flex-col items-center mt-10'>
                {infoProyects.map((proyecto, index) => 
                <ViewProyects key={index} image={proyecto.image} title={proyecto.title} description={proyecto.description} tecnology1="React" tecnology2="Node.js" tecnology3="MongoDB" tecnology4="Stripe"  />
            )}
            </div>
        </div>
    )
}

export default Proyects;
