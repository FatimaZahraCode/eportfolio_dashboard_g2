import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './paginas/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Funcionalidadestudiante from './componentes/Funcionalidades/Funcionalidadestudiante.jsx';
import FuncionalidadDocente from './componentes/Funcionalidades/FuncionalidadDocente.jsx';
import PaginaFamiliasProfesionales from './componentes/maquetacion/PaginaFamiliasProfesionales.jsx';
function App() {


  return (

    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />} />
        <Route path="/funcionalidadestudiante/:modulo" element={<Funcionalidadestudiante />} />
        <Route path="/familiasprofesionales" element={<PaginaFamiliasProfesionales />}/>
        <Route path="/ciclosformativos/" />
        <Route path="/modulosformativos/" />
        <Route path="/ra/" />
        <Route path="/ce/" />
        <Route path="/crearusuarios/" />
        <Route path="/roles/" />
        <Route path="/matriculas/" />
        <Route path="/docentes/" />
      </Routes>
    </>

  )

}

export default App
