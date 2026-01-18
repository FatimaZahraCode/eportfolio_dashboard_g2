import { useContext } from "react"
import Formulario from "./Formulario"
import Selector from "./Selector"
import TokenContext from "../../contextos/TokenContext"
function NuevaEvidencia() {
    const token =useContext(TokenContext)
    let lista=token.lista
    return(
        <>
        <Selector></Selector>
        <Formulario lista={lista} ></Formulario>
        </>
    )
};export default NuevaEvidencia