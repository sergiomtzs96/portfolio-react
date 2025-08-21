import InfoContact from './InfoContact';
import email from '../img/email-contact.svg';
import phone from '../img/phone-contact.svg';
import location from '../img/location-contact.svg';
import FormContact from './FormContact';

function Contact() {

    return(
        <div className="w-full flex flex-col items-center mb-20">
            <p className="font-bold text-3xl">Contacto</p>
            <p className="text-gray-500">¿Tienes un proyecto en mente? !Me encantaría saber de ti y colaborar juntos!</p>
            <div className="w-200 flex flex-col items-start mt-10">
                <p className="text-2xl font-bold">Hablemos</p>
                <p className="text-justify mt-5 text-gray-500">Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar sobre tecnología y desarrollo web</p>
            </div>
            <div>
                <InfoContact img={email} title="Email" date="hola@miportafolio.com" color="blue" />
                <InfoContact img={phone} title="Teléfono" date="123456789" color="green" />
                <InfoContact img={location} title="Ubicación" date="Madrid, España" color="violet" />
            </div>
            <div>
                <FormContact />
            </div>
        </div>
    )
}

export default Contact;