import './App.css';
import Header from './assets/componentes/Header.jsx'
import Dashboard from './assets/componentes/Dashboard.jsx'
import Roles from './assets/componentes/Roles.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  let valor="Administrador"
  const [user , setUser]=useState(valor)
  
  return (
    <div className="container-fluid ">
      <div className='row'>
        <header className='col-12 col-md-12 header'>
          <Header usuario={user} />
        </header>
      </div>
      <div className='row'>
        <aside className='col-3 col-md-3 order-1 order-md-1 aside'>
          <Roles  />
        </aside>
        <main className='col-9 col-md-9 order-2 order-md-2 main'>
          <Dashboard />     
        </main>
      </div>
    </div>
  )

}

export default App
