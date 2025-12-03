import React from 'react';
import BotonTema from '../../assets/componenteUseContext/BotonTema.jsx';
const BarrasHerramientas=(props)=>{
    return(
        <div>
            <BotonTema etiqueta="Archivo"/>
            <BotonTema etiqueta="Editar"/>
            <BotonTema etiqueta="Terminal"/>
        
        </div>
        
    )
}
export default BarrasHerramientas;