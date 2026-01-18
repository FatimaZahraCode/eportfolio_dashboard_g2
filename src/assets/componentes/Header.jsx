import React from "react"
function Header({usuario}) {  
    return (
    <>
    <h2>HEADER</h2>
    <div>{usuario.nombre}</div>
    </>)
}
export default Header