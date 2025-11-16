import "./MenuDesktop.css"

export default function MenuDesktop(){
    return(
        <section className="menu-desktop-section">
            <nav className="menu-desktop-nav-container">
                <ul className="menu-desktop-list">
                    <li className="menu-desktop-list-itens"><a href="#home">Home</a></li>
                    <li className="menu-desktop-list-itens"><a href="/portfolio">Portfólio</a></li>
                    <li className="menu-desktop-list-itens"><a href="#services">Nossos Serviços</a></li>
                    <li className="menu-desktop-list-itens"><a href="#contact">Fale Conosco</a></li>
                </ul>
            </nav>
        </section>
    )
}