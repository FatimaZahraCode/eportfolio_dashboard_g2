import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header from './componentes/Header.jsx'
import Dashboard from './componentes/Dashboard.jsx'
import Roles from './componentes/Roles.jsx'
function App() {

  return (
    <>
      <div className="container-fluid cuerpo">
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



    </>
  )
}

export default App
