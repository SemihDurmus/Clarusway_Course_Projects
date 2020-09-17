console.log("----------CONDITIONALS----------");

let myValue_1 = 9;

if (myValue_1 === 5) {
    console.log("The value is : " + 5);
} else {
    console.log("The value is not: " + 5);
}

console.log("--------------------");

if (myValue_1 === 5) {
    console.log("The value is : " + 5);
} else if (myValue_1 === 8){
    console.log("The value is : " + 8);
} else {
    console.log("The value is unknown");
}

console.log("--------------------");

let myValue_2 = 9;

if (myValue_2 < 10) {
    console.log("The value is smaller than 10");
} else if (myValue_2 > 10){
    console.log("The value is bigger than 10");
} else {
    console.log("The value is 10");
}
console.log("--------------------");

let myValue_3 = 9;

if (myValue_3 < 10) {
    let myNumber = 1000;
    console.log(myNumber);
    console.log("The value is smaller than 10");
} else if (myValue_3 > 10){
    console.log("The value is bigger than 10");
} else {
    console.log("The value is 10");
}

// console.log(myNumber);  ---> myNumber is out of scope, so it does ot work

console.log("--------------------");

const myValue_4 = 20;
const myValue_5 = false;

if (myValue_4 === 20) {
    if (!myValue_5==true) {
        console.log("MyValue5 is false")
    }
}

console.log("--------------------");

const score = 70;

if (score < 50) {
    console.log("BAD")
} else if (score<71) {
    console.log("NOT BAD")
} else {
    console.log("GOOD")  
}

console.log("----------SWITCH----------");

const userType = "Employee";

switch (userType) {

    case "Admin":
        console.log("Welcome to admin panel");
        break;
    case "Employee":
        console.log("Enter password");
        break;        
    case "Customer":
        console.log("Please sign in");
        break;  
    default:
        console.log("User unknown");
        break
}

console.log("----------TERNARY----------");

const point = 55;

point < 50 ? console.log("BAD") : console.log("GOOD");

const result = point < 50 ? "BAD" : "GOOD";
console.log(result);

console.log("----------NULLISH----------");

const variable_1 = 60;

// const result_1 = variable_1 != null ? variable_1 : 80;
const result_1 = variable_1 ?? 80;

console.log(result_1);
