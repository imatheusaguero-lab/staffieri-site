import "./ContactForm.css";

export default function ContactForm(){
    return(
        
        <form action="get" className="contact-form">
            <div className="contact-form-top">
                <div className="contact-form-top-left">
                    {/*Nome*/}
                    <label className="contact-form-label margin-top-default" htmlFor="name">Seu Nome:</label>
                    <input type="text" id="name" placeholder="Digite o seu nome" autoComplete="name" required/>
                    
                    {/*Email*/}
                    <label className="contact-form-label margin-top-default" htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Digite o seu email" autoComplete="email" required/>
                    
                </div>
                <div className="contact-form-top-right">
                    {/*Empresa*/}
                    <label className="contact-form-label margin-top-default" htmlFor="empresa">Empresa:</label>
                    <input type="text" id="empresa" name="empresa" placeholder="Digite o nome da empresa" />
                    {/*Telefone*/}
                    <label className="contact-form-label margin-top-default" htmlFor="phone">Telefone:</label>
                    <input type="tel" id="phone" name="phone" placeholder="(99) 99999-9999" autoComplete="tel" required/>
                </div>
                    
            </div>
            <div className="contact-form-down">
                <label className="contact-form-label margin-top-default" htmlFor="assunto">Assunto:</label>
                    <input type="text" id="assunto" name="assunto" placeholder="Digite o assunto" required />
                <label className="contact-form-label margin-top-default" htmlFor="message">Mensagem:</label>
                    <input type="text" id="message" name="message" placeholder="Descreva o que precisa" required />
            </div>
            <button type="submit" className="contact-form-button margin-top-default">Enviar</button>
        </form>
    )
}