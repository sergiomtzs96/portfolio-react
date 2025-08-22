import InfoContact from './InfoContact';
import email from '../img/email-contact.svg';
import phone from '../img/phone-contact.svg';
import location from '../img/location-contact.svg';
import FormContact from './FormContact';

function Contact() {

    const dates = {
        email: 'sergiomtzs96@gmail.com',
        phone: '656644312',
        ubi: 'Madrid, España',

    }

    return (
        <div id='contact' className="w-full flex flex-col items-center mb-20 px-4">
            <div className='w-full text-center' data-aos="fade-up">
                <p className="font-bold text-3xl">Contacto</p>
                <p className="text-gray-500">¿Tienes un proyecto en mente? !Me encantaría saber de ti y colaborar juntos!</p>
            </div>
            <div className="w-full flex flex-col text-center mt-10" data-aos="fade-down">
                <p className="text-2xl font-bold">Hablemos</p>
                <p className="mt-5 text-gray-500">Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar sobre tecnología y desarrollo web</p>
            </div>
            <div className='w-full lg:max-w-2xl' data-aos="fade-right">
                <InfoContact img={email} title="Email" date={dates.email} color="blue" />
                <InfoContact img={phone} title="Teléfono" date={dates.phone} color="green" />
                <InfoContact img={location} title="Ubicación" date={dates.ubi} color="violet" />
            </div>
            <div className='w-full lg:max-w-2xl' data-aos="fade-right">
                <FormContact />
            </div>
        </div>
    )
}

export default Contact;