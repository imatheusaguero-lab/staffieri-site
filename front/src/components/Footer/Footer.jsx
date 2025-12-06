import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return(
        <section className="footer-section">
            <div className="footer-content">
                {/*Topo*/}
                <div className="footer-top">
                    {/*Esquerdo*/}
                    <img src="" alt="Logo Staffieri" className="footer-logo"/>

                    {/*Direito*/}
                    <div className="footer-social-media">
                        <FaInstagram className="icon-media"/>
                        <FaFacebook className="icon-media" />
                        <FaWhatsapp className="icon-media" />
                    </div>
                </div>
                {/*Fim Topo*/}

                {/*Base*/}
                <div className="footer-base">
                    <p>2025© Staffieri. Todo o conteúdo deste site é de uso exclusivo da Staffieri. Proibida reprodução ou utilização a qualquer título, sob as penas da lei.</p>
                </div>
                {/*FimBase*/}
            </div>


        </section>
    )
}