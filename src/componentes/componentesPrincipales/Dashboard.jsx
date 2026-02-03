import { useContext } from "react"
import NuevaEvidencia from "../maquetacion/NuevaEvidencia"
import UserContext from "../../contextos/UserContext"
import useRoles from "../../Hooks/Roles/useRoles"

function Dashboard(props) {  
    console.log("USER:", props.user.name);
    return (
    <>
    <h2>MAIN</h2>
    <NuevaEvidencia user={props.user}></NuevaEvidencia>
    <div>{props.user.name}</div>
    </>)
}
export default Dashboard