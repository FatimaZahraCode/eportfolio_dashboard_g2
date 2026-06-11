import { useEffect, useState } from "react";
//import mockRoles from "../../mocks/mock-roles"
import getAllRoles from "../../servicios/Roles/getAllRoles";
function useRoles() {
  console.log("HOOK EJECUTADO");
  const [buscando, setBuscando] = useState(true);
  const [lista, setLista] = useState([]);
  function obtenerRoles() {
    console.log("OBTENIENDO ROLES");
    setBuscando(true);
    return getAllRoles().then((listaRoles) => {
      console.log("Hook - Datos crudos de la API:", listaRoles);
      if (listaRoles) {
        setLista(listaRoles);
      }

      setBuscando(false);

    }).catch((err) => {
      console.error("Hook - Error al obtener roles:", err);
      setBuscando(false);
    });
  }
  useEffect(() => {
    obtenerRoles();
  }, []); // Array vacío = solo se ejecuta una vez al montar la app
  console.log(lista)

  return {
    buscando,
    lista,
    obtenerRoles,
  };

} export default useRoles;