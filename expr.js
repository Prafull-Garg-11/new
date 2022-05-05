function storage(event){
    let a=event.target.value
    if(a.length!==0){
        localStorage.setItem("name",a)
    }

}


function del(){
    localStorage.removeItem("name")
}

function setprint(){
    if (localStorage.getItem("name")){
        console.log(localStorage.getItem("name"));
    }
    else{
        console.log("No user key found");
    }
}

//do it with session storage as well