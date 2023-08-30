import "./Footer.css";
import logo from './../img/logo.png'
function Footer(){
    return(
        <footer>
            <section>
            <img id="logo" src={logo} alt="" />
            </section>
            <section>
                

<img src="https://static.vecteezy.com/system/resources/previews/016/716/469/original/instagram-icon-free-png.png" alt="" />
<img src="https://cdn.icon-icons.com/icons2/1476/PNG/512/twitter_101809.png" alt="" />
<img src="https://cdn.icon-icons.com/icons2/91/PNG/512/facebook_16423.png" alt="" />

            </section>

            <section>
            <a href="#">Termos de Serviço</a>
            
            </section>
           <section>
           <a href="#">Política de Privacidade</a>
           </section>
           <section>
            <p className="texto-footer">@GoxtosoCompany</p>
           </section>
        </footer>
    )
}

export default Footer