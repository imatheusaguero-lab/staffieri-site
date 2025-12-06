import ContactForm from "../ContactForm/ContactForm";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";


export default function Contact(){
    return(
        <section className="contact-section" id="contact">
                <div className="contact-container container-principal">

                <h2 className="margin-top-default">Fale Conosco</h2>
                <div className="contact-bottom-whatsapp">
                    <FaWhatsapp /> 
                    <p className="margin-top-default">WhatsApp - (11)972697116</p>
                </div>
                <p className="margin-top-default">ou</p>
                <ContactForm />
            </div>
        </section>
    )
}