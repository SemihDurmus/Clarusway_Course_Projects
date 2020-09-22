console.log("-------------OBJECTS-------------");

// data_type <objects_name> = {
//     key : value,
//     key : value,
//     key : value,
//     key : value
// }




const user = {
    name: "John",
    surname: "Wick",
    age: 40,
    isMember: true
}

console.log(user); 
// {name: "John", surname: "Wick", age: 40, isMember: true}

console.log(user.surname); 
//Wick

console.log(user["surname"]); 
//Wick

const propName = "age";
console.log(user[propName]); 

