import React from "react"
function Header(props) {  
    console.log("USER:", props.user.name);
    return (
    <>
    <h2>HEADER</h2>
    <p>Fatima zahra Bouaichat</p>
    <div>{props.user.name}</div>
    </>)
}
export default Header