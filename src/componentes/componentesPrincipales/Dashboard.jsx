import Funcionalidadestudiante from "../Funcionalidades/Funcionalidadestudiante";
import FuncionalidadDocente from "../Funcionalidades/FuncionalidadDocente";


function Dashboard(props) {
    const usuario = props.user;
    const roles = usuario?.roles || [];

    console.log("Dashboard - Usuario:", usuario?.name, "Roles:", roles);

    
    return (
        <div className="dashboard-content">
            <h2>MAIN</h2>
            {roles.includes("estudiante") && (
                <Funcionalidadestudiante user={usuario} />
            )}

            {roles.includes("docente") && (
                <FuncionalidadDocente user={usuario} />
            )}
        </div>
    )

}
export default Dashboard