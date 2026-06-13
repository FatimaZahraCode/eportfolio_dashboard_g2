function getAllTareas() {
   return fetch('https://mocki.io/v1/997a8782-7045-47a1-bf47-07b626fbef09')
      .then((response) => {
         return (response.json())
      }).then((data) => {
         console.log("1. DATOS CRUDOS DE LA API tareas:", data);
        return data.tareasRA?.lista || [];
      }).catch((error) => {
         console.error("FETCH ERROR:", error);
         return ([])
      })
}export default getAllTareas;