import React, { useContext } from "react"
import Acordeon from "../Accordion/Acordeon"
function Roles(props) {

    const lista=props.user;
    const usuarioActivo = lista?.[0];
    console.log("Roles.jsx - Enviando datos al Acordeón:", lista);
    return (
        <>
            <h2>ASIDE</h2>
            <div>{usuarioActivo?.name}</div>
            <Acordeon  user={lista} />
        </>)
}
export default Roles