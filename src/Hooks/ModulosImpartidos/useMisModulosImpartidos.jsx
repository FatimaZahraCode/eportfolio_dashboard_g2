import { useState , useEffect } from "react";
import getAllImpartidos from "../../servicios/ModulosImpartidos/getAllImpartidos";
function useMisModulosImpartidos() {
  const [buscando, setBuscando] = useState(false);
  const [lista, setLista] = useState([]);
  function obtenerModulosImpartidos() {
    console.log("OBTENIENDO MODULOS IMPARTIDOS");
    setBuscando(true);
    return getAllImpartidos().then((listaRecibida) => {
      console.log("Hook - Datos crudos de la API impartidos:", listaRecibida);
      if (listaRecibida) {
        setLista(listaRecibida);
      }

      setBuscando(false);

    }).catch((err) => {
      console.error("Hook - Error al obtener impartidos:", err);
      setBuscando(false);
    });
  }
  useEffect(() => {
    obtenerModulosImpartidos();
  }, []); // Array vacío = solo se ejecuta una vez al montar la app
  console.log("hook lista",lista)

  return {
    buscando,
    lista,
    obtenerModulosImpartidos,
  };

} export default useMisModulosImpartidos;