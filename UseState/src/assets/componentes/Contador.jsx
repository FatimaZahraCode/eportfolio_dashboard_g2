import { useState } from 'react';


function Contador(props) {
    const [contador, setContador] = useState(props.contador);
    const [clicks,setClicks]=useState([]);
    function incrementarContador() {
        setContador(contador + 1);
        setClicks([...clicks,"i"]);
        console.log(props.contador);
    }
    function decrementarContador() {
        setContador(contador - 1);
        setClicks(clicks.concat("d"));
        console.log(props.contador);
    }
    function resetearContador() {
        setContador(props.contador);
        setClicks([...clicks, "r"])
    }
    
    function esPar() {
        const numPar=(contador % 2 == 0)?"Es par":"Es impar";
        return numPar;
    }
 
        let incremento=clicks.filter(e=>e==="i").length;
        let decremento=clicks.filter(e=>e==="d").length;
        let reseteo=clicks.filter(e=>e==="r").length;

        let mediaI=Math.round((incremento / clicks.length*100),2); 
        let mediaD=Math.round((decremento / clicks.length*100),2); 
        let mediaR=Math.round((reseteo / clicks.length*100),2); 
        console.log(mediaI);

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <p>{esPar()}</p>
            <p>{clicks.length}</p>
            <p>I: {incremento} media: {mediaI}%</p>
            <p>D: {decremento} media: {mediaD}%</p>
            <p>R: {reseteo} media: {mediaR}%</p>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={decrementarContador}>decrementar</button>
            <button onClick={resetearContador}>resetear</button>
            <p>{clicks}</p>
        </div>
    );
} export default Contador;