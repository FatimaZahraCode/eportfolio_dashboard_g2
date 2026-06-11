import { useEffect, useState } from "react";
import Header from "../componentes/componentesPrincipales/Header";
import Roles from "../componentes/componentesPrincipales/Roles";
import Dashboard from "../componentes/componentesPrincipales/Dashboard";
import useRoles from "../Hooks/Roles/useRoles";


function Home() {
  let roles = useRoles();
 
  
  if (roles.buscando) {
    return (
      <div>
        Cargando sesión de usuario...
      </div>
    );
  }
  

const usuarioActivo = roles.lista["Victor"];
  console.log("Roles actualizados en Home:", roles);
  return (
    <div className="container-fluid">
      <div className='row'>
        <header className='col-12 col-md-12 header'>
          <Header user={usuarioActivo} />
        </header>
      </div>
      <div className='row'>
        <aside className='col-3 col-md-3 order-1 order-md-1 aside'>
          <Roles user={usuarioActivo} />
        </aside>
        <main className='col-9 col-md-9 order-2 order-md-2 main'>
          <Dashboard user={usuarioActivo} />
        </main>
      </div>
    </div>
  )
}
export default Home;