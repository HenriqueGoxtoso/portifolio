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
            descricao:'Criação de logo para o alambique Tatu de Ouro do cachaceiro Lodimar Gavazzoni.',
            imagem:'/tatu.png'
        },
        {
            id:2,
            titulo:'GamaMotors',
            descricao:'Criação de site para a loja de carros GamaMotors.',
            imagem:'/gamamotors.png'
        },
        {
            id:3,
            titulo:'GempSistem',
            descricao:'Criação de desing para um software de Gerenciamento de estoque.',
            imagem:'/gempsistem.png'
        },
        {
            id:4,
            titulo:'Projeto Hidroponia',
            descricao:'Projeto extra disciplinar sobre hidroponia.',
            imagem:'/projetoHidroponia.png'
        },
        {
            id:5,
            titulo:'Prototipo de Portifólio',
            descricao:'Design de média fidelidade do meu portifólio.',
            imagem:'/prototipo.png'
        }
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
        <div className="campo_pesquisa">
            <p>Busque:</p>
            <input type="text" 
            className='botao_pesquisa'
            placeholder='Pesquise um Projeto'
            onChange={TrataTexto}/>
            
        </div>
        <div>
        {texto && <p className='resultados'>Resultados para: {texto}</p>}
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


