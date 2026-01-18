import './App.css';
import Header from './assets/componentes/Header.jsx'
import Dashboard from './assets/componentes/Dashboard.jsx'
import Roles from './assets/componentes/Roles.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import UserContext from './contextos/UserContext';


function App() {
  let valor={id:1,nombre:"Administrador"}
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
  )

}

export default App
