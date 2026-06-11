
function getAllRoles() {
    return fetch('https://mocki.io/v1/5454a712-5303-4afe-859c-4ab7f8973ca0')
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
