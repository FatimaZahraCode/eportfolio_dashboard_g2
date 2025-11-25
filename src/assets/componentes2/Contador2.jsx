import { useState } from "react";

function Contador2() {
    const [contador, setContador] = useState({ left: 0, right: 0 });
    function incrementarIzquierdo() {
        setContador({...contador, left: contador.left + 1 });
    }
    function incrementarDerecho() {
        setContador({ ...contador, right: contador.right + 1 });
    }
    return (
        <div>
            <span>{contador.left}</span>
            <button onClick={incrementarIzquierdo}>Left</button>
            <button onClick={incrementarDerecho}>Right</button>
            <span>{contador.right}</span>
        </div>)
} export default Contador2;