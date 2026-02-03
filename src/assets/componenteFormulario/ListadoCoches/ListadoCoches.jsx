import React from 'react';
import CocheForm from '../CocheForm';
import Coche from '../../componenteCoches/Coche';
import './ListadoCoches.css';
const ListadoCoches = (props) => {
    function crearCoche(miCoche) {
        return <Coche key={miCoche.matricula} coche={miCoche} />;
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
                {props.todosLosCoches.map(crearCoche)}
            </tbody>
        </table>
    );
};

export default ListadoCoches;