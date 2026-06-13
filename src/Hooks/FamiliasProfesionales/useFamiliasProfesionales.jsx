import { useEffect, useState } from "react"
import getAllFamiliasProfesionales from "../../servicios/FamiliasProfesionales/getAllFamiliasProfesionales";


function useFamiliasProfesionales(){

    const [buscando,setBuscando]=useState(true);
    const [familia,setFamilia]=useState([]);

    function obtenerFamilias() {
        console.log("Obteniendo familias profesionales");
        setBuscando(true);
        return getAllFamiliasProfesionales().then((listaFamilias)=>{
            console.log("HOOK - Datos hook familias",listaFamilias)
            setFamilia(listaFamilias || []);
            setBuscando(false)
        }).catch((error)=>{
            console.log("HOOK - error al obtener familias",error);
            setBuscando(false)
        });
    }
    useEffect(()=>{
        obtenerFamilias();
    },[])
    console.log("Familias",familia);
    return {buscando,familia,obtenerFamilias};

}export default useFamiliasProfesionales;