import { useContext } from "react"
import UserContext from "../../contextos/UserContext"


function Formulario(props) {
    const usuario =useContext(UserContext)
  let  estado = {
        tarea_id: props.id,
        estudiante_id: usuario,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }
    return (
        <>
            <h1>Formulario</h1>
            {props.lista.map((li) =>
                <p key={li.id}>{li.observaciones}</p>

            )}
            <div>{usuario}</div>
        </>
    )
}; export default Formulario