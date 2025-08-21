

const Stats = ({icon, value, description}) => {
    return(
        <div>
            <div className='flex flex-col items-center text-center'>
                <img className='w-8 mb-3' src={icon} alt="icono" />
                <p className='text-2xl font-bold'>{value}</p>
                <i className='text-gray-500'>{description}</i>
            </div>
        </div>
    )
}

export default Stats;