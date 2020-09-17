
console.log("---------add, sub---------");
const n1 = 3;
const n2 = 5;

const res = n1 + n2;

console.log(res);

console.log("ADD: ", n1 + n2);
console.log("SUB: ", n1 - n2);


//first result is string, second is number
console.log("5 + '6' = ",5 + "6");
console.log("5 + '6' -1 = ",5 + "6" -1);

// + is for combining, - conerts yo nr again
const res2 = "6" - 1 + 5 +7 + "2" -1;
console.log(res2); //172

console.log("---------mult, div---------");

console.log("MULT: ", n1 * n2);
console.log("DIV: ", n1 / n2);

console.log(5 / 0); //infinity
console.log(5 / "b"); //NaN


console.log("---------mod, exp---------");

console.log("MOD: ", n1 & n2);
console.log("EXP: ", n1 ** n2);

console.log("--------- ++, -- ---------");

let nr3 = 5;

nr3++; // +1
console.log(nr3);
nr3--; // -1
console.log(nr3);

//soldan eklenidiginde ayni satirda gecerli, 
//sagdan eklendiginde alt satirda 
let nr4 = 10;
console.log("++ number :", ++nr4);
console.log("number ++:", nr4++);

console.log("--------- +=, -= ---------");

let nr5 = 5;

nr5 += 4;
console.log(nr5);
nr5 -= 6;
console.log(nr5);

console.log("------- comparison -------");
console.log("3 == 2", (3==2));
console.log("3 == 3", (3==3));
console.log("3 != 1", (3!=1));

console.log("3 === 3", (3===3));
console.log("3 === '3'", (3==="3"));
console.log("3 !== '3'", (3!=="3"));

console.log("3 > 2", (3 > 2));
console.log("3 > 2", (3 > "2")); //true
console.log("3 > 2", (3 > "a")); //false


console.log("d > a", ("d" > "a"));  //true

console.log("------- && || ! -------");

const nr6 = 10;
const nr7 = 8;

const res5 = (nr6 == 10 && nr7 == 8);
console.log(res5); //true

const res6 = (nr6 == 10 && nr7 == 9);
console.log(res6); //false

const res7 = (nr6 == 10 || nr7 == 9);
console.log(res7); //true

const res8 = !(5 == 8);
console.log(res8); //true

console.log(!1); //false

console.log(0 && true); //0
console.log("" && true); // ""
console.log("abc" && true); // true