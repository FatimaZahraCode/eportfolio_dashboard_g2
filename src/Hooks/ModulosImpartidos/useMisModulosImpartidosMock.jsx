import { useState } from "react";
import mockImpartidos from "../../mocks/mock-impartidos"
function useMisModulosImpartidosMock() {
   const [buscando, setBuscando] = useState(false);
   const [lista, setLista] = useState(mockImpartidos);

   return {
    buscando,
    lista
  };

}export default useMisModulosImpartidos;