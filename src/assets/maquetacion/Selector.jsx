import React, { useContext } from "react";
import TokenContext from "../../contextos/TokenContext";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Selector() {
    const token =useContext(TokenContext)
    let lista=token.lista
    const [opcion, setOpcion] = React.useState('');

    const handleChange = (event) => {
        setOpcion(event.target.value);
    };

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={opcion}
                        label="Age"
                        onChange={handleChange}
                    >
                        {lista.map((o)=>
                        <MenuItem key={o.id} value={o.id}>{o.observaciones}</MenuItem>)
                        }
                        
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}; export default Selector