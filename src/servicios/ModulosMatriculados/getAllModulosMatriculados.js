function getAllModulosMatriculados() {
    return fetch('https://mocki.io/v1/48169a24-95f1-493e-bff6-d52f6da44656')
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