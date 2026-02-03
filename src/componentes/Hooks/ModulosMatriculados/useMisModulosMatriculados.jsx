import { useState } from "react";
import mockMatriculados from "../../../mocks/mock-matriculados"

function useMisModulosMatriculados() {
    const [buscando, setBuscando]=useState(false)
    const [lista,setLista]=useState(mockMatriculados)

    return {lista,buscando}
    
} export default useMisModulosMatriculados;