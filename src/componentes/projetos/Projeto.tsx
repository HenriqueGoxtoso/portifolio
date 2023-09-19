import './Projeto.css'
type ProjetoProps = {
    titulo:string,
    descricao:string,
    imagem:string
}

function Projeto(props:ProjetoProps){
    return(
        <div className="Projeto-content">
            <div className="foto_projeto">
                <img src={props.imagem} alt="" />
            </div>
        
        <div className="text_projeto">
            <h1>{props.titulo}</h1>
            <p className="descricao">{props.descricao}</p>

            </div>
        </div>
    )
}

export default Projeto
