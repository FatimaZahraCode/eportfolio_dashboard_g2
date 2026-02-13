
import { Box, Tab, Tabs } from "@mui/material";
import ProgresoCompletoAlumno from "../maquetacion/ProgresoCompletoAlumno";
import RevisionesPendientes from "../maquetacion/RevisionesPendientes";
import Funcionalidadestudiante from "../Funcionalidades/Funcionalidadestudiante";
import FuncionalidadDocente from "../Funcionalidades/FuncionalidadDocente";


function Dashboard(props) {
    console.log("USER:", props.user.name);
    return (
        <>
            
            <Funcionalidadestudiante user={props.user}></Funcionalidadestudiante>
            <FuncionalidadDocente user={props.user}></FuncionalidadDocente>
            <div>{props.user.name}</div>
        </>)
}
export default Dashboard