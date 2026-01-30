import React from "react"
function Header(props) {  
    console.log("USER:", props.user.name);
    return (
    <>
    <h2>HEADER</h2>
    <div>{props.user.name}</div>
    </>)
}
export default Header