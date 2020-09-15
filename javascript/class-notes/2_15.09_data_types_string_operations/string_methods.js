// .length----------
console.log("--------length----------");
const str1 = "Merhaba!";
console.log("Length of str1 : " + str1.length);

const str2 = "";
console.log("Length of '' : " + str2.length);

// .concat()----------
console.log("--------concat----------");

const str3 = "App";
const str4 = "le";
const str5 = "_Tree";
const str6 = str3.concat(str4);
console.log("Concat method gives--> " + str6);
const str7 = str3.concat(str4, str5);
console.log("2 Concats give--> " + str7);

// .charAt()----------
console.log("--------charAt----------");
const str10 = "Clarusway";
console.log(str10.charAt(0));
console.log(str10.charAt(1));
console.log(str10.charAt(34)); //gives no result
console.log(str10.charAt(-1)); //gives no result

console.log(str10[1]);
console.log(str10[-1]); //gives undefined

// .includes()----------
console.log("--------includes----------");

console.log(str10.includes("ay")); //true & false

// .indexOf()----------
console.log("----------indexof--------");

const str11 = "Clarusway is a Clarusway";

console.log(str11.indexOf("a")); //first "a" in the string
console.log(str11.indexOf("ay"));
console.log(str11.indexOf("za")); // gives -1


// .lastIndexOf()----------
console.log("--------lastindexof----------");

console.log(str11.lastIndexOf("ay")); //gives last "ay"

// .replace()----------
console.log("--------replace----------");

console.log(str11);
const newstring1 = str11.replace("is a", "is not a");
console.log(newstring1);
const newstring2 = str11.replace("Clarus", "Mlarus"); //Changes only first
console.log(newstring2);
const newstring3 = str11.replace("Xzza", "Mlarus"); 
console.log(newstring3);

// .search(regular expressions : regex)----------

console.log(str11.search("aru"));
console.log(str11.indexOf("aru")); //whats the difference?

//search() is more for searching regular expressions.
console.log(str11.indexOf(/aRu/i)); //result : -1
console.log(str11.search(/aRu/i)); //with i it's no longer case sensitive

// .slice()----------
console.log("--------slice----------");

const str12 = "0123456789";

console.log(str12.slice(3));
console.log(str12.slice(2,5));
console.log(str12.slice(2,-1));
console.log(str12.slice(2,0));

// .split()----------
console.log("--------split----------");

console.log(str12.split("4")); //split with char "4"

const str13 = "haydan, gelen huya, gider"
console.log(str13.split(",")); //split with char "4"

// .substr()----------
// .substring()----------
console.log("--------substr, substring----------");

console.log(str12.substr(4,4)); //4 chars after 4th index
console.log(str12.substring(4,10)); //from [4th index to 10th)
console.log(str12.substring(10,4)); //from [4th index to 10th)

// .toLowerCase()----------
// .toUpperCase()----------
console.log("--------toLowerCase & toUpperCase----------");


const str14 = "mERhaBa DunYAlI";

console.log(str14.toLowerCase());
console.log(str14.toUpperCase());

// .trim()----------
console.log("--------trim----------");

var s = "                 Welcome to Clarusway                 ";
console.log(s.trim());
