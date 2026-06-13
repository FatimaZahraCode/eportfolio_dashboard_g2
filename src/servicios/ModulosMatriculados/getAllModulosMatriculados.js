function getAllModulosMatriculados() {
    return fetch('https://mocki.io/v1/a334c29d-bf6d-41ec-9c7a-4095c2141093')
    .then((response)=>{
        return (response.json());
    }).then((data)=>{
         console.log("1. DATOS CRUDOS DE LA API matriculados:", data);
        return data.modulosMatriculados;
    }).catch((error)=>{
        console.error("FETCH ERROR:", error);
        return ([]);
        
    });
    
}export default getAllModulosMatriculados