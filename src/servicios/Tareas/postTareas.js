
function postTareas(tarea_) {
    const url ='https://mocki.io/v1/997a8782-7045-47a1-bf47-07b626fbef09'+ tarea_;
    fetch(url,
    {
        method: 'POST',
        body: JSON.stringify(tarea_),
        Headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response)=>{
        const data =response.json();
        return data;
    }).catch((error)=>{
        return ({})
    })
}
export default postTareas;