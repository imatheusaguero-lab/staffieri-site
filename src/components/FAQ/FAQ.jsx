import "./FAQ.css";
import { IoIosArrowForward } from "react-icons/io";

export default function FAQ(){
    return(
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-title">Dúvidas Frequentes</h2>
                <div className="faq-cards">
                    <div className="faq-card">
                        <h3 className="faq-card-title">Quantidade Mínima</h3>
                        <button className="faq-card-icon"><IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}