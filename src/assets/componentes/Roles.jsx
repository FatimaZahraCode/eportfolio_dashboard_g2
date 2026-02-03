import React, { useContext } from "react"
import UserContext from "../../contextos/UserContext"
function Roles() {
    const usuario=useContext(UserContext)
    return (
        <>
            <h2>ASIDE</h2>
            <div>{usuario.nombre}</div>
        </>)
}
export default Roles