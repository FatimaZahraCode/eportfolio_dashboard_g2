import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useRoles from '../../Hooks/Roles/useRoles';
import mockAdministrador from '../../mocks/mock-administrador.js';
import useMisModulosImpartidos from '../Hooks/ModulosImpartidos/useMisModulosImpartidos.jsx';
import useMisModulosMatriculados from '../Hooks/ModulosMatriculados/useMisModulosMatriculados.jsx';

function Acordeon(props) {
    const administrador = mockAdministrador.administrador;
    console.log("ADMINISTRADOR:", administrador);
    console.log("LISTA:", props.roles.roles);
    const roles = props.roles.roles;
    const modulosImpartidos = useMisModulosImpartidos();
    console.log("MODULOS IMPARTIDOS:", modulosImpartidos);
    const nombresModulos= modulosImpartidos.lista[0][props.roles.name].lista;
    const descripcionModulo = (nombresModulos[props.roles.name]) ? props.roles.name  : " ";
    console.log("DESCRIPCION MODULO:", descripcionModulo);
    console.log("ROLES:", props.roles.name);
    console.log("NOMBRES MODULOS:", nombresModulos);
    const modulosMatriculados=useMisModulosMatriculados()
    const nombresModulosMatriculados=modulosMatriculados.lista[props.roles.name].lista;
    const descripcionModuloMatriculado = (nombresModulosMatriculados[props.roles.name]) ? props.roles.name  : " ";
    console.log("DESCRIPCION MODULO MATRICULADO:", descripcionModuloMatriculado);
    console.log("MODULOS MATRICULADOS:", modulosMatriculados);
    
    return (
        <div>
            {roles.map((rol, index) => (
                <Accordion key={index}>

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">{rol}</Typography>
                    </AccordionSummary>
                    {rol === 'administrador' && administrador.map((nombre, index) => (
                        <AccordionDetails key={index}>
                            {nombre.nombre}
                        </AccordionDetails>
                    ))}
                    {rol === 'docente' && nombresModulos.map((nombre, index) => (
                        <AccordionDetails key={index}>
                            {nombre.nombre}
                        </AccordionDetails>
                    ))}
                    {rol === 'estudiante' && nombresModulosMatriculados.map((nombre, index) => (
                        <AccordionDetails key={index}>
                            {nombre.nombre}
                        </AccordionDetails>
                    ))} 

                </Accordion>
            ))}
        </div>
    );

} export default Acordeon;