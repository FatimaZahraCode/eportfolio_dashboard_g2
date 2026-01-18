import { useContext } from "react"
import NuevaEvidencia from "../maquetacion/NuevaEvidencia"
import UserContext from "../../contextos/UserContext"

function Dashboard() {  
     const usuario=useContext(UserContext)
    return (
    <>
    <h2>MAIN</h2>
    <NuevaEvidencia></NuevaEvidencia>
    <div>{usuario.nombre}</div>
    </>)
}
export default Dashboard