import ViewProyects from './ViewProyects';

function Proyects({ id }) {
    const infoProyects = [
        {
            title: 'Portfolio with React',
            description: 'Portafolio personal con React. Es esta web en la que estás navegando',
            image: 'https://private-user-images.githubusercontent.com/144632086/480586151-b213c4bf-b8e4-4ad8-bad3-d59f3c8b63ce.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU4MTQ3MjksIm5iZiI6MTc1NTgxNDQyOSwicGF0aCI6Ii8xNDQ2MzIwODYvNDgwNTg2MTUxLWIyMTNjNGJmLWI4ZTQtNGFkOC1iYWQzLWQ1OWYzYzhiNjNjZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyMVQyMjEzNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zN2QwNjVkNTQ0ZDdkNzU2NjA3ZGZhZWUxNmYzMGFlZDMwZTMwOGE4NTY1YTgwMzNiZjYzYWE1ODYyYWNlNDY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.H8zAky3nzgcwnsJHdKiR5Jmvxa2rUhszxO0cITtLqXU',
            tecnology1: 'React',
            tecnology2: 'Node.js',
            tecnology3: 'Tailwind CSS',
            tecnology4: 'JavaScript',
            code: 'https://github.com/sergiomtzs96/portfolio-react'
        },
        {
            title: 'Basic Portfolio',
            description: 'Portafolio básico utilizando las tres tecnologías principales.',
            image: 'https://private-user-images.githubusercontent.com/144632086/480726673-0133f354-073c-4bda-8f72-74907e42532b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU4MTU3MjcsIm5iZiI6MTc1NTgxNTQyNywicGF0aCI6Ii8xNDQ2MzIwODYvNDgwNzI2NjczLTAxMzNmMzU0LTA3M2MtNGJkYS04ZjcyLTc0OTA3ZTQyNTMyYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyMVQyMjMwMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZmRkZWJjNTA5YWZkYzJmZTVlYTMwOWE2YjZjN2NjZjcxN2YyMDIwNzYyZDVmNzA3ODJmZDM4NGIzMTM2MjVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.aXBp5AdMqZ7-w25P_K2yY9-z4C8rby3OKUaXFGKFwvU',
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
        <div id={id} className="mt-10 mb-20 flex flex-col w-full items-center">
            <div className="w-200 text-center">
                <h4 className="text-3xl font-bold">Proyectos Destacados</h4>
                <p className="text-gray-500">Una selección de mis proyectos más recientes que demuestran mis habilidades y experiencia</p>
            </div>
            <div className='flex flex-col w-full items-center mt-10'>
                {infoProyects.map((proyecto, index) => 
                <ViewProyects key={index} image={proyecto.image} title={proyecto.title} description={proyecto.description} tecnology1={proyecto.tecnology1} tecnology2={proyecto.tecnology2} tecnology3={proyecto.tecnology3} tecnology4={proyecto.tecnology4} code={proyecto.code} link={proyecto.link} />
            )}
            </div>
        </div>
    )
}

export default Proyects;
