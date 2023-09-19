import {useState} from 'react'
import Projeto from '../projetos/Projeto'
import "./Main.css";

type ProjetoType={
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
export default function Main(){
    const [texto,setTexto]=useState("")
    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Pinga Tatu de Ouro',
            descricao:'',
            imagem:'/tatu.png'
        },
        {
            id:2,
            titulo:'GamaMotors',
            descricao:'',
            imagem:'/gamamotors.png'
        },
        {
            id:3,
            titulo:'GempSistem',
            descricao:'',
            imagem:'/gempsistem.png'
        }
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
        <div className="campo_pesquisa">
            <p>Busque</p>
            <input type="text" 
            className='botao_pesquisa'
            placeholder='Pesquise um Projeto'
            onChange={TrataTexto}/>
            {texto && <p>Resultados: {texto}</p>}
        </div>
        <main className="content-main">
            {
                projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                    (projeto)=>
                    <Projeto
                    key={projeto.id}
                    descricao={projeto.descricao}
                    titulo={projeto.titulo}
                    imagem={projeto.imagem}
                    />
                )
            }
        </main>
        </>
    )
}


