import { useState } from 'react'
import "./Contato.css";
function Contato(){
    const [digitado, setTextoC]=useState("")

    function TrataTextoDigitado(e:React.ChangeEvent<HTMLInputElement>){
        setTextoC(e.target.value)
    }
    return(
        <div className="Adess">
            <div className="Adess2">
                <h1 className="titulo">ESCREVA SUA MENSAGEM</h1>
            <input className="nome" type="text" placeholder="Nome" onChange={TrataTextoDigitado}/>
            <div className="textodigitado">
          {digitado && <p>Nome Informado: {digitado}</p>}
       </div>
            <input className="e-mail" type="text" placeholder="E-mail"/>
            <input className="telefone" type="text" placeholder="Telefone" />
            <input className="campo-mensagem" type="text" placeholder="Escreva sua mensagem aqui"/>
            <button className="button-envio">Enviar</button>
            </div>
        </div>
    )
}
export default Contato

