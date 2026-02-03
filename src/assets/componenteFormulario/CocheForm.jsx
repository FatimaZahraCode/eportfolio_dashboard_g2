import React from 'react';
import { useForm } from 'react-hook-form';
import './CocheForm.css';
import './ListadoCoches/ListadoCoches.css';
const CocheForm = (props) => {
  const COCHE = {
    MODELO: "modelo",
    MATRICULA: "matricula",
    COLOR: "color",
    PUERTAS: "puertas",
  };
  const COCHEINICIAL = {
    modelo: "",
    matricula: "",
    color: "",
    puertas: 1,
  };
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({ defaultValues: COCHEINICIAL });


   const manejarFormulario = handleSubmit((coche) => {
    props.manejarFormulario(coche);
    console.log("Coche insertado", coche);
  });
  function validarMatricula(matricula) {
    console.log("Validando matrícula:", matricula);
    return props.validarMatricula(matricula);
  }
  

  return (
    
      <form id="formulario" onSubmit={manejarFormulario}>
        <p><strong> Nuevo vehiculo</strong></p>
        <label htmlFor={COCHE.MODELO}>Modelo:</label>
        <input type="text" id={COCHE.MODELO}
          {...register(COCHE.MODELO, { required: { value: true, message: "El modelo del vehiculo es obligatorio" } })}
        ></input>
        <br /><span>{errors.modelo?.message}</span>
        <br />
        <label htmlFor={COCHE.MATRICULA}>Matrícula:</label>
        <input type="text" id={COCHE.MATRICULA} {...register(COCHE.MATRICULA, {
          required: { value: true, message: "La matrícula del vehiculo es obligatoria" },
          pattern: { value: /^\d\d\d\d[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ]$/, message: "El formato de la matrícula no es correcto(0000AAA)" },
          validate:  {validarMatricula,value:true,message:"La matrícula ya existe"}
        })} /><br></br><span>{errors.matricula?.message}</span>
        <br />
        <label htmlFor={COCHE.COLOR}>Color:</label>
        <input type="text" id={COCHE.COLOR}{...register(COCHE.COLOR, { required: { value: true, message: "El color del vehiculo es obligatorio" } })} /><br></br><span>{errors.color?.message}</span>

        <br />
        <label htmlFor={COCHE.PUERTAS}>Número de puertas:</label>
        <input type="number" id={COCHE.PUERTAS} {...register(COCHE.PUERTAS, {
          required: { value: true, message: "El número de puertas es obligatorio" },
          min: { value: 1, message: "El número mínimo de puertas es 1" },
          max: { value: 5, message: "El número máximo de puertas es 5" }
        })} /><br></br><span>{errors.puertas?.message}</span>
        <br />
        <button type="submit">Añadir coche</button>
        <br /> {JSON.stringify(watch())}
      </form>
    
  );
};

export default CocheForm;