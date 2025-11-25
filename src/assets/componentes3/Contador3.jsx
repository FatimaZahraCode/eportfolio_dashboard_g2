import { useState } from "react";

function Contador3() {
    const [contador, setContador] = useState({ rojo: 0, amarillo: 0 ,verde:0});
    function incrementarIzquierdo() {
        setContador({...contador, left: contador.left + 1 });
    }
    function incrementarDerecho() {
        setContador({ ...contador, right: contador.right + 1 });
    }
    return (
        <div>
            <button onClick={botonRojo}>Rojo</button>
            <button onClick={botonAmarillo}>Amarillo</button>
            <button onClick={botonVerde}>Verde</button><br/>
            <span>{contador.right}</span>
        </div>)
} export default Contador2;