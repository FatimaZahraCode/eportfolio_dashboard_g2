import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import PlanificarCriterios from "../maquetacion/PlanificarCriterios"
import EvaluarEvidencias from "../maquetacion/EvaluarEvidencias"
import AsignarRevisiones from "../maquetacion/AsignarRevisiones"
function FuncionalidadDocente(props) {
    const [value, setValue] = React.useState(0);
    
        const handleChange = (event, newValue) => {
            setValue(newValue);
        };
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Planificar Criterios" />
                    <Tab label="Evaluar Evidencias"></Tab>
                    <Tab label="Asignar Revisiones" />
                </Tabs>
            </Box>
            <Box sx={{ p: 3 }}>
                {value === 0 && <PlanificarCriterios />}
                {value === 1 && <EvaluarEvidencias user={props.user} />}
                {value === 2 && <AsignarRevisiones />}
            </Box>
        </>
    )

} export default FuncionalidadDocente