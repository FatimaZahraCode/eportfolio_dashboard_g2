import React from 'react';
import Coche from '../Coche.jsx';
const ListadoCoches = (props) => {
    function crearCoche(coche, index) {
        return <Coche key={index} coche={coche} />;
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Año</th>
                    <th>Puertas</th>
                </tr>
            </thead>
            <tbody>
                {props.coches.map(crearCoche)}  
            </tbody>
        </table>
    );
};

export default ListadoCoches;