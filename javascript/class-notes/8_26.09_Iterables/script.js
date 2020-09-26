console.log("--------FOR EACH------------");
//For arrays

const numbers1 = [1,3,6, "Selam", 7,33,2, {id:0, name:"Hasan"}, 4,10];

numbers1.forEach((nr, index)=> {
    console.log("Number : " + nr + ". Index " + index)
}
)

numbers1.forEach(logNumbers);

function logNumbers(izmir) {
    console.log("Number : " + izmir)
}

console.log("--------MAP------------");

//Does not change the array, but returns a new array

const numbers2 = [1,3,6,7,33,2,4,10];

// numbers2.map(num=> {
//     //console.log("num: " , num);
//     return num * 2;
// });

const newNumbers = numbers2.map((num) => {
    return num * 2;
});

console.log(newNumbers);

console.log("--------MAP & FOR EACH DIFFERENCE------------");

const myNum_1 = numbers2.forEach((num) => {return num * 2});
const myNum_2 = numbers2.map((num) => {return num * 2});

console.log(myNum_1); //Undefined. forEach does not return, does not change, does not copy. If we are not returning a new array foreach is a better choice
console.log(myNum_2); //map returns. To check if it returns or not put a . at the end and see if methods show up

console.log("--------FIND------------");
//for calling one item

const users = [
    {id:0, name: "Jack", age: 20},
    {id:1, name: "Milton", age: 34},
    {id:2, name: "Arthur", age: 76},
    {id:3, name: "Mercedes", age: 76},
    {id:4, name: "Dave", age: 19},
];

//Bring me the user aged 76

const myUser1 = users.find(user => user.age === 76); //Brings the first 
console.log(myUser1);
console.log(myUser1.name);

const myUser2 = users.find(user => user.age < 25); //Brings the first
console.log(myUser2);
console.log(myUser2.name); 

const myUser3 = users.find((user) => {return user.age < 25}); 

console.log("--------FILTER------------");
//for finding multiple items

const myUsers1 = users.filter((user)=> user.age <25);
console.log(myUsers1);


console.log("--------MAP vs FOR EACH ------------");

//age'i 2 ile carpip bir array'e atmak istiyorum

const age_array1 = [];

users.forEach(us =>{
    age_array1.push(us.age * 2)
});
console.log(age_array1);


// const age_array2 = users.map((us) => {
//     return us.age * 2;
// });
const age_array2 = users.map((us) =>  us.age * 2 ); //Same use with the commented block above

console.log(age_array2);

// forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.
// Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

console.log("--------REDUCER------------");

//Arrayi tek bir formata ceker

const myArray5 = [1,3,5,6,8];

const sumOfNumbers = myArray5.reduce((acc,curr) => {
    console.log("acc : " + acc);
    console.log("curr : " + curr);
    return acc + curr;
});

console.log("SUM : ", sumOfNumbers);


//Find the biggest number with reduce

const myArray6 = [9 ,5, 65, 1, 77, 23, 84, 2 ];

const maxi = myArray6.reduce((acc, curr) =>{
    return acc > curr ? acc : curr;
});

console.log(maxi);


console.log("--------EVERY & SOME------------");

const users2 = [
    {id:0, isOld: false, name: "Jack", age: 20},
    {id:1, isOld: true, name: "Milton", age: 34},
    {id:2, isOld: true, name: "Arthur", age: 76},
    {id:3, isOld: true, name: "Mercedes", age: 76},
    {id:4, isOld: false, name: "Dave", age: 19},
];

//must be all
console.log("every : " + users2.every((user) => user.isOld === true));

//one is enough
console.log("Some : " + users2.some((user) => user.isOld === true));

console.log("--------FOR IN, FOR OF------------");

user5 = {id:0, isOld: false, name: "Jack", age: 20};

//we cannot use forEach here
//Use for in for objects
for (key in user5) {
    console.log(key);
    //console.log(value); --> this does not work
    console.log(user5[key]);
}

const users3 = [
    {id:0, isOld: false, name: "Jack", age: 20},
    {id:1, isOld: true, name: "Milton", age: 34},
    {id:2, isOld: true, name: "Arthur", age: 76},
    {id:3, isOld: true, name: "Mercedes", age: 76},
    {id:4, isOld: false, name: "Dave", age: 19},
];

for(const element of users3) {
    console.log(element)
}
//We can use for of in arrays, but not in objects, for they have to be iterables

// for(const element of user5) {
//     console.log(element)
// }


