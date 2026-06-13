import { Box, Typography, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useFamiliasProfesionales from '../../Hooks/FamiliasProfesionales/useFamiliasProfesionales';

function FamiliasProfesionales() {

    const { buscando, familia } = useFamiliasProfesionales();

    return (
        <Box sx={{ p: 3 ,backgroundColor:'#ade659'}}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Familias Profesionales
            </Typography>

            {buscando ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 8 }}>
                    <CircularProgress size={50} thickness={4} color="primary" />
                    <Typography variant="body1" color="text.secondary">
                        Cargando familias profesionales...
                    </Typography>
                </Box>
            ) : (
                <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="tabla de familias">
                        <TableHead>
                            <TableRow sx={{ backgroundColor:'#69a113ff' }}>
                                <TableCell style={{ fontWeight: 'bold' }}>ID</TableCell>
                                <TableCell style={{ fontWeight: 'bold' }}>Código</TableCell>
                                <TableCell style={{ fontWeight: 'bold' }}>Familia Profesional</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {familia.map((family) => (
                                <TableRow key={family.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{family.id}</TableCell>
                                    <TableCell>{family.codigo}</TableCell>
                                    <TableCell>{family.nombre}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
}

export default FamiliasProfesionales;