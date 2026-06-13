import React from "react";
import NuevaEvidencia from "../maquetacion/NuevaEvidencia"
import { Box, Tab, Tabs } from "@mui/material";
import ProgresoCompletoAlumno from "../maquetacion/ProgresoCompletoAlumno";
import RevisionesPendientes from "../maquetacion/RevisionesPendientes";


function Funcionalidadestudiante(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%' , backgroundColor:'#ade659',p: 1 }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Mi progreso completo" sx={{color: '#242424'}} />
                    <Tab label="Subir nueva evidencia" sx={{color: '#242424'}}></Tab>
                    <Tab label="Mis revisiones pendientes" sx={{color: '#242424'}} />
                </Tabs>
            </Box>
            <Box sx={{ p: 3 ,backgroundColor:'#ade659',height: '92%'}}>
                {value === 0 && <ProgresoCompletoAlumno user={props.user} sx={{color: '#242424'}} />}
                {value === 1 && <NuevaEvidencia user={props.user} sx={{color: '#242424'}}/>}
                {value === 2 && <RevisionesPendientes user={props.user} sx={{color: '#242424'}} />}
            </Box>
        </>

    )

} export default Funcionalidadestudiante