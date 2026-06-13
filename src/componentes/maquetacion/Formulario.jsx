import { Box, Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

function Formulario({ tarea, lista, manejarAccion, user }) {
    let estado = {
        tarea_id: tarea,
        estudiante_id: user.id,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch
    } = useForm({ values: estado })
    console.log("Errores formulario", errors)

    const manejarFormulario = handleSubmit((nuevaTarea) => {
        manejarAccion(nuevaTarea)
        reset({
            ...estado,
            url: "",
            descripcion: ""

        })
    }



    )
    return (
        <>
            <form id="formulario" onSubmit={manejarFormulario} >
                <TextField fullWidth id="url" label="URL" variant="outlined" style={{ marginTop: 20 }}
                    {
                    ...register("url", {
                        required: {
                            value: true,
                            message: "La url es obligatoria"
                        },
                        pattern: {
                            value: /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}/,
                            message: "URL no válida"
                        }
                    })
                    }

                /> <br /><span>{errors.url?.message}</span>
                <TextField fullWidth id="descripcion" label="Observaciones" multiline rows={4} variant="outlined" style={{ marginTop: 10 }}
                    {
                    ...register("descripcion", {
                        required: {
                            value: true,
                            message: "La descripcion es obligatoria"
                        }
                    })
                    }
                />
                <Button type="submit" variant="contained" style={{ marginTop: 10 }}>Añadir evidencia</Button>
                <br /><span>{errors.descripcion?.message}</span><br />
                {JSON.stringify(watch())}
            </form>
        </>
    )
}; export default Formulario