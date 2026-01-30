import { useState } from "react";
import mockModulosMatriculados from "../../mocks/mock-modulos-matriculados"
function useMisModulosMatriculados() {
   const [buscando, setBuscando] = useState(false);
   const [lista, setLista] = useState(mockModulosMatriculados);

   return {
    buscando,
    lista
  };

}export default useMisModulosMatriculados;
