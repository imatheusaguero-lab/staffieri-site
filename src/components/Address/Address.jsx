import "./Address.css"

export default function Address(){
    return(
        <section className="address-section">
            <div className="address-container">
                <h2 className="address-title">Nosso Endereço</h2>
                <div className="address-info">
                    <p className="address-text">
                        Avenida Coronel Miguel Brisola de Oliveira, 933 - Jardim Avinópolis, Atibaia - SP
                    </p>
                    <div className="address-hours">
                        <h3>Horário:</h3>
                        <p>Segunda à Sexta: 9hrs às 16hrs</p>
                    </div>
                </div>
            </div>
        </section>
    )
}