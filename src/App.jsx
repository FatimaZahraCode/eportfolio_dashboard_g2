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
import Funcionalidadestudiante from './componentes/Funcionalidades/Funcionalidadestudiante.jsx';
import FuncionalidadDocente from './componentes/Funcionalidades/FuncionalidadDocente.jsx';
function App() {


  return (

    <>
      {/* <Menu />
      <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />} /> */}
      <TokenContext.Provider value={tareasRA}>
        <Home />
      </TokenContext.Provider>

      <Routes>
        <Route path="/"/>
        <Route path="/funcionalidaddocente/:modulo"  />
        <Route path="/funcionalidadestudiante/:modulo" element={<Funcionalidadestudiante />} />
        <Route path="/familiasprofesionales" />
        <Route path="/ciclosformativos/"  />
        <Route path="/modulosformativos/"  />
        <Route path="/ra/" />
        <Route path="/ce/" />
        <Route path="/crearusuarios/"  />
        <Route path="/roles/" />
        <Route path="/matriculas/" />
        <Route path="/docentes/" />
      </Routes>
    </>

  )

}

export default App
