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
            <Box sx={{ width: '100%' , backgroundColor:'#ade659',p: 1}}>
                <Tabs value={value} onChange={handleChange} centered >
                    <Tab label="Planificar Criterios" sx={{color: '#242424'}} />
                    <Tab label="Evaluar Evidencias" sx={{color: '#242424'}}/>
                    <Tab label="Asignar Revisiones" sx={{color: '#242424'}} />
                </Tabs>
            </Box>
            <Box sx={{ p: 3 ,backgroundColor:'#ade659',height: '92%'}}>
                {value === 0 && <PlanificarCriterios user={props.user} sx={{color: '#242424'}}/>}
                {value === 1 && <EvaluarEvidencias user={props.user} sx={{color: '#242424'}}/>}
                {value === 2 && <AsignarRevisiones user={props.user}sx={{color: '#242424'}}/>}
            </Box>
        </>
    )

} export default FuncionalidadDocente