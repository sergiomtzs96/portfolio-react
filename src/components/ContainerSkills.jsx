import Progress from './Progress';
import azul from '../img/azul.svg';
import green from '../img/green.svg';
import morado from '../img/morado.svg';

function ContainerSkills({ title, skills, img }) {

    const images = {
        blue: azul,
        green: green,
        violet: morado
    };

    const colorClasses = {
        blue: "shadow-blue-500",
        green: "shadow-green-500",
        violet: "shadow-violet-500"
    };
    
    
    return (
        <div className='mb-10 flex flex-col items-center shadow-lg rounded-lg'>
            <div className='flex flex-col items-center border-1 border-gray-100 rounded-lg w-full'>
                <div className='flex flex-col items-center gap-y-4 mt-10'>
                    <img className={`w-10 rounded-lg shadow-xl shadow-xl ${colorClasses[img]}`} src={images[img]} alt={img} />
                    <p className='font-bold text-2xl'>{title}</p>
                </div>
                {skills.map((skill, index) =>
                    <Progress
                        key={index}
                        name={skill.name}
                        porcentaje={skill.porcentaje}
                        color={skill.color}
                    />
                )}
            </div>
        </div>
    )
}

export default ContainerSkills;