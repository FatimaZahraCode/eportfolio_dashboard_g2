import { useState } from "react";
import mockadministrador from "../../mocks/mock-administrador"
function useAdministradores() {
   const [buscando, setBuscando] = useState(false);
   const [lista, setLista] = useState(Object.values(mockadministrador));
   return {
    buscando,
    lista
  };

}export default useAdministradores;