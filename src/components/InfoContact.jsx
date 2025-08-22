import email from '../img/email-contact.svg';

function InfoContact({img, title, date, color}) {

     const colorClasses = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        violet: "bg-violet-500"
    }

    return(
        <div className='bg-gray-50 flex gap-5 items-center p-2 w-full mt-5 rounded-lg hover:scale-110 hover:shadow-lg transform-transition duration-300 ease-in-out'>
            <div className={`rounded-lg ${colorClasses[color]}`}>
                <img className='w-16 p-3' src={img} alt="email" />
            </div>
            <div className='flex flex-col'>
                <p className='font-bold text-xl'>{title}</p>
                <p className='text-gray-500 text-lg'>{date}</p>
            </div>
        </div>
    )
}

export default InfoContact;