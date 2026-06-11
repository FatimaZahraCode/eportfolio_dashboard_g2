import { useEffect, useState } from "react";
import getAllModulosMatriculados from "../../servicios/ModulosMatriculados/getAllModulosMatriculados";
function useMisModulosMatriculados() {
   const [buscando, setBuscando] = useState(true);
   const [lista, setLista] = useState([]);
      
    function obtenerModulosMatriculados() {
      setBuscando(true)
      return getAllModulosMatriculados().then((listaMatriculados)=>{
        if (listaMatriculados) {
          setLista(listaMatriculados)
          setBuscando(false)
        }
      }).catch((error)=>{
        console.error("Error en el hook matriculados",error);
        setBuscando(false)
        
      })
    }
    useEffect(()=>{obtenerModulosMatriculados()},[])
    console.log("Hook matriculados",lista)
   return {
    buscando,
    lista,
    obtenerModulosMatriculados,
  };

}export default useMisModulosMatriculados;
