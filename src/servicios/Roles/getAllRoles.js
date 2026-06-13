
function getAllRoles() {
    return fetch('https://mocki.io/v1/fed29c4c-5cca-463f-a3c9-06719131c8b6')
        .then((response)=>{
            return (response.json())
        })
        .then((data)=>{
            console.log("1. DATOS CRUDOS DE LA API:", data);
            return data.roles;
        })
        .catch((error)=>{
             console.error("FETCH ERROR:", error);
            return([])
        })
} export default getAllRoles;
