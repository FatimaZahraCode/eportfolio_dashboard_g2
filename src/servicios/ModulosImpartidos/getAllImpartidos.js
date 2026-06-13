function getAllImpartidos() {
    return fetch('https://mocki.io/v1/44d32275-15b2-472a-aaa4-2d945300fcb0')
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
