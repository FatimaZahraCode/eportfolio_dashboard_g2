import { useReducer, useState } from 'react';


function ContadorR(props) {
    //const [contador, setContador] = useState(props.contador);
    const ACCIONES={
        INCREMENTAR:'incrementar',
        DECREMENTAR:'decrementar',
        RESETEAR:'resetear'
    }
    function Reducer(state,action){
        switch(action.type){
            case ACCIONES.INCREMENTAR:
                return {contador:state.contador + 1,click:[...state.click,"i"]};
            case ACCIONES.DECREMENTAR:
                return {contador:state.contador - 1,click:state.click.concat("d")};
            case ACCIONES.RESETEAR:
                return {contador:props.ContadorR,click:[...state.click, "r"]};
            default:
                return state;
        }
    }
    const [state,setState]=useReducer(Reducer,{contador:props.contador,click:[]})
    
    //const [clicks,setClicks]=useState([]);
    function incrementarContador() {
        setState({type:ACCIONES.INCREMENTAR});
    }
    function decrementarContador() {
     setState({type:ACCIONES.DECREMENTAR});
    }
    function resetearContador() {
      setState({type:ACCIONES.RESETEAR});
    }
    
    function esPar() {
        const numPar=(state % 2 == 0)?"Es par":"Es impar";
        return numPar;
    }
 
        let incremento=click.filter(e=>e==="i").length;
        let decremento=click.filter(e=>e==="d").length;
        let reseteo=click.filter(e=>e==="r").length;

        let mediaI=Math.round((incremento / click.length*100),2); 
        let mediaD=Math.round((decremento / click.length*100),2); 
        let mediaR=Math.round((reseteo / click.length*100),2); 
        console.log(mediaI);

    return (
        <div>
            <h2>Contador: {state}</h2>
            <p>{esPar()}</p>
            <p>{click.length}</p>
            <p>I: {incremento} media: {mediaI}%</p>
            <p>D: {decremento} media: {mediaD}%</p>
            <p>R: {reseteo} media: {mediaR}%</p>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={decrementarContador}>decrementar</button>
            <button onClick={resetearContador}>resetear</button>
            <p>{click}</p>
        </div>
    );
} export default ContadorR;