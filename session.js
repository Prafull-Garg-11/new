if sessionStorage.getItem("name")  function storage(event){
    let attribute=event.target.value
    sessionStorage.setItem("name",attribute)
}
function del(event)