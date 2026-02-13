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
            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Mi progreso completo" />
                    <Tab label="Subir nueva evidencia"></Tab>
                    <Tab label="Mis revisiones pendientes" />
                </Tabs>
            </Box>
            <Box sx={{ p: 3 }}>
                {value === 0 && <ProgresoCompletoAlumno />}
                {value === 1 && <NuevaEvidencia user={props.user} />}
                {value === 2 && <RevisionesPendientes />}
            </Box>
        </>

    )

} export default Funcionalidadestudiante