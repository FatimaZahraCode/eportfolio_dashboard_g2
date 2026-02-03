import { useContext, useState } from "react"
import Formulario from "./Formulario"
import Selector from "./Selector"
import TokenContext from "../../contextos/TokenContext"
function NuevaEvidencia(props) {
    const token = useContext(TokenContext)
    let lista = token.lista;
    console.log("TOKEN CONTEXT:", lista);
    const [tarea, setTarea] = useState(0)
    const [evidencias, setEvidencias] = useState([]);
    //formulario
    function manejarAccion(nuevaEvidencia) {
        console.log(nuevaEvidencia);
        setEvidencias([...evidencias, nuevaEvidencia]);
    }
    //selector
    function manejarOpcion(opcion) {
        setTarea(opcion)
    }
    return (
        <>
            <Selector tarea={tarea} manejarOpcion={manejarOpcion}></Selector>
             <Formulario tarea={tarea} lista={lista} manejarAccion={manejarAccion} user={props.user}></Formulario>
            {evidencias.map((evidencia) =>
                <div key={evidencia.id}><strong>TAREA_ID:</strong>{evidencia.tarea_id}<br /><strong>ESTUDIANTE_ID:</strong>{evidencia.estudiante_id}<br />
                <strong>URL:</strong>{evidencia.url}<br /><strong>DESCRIPCION:</strong>{evidencia.descripcion}<br /><strong>ESTADO DE VALIDACION: </strong>{evidencia.estado_validacion}</div>
            )}
        </>
    )
}; export default NuevaEvidencia