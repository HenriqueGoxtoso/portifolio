import './Header.css'
import Link from './../link/Link'
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
                        <Link texto='Projetos'/>
                    </li>
                    <li>
                        <Link texto='Trabalhos'/>
                    </li>
                    <li>
                        <Link texto='Currículo'/>
                    </li>
                    <li>
                        <Link texto='Menu'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header