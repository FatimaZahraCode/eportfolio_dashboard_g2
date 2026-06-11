import Funcionalidadestudiante from "../Funcionalidades/Funcionalidadestudiante";
import FuncionalidadDocente from "../Funcionalidades/FuncionalidadDocente";


function Dashboard(props) {
    //console.log("USER del dashboard:", props.user?.[0]?.name);
    const usuario = props.user;
    const roles = usuario?.roles || [];

    console.log("Dashboard - Usuario:", usuario?.name, "Roles:", roles);

    {/* <h2>MAIN</h2>
            <Funcionalidadestudiante user={props.user?.[0]}></Funcionalidadestudiante>
            <FuncionalidadDocente user={props.user?.[0]}></FuncionalidadDocente>
            <div>{ props.user?.[0]?.name}</div> */}
    return roles.includes("estudiante") 
        ? ( <Funcionalidadestudiante user={usuario} />) 
             : roles.includes("docente") 
                ? ( <FuncionalidadDocente user={usuario} />) 
                    : 
                        (
                            <>
                                <h2>MAIN</h2>
                                <div>{usuario?.name}</div>
                            </>
    );

}
export default Dashboard