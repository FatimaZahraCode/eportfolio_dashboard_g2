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
import { useState } from 'react';

function Acordeon(props) {

    const [rol, setrol] = useState(props.roles);
    //console.log("PROPS EN ACORDEON:", rol.roles[1]);
    console.log("LISTA:", props.roles.roles);
    const roles = props.roles.roles;
    const modulosImpartidos = useMisModulosImpartidos();
    console.log("MODULOS IMPARTIDOS:", modulosImpartidos);
    const nombresModulos = modulosImpartidos?.lista?.[0]?.[props.roles.name]?.lista || [];
    //const descripcionModulo = (nombresModulos[props.roles.name]) ? props.roles.name : " ";
    // console.log("DESCRIPCION MODULO:", descripcionModulo);
    // console.log("ROLES:", props.roles.name);
    // console.log("NOMBRES MODULOS:", nombresModulos);
    const modulosMatriculados = useMisModulosMatriculados()
    const nombresModulosMatriculados = modulosMatriculados?.lista?.[props.roles.name]?.lista || [];
    // const descripcionModuloMatriculado = (nombresModulosMatriculados[props.roles.name]) ? props.roles.name : " ";
    // console.log("DESCRIPCION MODULO MATRICULADO:", descripcionModuloMatriculado);
    // console.log("MODULOS MATRICULADOS:", modulosMatriculados);

    return (
        <div>
            {roles.map((rol, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{rol.toUpperCase()}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* Renderizado condicional basado en el rol actual del mapeo */}
                        {rol === 'docente' && nombresModulos?.map((modulo, i) => (
                            <Typography key={i}>{modulo.nombre}</Typography>
                        ))}
                        {rol === 'estudiante' && nombresModulosMatriculados?.map((modulo, i) => (
                            <Typography key={i}>{modulo.nombre}</Typography>
                        ))}
                        {rol === 'administrador' && (
                            <Typography></Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );

} export default Acordeon;