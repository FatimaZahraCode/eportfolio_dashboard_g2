import { useEffect, useState } from "react"
import getAllTareas from "../../servicios/Tareas/getAllTareas";
import postTareas from "../../servicios/Tareas/postTareas";

function useTareas() {

    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    function obtenerTareas() {
        setBuscando(true)
        return getAllTareas().then((listaTareas) => {
            console.log("1. HOOK tareas:", listaTareas);
            setLista(listaTareas)
            setBuscando(false)
        }).catch((error) => {
            console.error("Error en el Hook", error);
        }).finally(() => {
            setBuscando(false); // Se ejecuta siempre (éxito o error)
        });
    }

    useEffect(() => { obtenerTareas() }, [])

    function crearTareas(tarea_) {
        setBuscando(true)
        return postTareas(tarea_).then((postCreado) => {
            if (Object.keys(postCreado).length > 0) {
                setLista(prev => [...prev, postCreado])
            }
            setBuscando(false)
            return postCreado
        })

    }


    return { buscando, lista, obtenerTareas, crearTareas }
} export default useTareas