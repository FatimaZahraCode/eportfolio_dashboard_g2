import React from 'react';
const Coche = (props) => {
    return (
        <tr>
            <td>Marca: {props.coche.modelo}</td>
            <td>Modelo: {props.coche.matricula}</td>
            <td>Año: {props.coche.color}</td>
            <td>Puertas: {props.coche.npuertas}</td>
        </tr>);
}

export default Coche;