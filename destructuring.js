// Array destructuring 
const a=[11,8,9,21]
const [m,p,...y]=a
console.log("m:",m);
console.log("p:",p);
console.log("y:",y);

//concatination
const b=[27,9,1,11]
const c=[...a,...b]
console.log("concatinated:",c)


//object destructuring
let object={
    name:"prafull",
    age:21,
    major:"information technology"
}

const {name,age,major}=object
//name is predifiend in js so if we declare variable with name "name" it will be depricated 
console.log("name:",name);
console.log("age:",age);
console.log("major:",major);

