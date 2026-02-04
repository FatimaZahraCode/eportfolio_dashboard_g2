import './App.css';
import Header from './componentes/componentesPrincipales/Header.jsx'
import Dashboard from './componentes/componentesPrincipales/Dashboard.jsx'
import Roles from './componentes/componentesPrincipales/Roles.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState } from 'react';
import Home from './paginas/Home.jsx';
import Menu from './menu/Menu.jsx';
import { Routes, Route } from 'react-router-dom';
import Bienvenido from './paginas/Bienvenido.jsx';
import Contacto from './paginas/Contacto.jsx';
import Nosotros from './paginas/Nosotros.jsx';
import tareasRA from './mocks/mock-tareasRA.js'
import TokenContext from './contextos/TokenContext.jsx';
function App() {


  return (

    <>
      {/* <Menu /> */}
      <TokenContext.Provider value={tareasRA}>
        <Home />
      </TokenContext.Provider>
      
      {/* <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/bienvenido" element={<Bienvenido></Bienvenido>} />
        <Route path="/contacto" element={<Contacto></Contacto>} />
        <Route path="/nosotros" element={<Nosotros></Nosotros>} />
      </Routes> */}
    </>

  )

}

export default App
