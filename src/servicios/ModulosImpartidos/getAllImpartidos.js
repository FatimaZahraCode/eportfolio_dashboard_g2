function getAllImpartidos() {
    return fetch('https://mocki.io/v1/2b52b48e-689f-4795-993a-85843907eaf2')
        .then((response)=>{
            return (response.json())
        })
        .then((data)=>{
            console.log("1. DATOS CRUDOS DE LA API impartidos:", data);
            return data.impartidos;
        })
        .catch((error)=>{
             console.error("FETCH ERROR:", error);
            return([])
        })
} export default getAllImpartidos;
