import { useState } from "react";
import Header from "../componentes/componentesPrincipales/Header";
import UserContext from "../../src/contextos/UserContext";
import Roles from "../componentes/componentesPrincipales/Roles";
import Dashboard from "../componentes/componentesPrincipales/Dashboard";
import useRoles from "../Hooks/Roles/useRoles";


function Home() {

  let valor=useRoles().lista[2];
  const [user , setUser]=useState(valor)
  
  return (
    <div className="container-fluid">
      <div className='row'>
        <header className='col-12 col-md-12 header'>
          <Header user={user} />
        </header>
      </div>
      <div className='row'>
        <aside className='col-3 col-md-3 order-1 order-md-1 aside'>
            <Roles user={user} />
        </aside>
        <main className='col-9 col-md-9 order-2 order-md-2 main'>
            <Dashboard user={user} />
        </main>
      </div>
    </div>
  )
}
export default Home;