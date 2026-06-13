import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Selector({ tarea, manejarOpcion, lista }) {

    const handleChange = (event) => {
        const valorNumerico = parseInt(event.target.value, 10);
        manejarOpcion(valorNumerico)
    };
    console.log("tarea elegida ", tarea);

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" >Tarea</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tarea}
                        label="Tarea"
                        onChange={handleChange}
                    >
                        {lista.map((o) =>
                            <MenuItem key={o.id} value={o.id}>{o.observaciones}</MenuItem>)
                        }

                    </Select>
                </FormControl>
            </Box>
        </>
    )
}; export default Selector