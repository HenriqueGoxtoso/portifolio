import './Header.css'
import LinkNav from './../linknav/LinkNav'
import logo from './../img/logo.png'
function Header(){
    return(
        <header>
            <div>
                <img id='logoheader' src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/projetos" texto='Projetos'/>
                    </li>
                    <li>
                        <LinkNav url="/trabalhos" texto='Trabalhos'/>
                    </li>
                    <li>
                        <LinkNav url="/curriculo" texto='Currículo'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                    <li>
                        <LinkNav url="/menu" texto='Menu'/>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header