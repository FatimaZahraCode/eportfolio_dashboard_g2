import React from "react"
function Header(props) {  
    return (
    <>
    <h2>HEADER</h2>
    <div>{props.nombre}</div>
    </>)
}
export default Header