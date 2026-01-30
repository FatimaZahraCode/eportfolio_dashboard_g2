import { useState } from "react";
import mockModulosImpartidos from "../../mocks/mock-modulos-impartidos"
function useMisModulosImpartidos() {
   const [buscando, setBuscando] = useState(false);
   const [lista, setLista] = useState(mockModulosImpartidos);

   return {
    buscando,
    lista
  };

}export default useMisModulosImpartidos;