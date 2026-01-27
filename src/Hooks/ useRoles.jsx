import { useContext, useState } from "react";
import mockRoles from "../mocks/mock-roles"
 function useRoles() {
   const [buscando, setBuscando] = useState(false);
   const [lista, setLista] = useState(mockRoles);

   return {
    buscando,
    lista
  };

 }export default useRoles;