import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useAdministradores from '../../Hooks/Administradores/useAdministradores.jsx';
import useMisModulosImpartidos from '../../Hooks/ModulosImpartidos/useMisModulosImpartidos.jsx';
import useMisModulosMatriculados from '../../Hooks/ModulosMatriculados/useMisModulosMatriculados.jsx';
import { Link } from 'react-router-dom';

function Acordeon(props) {

    const usuarioActivo = props.user; 
    const nombreUsuario = usuarioActivo?.name; // Ej: "Víctor", "Alberto"
    
    console.log("Acordeon - Usuario Activo:", nombreUsuario);

    const modulosImpartidos = useMisModulosImpartidos();
    const opcionMenu=useAdministradores();
    const modulosMatriculados = useMisModulosMatriculados()

    const opcionAdministrativa=opcionMenu?.lista?.[0]
    console.log(opcionAdministrativa)
    console.log("MODULOS IMPARTIDOS:", modulosImpartidos);
   const nombresModulos = modulosImpartidos?.lista?.[nombreUsuario]?.lista || [];
    console.log("nombresModulos", nombresModulos);
    
    const nombresModulosMatriculados = modulosMatriculados?.lista?.[nombreUsuario]?.lista || [];
    console.log("nombresModulosMatriculados", nombresModulosMatriculados);

    console.log("Módulos Docente:", nombresModulos);
    console.log("Módulos Estudiante:", nombresModulosMatriculados);
    

    return (
        <div>
            {usuarioActivo?.roles?.map((rolItem, index) => (
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