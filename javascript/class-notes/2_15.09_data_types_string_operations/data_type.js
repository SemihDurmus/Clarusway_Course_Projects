var myNumber;

console.log("myNumber : " + myNumber);


var text1 = "She said: 'Go ahead'"
console.log(text1);

const text2 = "MERHABA"
console.log("text2 :" + text2);


// S6 ile gelen ozellik:

// const myString = "Merhaba " + 100 + " Sana";
const myString1 = `Merhaba  ${100}  Sana`;
console.log(myString1); 

const myString2 = `Merhaba  ${100-70}  Sana`;
console.log(myString2); 

const myString3 = "Merhaba \n  sana";
console.log(myString3); 

const myString4 = `Merhaba
sana`;
console.log(myString4); 


const myBool1 = true;
console.log("myBool1 : " + myBool1);

const myBool2 = 2 > 5;
console.log("myBool2 : " + myBool2);

const myBool3 = 2 == 5;
console.log("myBool3 : " + myBool3);

//  == icteki degerleri, === hem deger olarak hem de veri tipi olarak esitligini kontrol eder.

const myVar1 = 7;
const myVar2 = "7";
const myBool4 = myVar1 == myVar2;
const myBool5 = myVar1 === myVar2;
console.log("myBool4 ==: " + myBool4);
console.log("myBool5 ===: " + myBool5);

const myVar3 = Boolean("Hello");
console.log(myVar3);

const myVar5 = 5 == true;
console.log(myVar5);

// -----------typeof

console.log(typeof 6);

const myVar6 = 6;
console.log(`myVar6 = ${myVar6} The type is: ${typeof myVar6}  `);
console.log(`The type of "merhaba "is: ${typeof "merhaba"}`);
console.log(`The type of ""is: ${typeof ""}`);
console.log(`The type of "a"+15 is: ${typeof ("a" + 15)}`);
console.log(`The type of Boolean(undefined) is: ${typeof Boolean(undefined)}`);
console.log(`The type of 5==7 is: ${typeof (5==7)}`);
console.log(`The type of 5==7 is: ${typeof 5==7}`);

// ====================

// + : concat
// * / -  : işlem yapar
const value1 = 10;
const value2 = "7";

const result1 = value1 + value2;
const result2 = value1 - value2;

console.log(`Result of 10 + "7" is ${result1}`);
console.log(`Result of 10 - "7" is ${result2}`);

var x = 0.2 + 0.1;
console.log(`0.2 + 0.1 = ${x}`);   


