import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useRoles from '../../Hooks/Roles/useRoles';
import mockAdministrador from '../../mocks/mock-administrador.js';
import useAdministradores from '../../Hooks/Administradores/useAdministradores.jsx';
import useMisModulosImpartidos from '../Hooks/ModulosImpartidos/useMisModulosImpartidos.jsx';
import useMisModulosMatriculados from '../Hooks/ModulosMatriculados/useMisModulosMatriculados.jsx';
import { Link } from 'react-router-dom';

function Acordeon(props) {

    const roles = props.roles;
    console.log("LISTA:", roles);
    const rol = roles.name;
    console.log("roles",rol)
    const modulosImpartidos = useMisModulosImpartidos();
    const opcionMenu=useAdministradores();
    const opcionAdministrativa=opcionMenu?.lista?.[0]
    console.log(opcionAdministrativa)
    console.log("MODULOS IMPARTIDOS:", modulosImpartidos);
    const nombresModulos = modulosImpartidos?.lista?.[0]?.[rol]?.lista || [];
    console.log("nombresModulos", nombresModulos);
    const modulosMatriculados = useMisModulosMatriculados()
    const nombresModulosMatriculados = modulosMatriculados?.lista?.[rol]?.lista || [];
    console.log("nombresModulosMatriculados", nombresModulosMatriculados);

    

    return (
        <div>
            {roles.roles.map((rolItem, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{rolItem.toUpperCase()}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {rolItem === 'docente' && nombresModulos?.map((modulo, i) => (
                            <Typography key={i}> <Link to={`/funcionalidaddocente/${modulo.id}`}>{modulo.nombre}</Link></Typography>
                        ))}
                        {rolItem === 'estudiante' && nombresModulosMatriculados?.map((modulo, i) => (
                            <Typography key={i}>
                            <Link to={`/funcionalidadestudiante/${modulo.id}`}>{modulo.nombre}</Link></Typography>
                        ))}
                        {rolItem === 'administrador' && opcionAdministrativa?.map((modulo,i)=>(
                            <Typography key={i}>
                                <Link to={modulo.ruta}>{modulo.nombre}</Link></Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );

} export default Acordeon;