import './Header.css'
import { FaUser } from "react-icons/fa"; // ícone de usuário


export default function Header() {
    return (
        <header className='header-container'>
            <div className='header-content'>
                {/*Lado Esquerdo*/}
                {/*Logo*/}
                <img 
                    src=""
                    alt="Logo Staffieri"
                    className="logo"
                />
                {/*Fim Lado Esquerdo*/}

                {/*Lado Direito*/}
                <div className="account-wrapper">
                    {/*Ícone à Esquerda*/}
                    <div className='icon-wrapper'>
                        <FaUser className="user-icon" />
                    </div>
                
                    {/*Conjunto à Direita*/}
                    <div className='text-wrapper'>
                        <span className='top-text'>Minha Conta</span>
                        <span className='bottom-text'>Entrar / Cadastrar</span>
                    </div>
                {/*FimLado Direito*/}
                </div>
            {/*Fim Lado Direito*/}
            </div>
        </ header>

    )
}