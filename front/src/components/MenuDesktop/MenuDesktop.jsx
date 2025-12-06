import "./MenuDesktop.css";
import { Link } from "react-router-dom";

export default function MenuDesktop(){
    return(
        <section className="menu-desktop-section">
            <nav className="menu-desktop-nav-container">
                <ul className="menu-desktop-list">
                    <li className="menu-desktop-list-itens"><Link to="/">Home</Link></li>
                    <li className="menu-desktop-list-itens"><Link to="/portfolio">Portfólio</Link></li>
                    <li className="menu-desktop-list-itens"><Link to="/#services">Nossos Serviços</Link></li>
                    <li className="menu-desktop-list-itens"><Link to="/#contact">Fale Conosco</Link></li>
                </ul>
            </nav>
        </section>
    )
}