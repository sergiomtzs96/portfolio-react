

function Progress({name, porcentaje, color}) {

    const colorClasses = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        violet: "bg-violet-500"
    };

    return (
        <div className='w-full pl-10 pr-10'>
            <div className='flex justify-between mb-1 text-base font-medium items-center'>
                <div><p>{name}</p></div>
                <div>
                    <p className={`p-1 rounded-full text-white ${colorClasses[color]}`}  >{porcentaje}</p>
                </div>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 mt-4'>
                <div className={`h-2.5 rounded-full ${colorClasses[color]}`} style={{width: porcentaje }} ></div>
            </div>
        </div>

    )
}

export default Progress;