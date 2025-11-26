import { useReducer, useState } from 'react';


function ContadorR(props) {
    //const [contador, setContador] = useState(props.contador);
    const [state,setState]=useReducer(Reducer,{contador:props.contador,click:[]})
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
                return {contador: state.contador = 0, click: [...state.click, "r"]};
            default:
                return state;
        }
    }
    
    
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
        const numPar=(state.contador % 2 == 0)?"Es par":"Es impar";
        return numPar;
    }
 
        let incremento=(state.click).filter(e=>e==="i").length;
        let decremento=(state.click).filter(e=>e==="d").length;
        let reseteo=(state.click).filter(e=>e==="r").length;

        let mediaI=Math.round((incremento / (state.click).length*100),2); 
        let mediaD=Math.round((decremento / (state.click).length*100),2); 
        let mediaR=Math.round((reseteo / (state.click).length*100),2); 
        console.log(mediaI);

    return (
        <div>
            <h2>Contador: {state.contador}</h2>
            <p>{esPar()}</p>
            <p>{(state.click).length}</p>
            <p>I: {incremento} media: {mediaI}%</p>
            <p>D: {decremento} media: {mediaD}%</p>
            <p>R: {reseteo} media: {mediaR}%</p>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={decrementarContador}>decrementar</button>
            <button onClick={resetearContador}>resetear</button>
            <p>{(state.click)}</p>
        </div>
    );
} export default ContadorR;