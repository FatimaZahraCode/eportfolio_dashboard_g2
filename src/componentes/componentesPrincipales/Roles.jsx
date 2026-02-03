import React, { useContext } from "react"
import Acordeon from "../Accordion/Acordeon"
function Roles(props) {

    const lista=props.user;
    console.log("LISTA:", lista);
    return (
        <>
            <h2>ASIDE</h2>
            <div>{lista.name}</div>
            <Acordeon  roles={lista} />
        </>)
}
export default Roles