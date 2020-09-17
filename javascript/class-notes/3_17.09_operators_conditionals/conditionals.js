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