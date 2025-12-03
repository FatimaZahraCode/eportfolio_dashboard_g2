import React, { useContext } from 'react';
import TemaContext from '../../contextos/TemaContext.jsx';
import temas from '../../mocks/mock-temas.js';
const BotonTema=(props)=>{
    const tema =useContext(TemaContext);
    return(
        <button style={{background:temas.background, color:temas.foreground}}>{props.etiqueta}</button>
    )
}
export default BotonTema;