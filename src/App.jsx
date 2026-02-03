<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import ContadorR from './assets/componentes2/ContadorR.jsx'
import BarrasHerramientas from './assets/componenteUseContext/BarraHerramientas.jsx'
import TemaContext from './contextos/TemaContext.jsx'
import temas from './mocks/mock-temas.js'
import React from 'react';
import BotonTema from './assets/componenteUseContext/BotonTema.jsx'
{/*import  Header from './componentes/Header.jsx'
import Dashboard from './componentes/Dashboard.jsx'
import Roles from './componentes/Roles.jsx'
import Contador2 from './assets/componentes/Contador2'
*/}
=======
import './App.css';
import Header from './assets/componentes/Header.jsx'
import Dashboard from './assets/componentes/Dashboard.jsx'
import Roles from './assets/componentes/Roles.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
<<<<<<< HEAD
>>>>>>> origin/ActividadDesarrolloApartadoAyB
=======
import UserContext from './contextos/UserContext';
>>>>>>> origin/ActividadDesarrolloCyD


function App() {
  let valor={id:1,nombre:"Administrador"}
  const [user , setUser]=useState(valor)
  
  return (
<<<<<<< HEAD

    /* EJERCICIO 1 
        <div className="container-fluid cuerpo">
=======
import  Header from './componentes/Header.jsx'
import Dashboard from './componentes/Dashboard.jsx'
import Roles from './componentes/Roles.jsx'
function App() {

  return (
    <>
      <div className="container-fluid cuerpo">
>>>>>>> origin/RamaFatima
        <div className='row'>
          <div className='col-12'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <Roles />
          </div>
          <div className='col-8'>
            
            <Dashboard />
          </div>
        </div>
      </div>
<<<<<<< HEAD
    */
    /* EJERCICIO 2<div>
      <p>Ejemplo de useState</p>
      {/*<Contador contador = {props.contador}></Contador>
      <Contador2></Contador2>
    </div>*/
    /*<Contador3></Contador3>
    
        <ContadorR contador = {props.contador}></ContadorR>*/
    <>

      <TemaContext.Provider value={temas.dark}>
        <BarrasHerramientas></BarrasHerramientas>
      </TemaContext.Provider>
=======


>>>>>>> origin/RamaFatima

    </>
=======
    <div className="container-fluid ">
      <div className='row'>
        <header className='col-12 col-md-12 header'>
          <Header usuario={user} />
        </header>
      </div>
      <div className='row'>
        <aside className='col-3 col-md-3 order-1 order-md-1 aside'>
          <UserContext.Provider value={user}>
            <Roles  />
          </UserContext.Provider>
          
        </aside>
        <main className='col-9 col-md-9 order-2 order-md-2 main'>
          <UserContext.Provider value={user}>
            <Dashboard />
          </UserContext.Provider>   
        </main>
      </div>
    </div>
>>>>>>> origin/ActividadDesarrolloApartadoAyB
  )

}

export default App
