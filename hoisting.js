//accessing  x and getName func before there initialization
console.log("func before :",getName());
console.log("x before :",x)
console.log("logging func before :",getName);


var x=7;
function getName() {
return "You got this"
}
console.log("x after :",x);
console.log("func after :",getName());
console.log("logging func after :",getName);

// a()
// b()
//these willthrow error since they are assigned to as an varibale
var a=()=>{
    console.log("Its Arrow")
}
 
var b=function (){
    console.log("Its function function")
}
a()
b()