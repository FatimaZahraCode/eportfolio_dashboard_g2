import { useState } from "react"
import Formulario from "./Formulario"
import Selector from "./Selector"
import useTareas from "../../Hooks/Tareas/useTareas"
function NuevaEvidencia(props) {

    const [tarea, setTarea] = useState("")
    const [evidencias, setEvidencias] = useState([]);

    let hookTareas = useTareas();
    console.log("NuevaEvidencia hooktareas", hookTareas.lista)
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
            <Selector tarea={tarea} lista={hookTareas.lista} manejarOpcion={manejarOpcion}></Selector>
            <Formulario tarea={tarea} lista={hookTareas.lista} manejarAccion={manejarAccion} user={props.user}></Formulario>
            {evidencias.map((evidencia,index) =>
                <div key={index}><strong>TAREA_ID:</strong>{evidencia.tarea_id}<br /><strong>ESTUDIANTE_ID:</strong>{evidencia.estudiante_id}<br />
                    <strong>URL:</strong>{evidencia.url}<br /><strong>DESCRIPCION:</strong>{evidencia.descripcion}<br /><strong>ESTADO DE VALIDACION: </strong>{evidencia.estado_validacion}</div>
            )}
        </>
    )
}; export default NuevaEvidencia