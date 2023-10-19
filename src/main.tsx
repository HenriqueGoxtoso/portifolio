import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Contato from './componentes/contato/Contato'
import Footer from './componentes/footer/Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element:<>
              <Header/>
              <Main/>
              <Footer/>
            </>,
  },
  {
    path: "/projetos",
    element: <div>Página de Projetos!</div>,
  },
  {
    path: "/trabalhos",
    element: <div>Página de Trabalhos!</div>,
  },
  {
    path: "/curriculo",
    element: <div>Página de Currículos!</div>,
  },
  {
    path: "/contato",
    element: 
    <>
      <Header/>
      <Contato/>
      <Footer/>
    </>,
  },

  {
    path: "/menu",
    element: <div>Página de Menu!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)