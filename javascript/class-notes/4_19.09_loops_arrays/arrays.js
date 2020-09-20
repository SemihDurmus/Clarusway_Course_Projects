console.log("----------ARRAYS------------");

const myArray = ["izmir" , "istanbul" , "ankara" , 5 , false]; 
//this is flat array not an "object array" or an "array of array"
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[3]);
console.log("Type of array :"+ typeof(myArray));
console.log("Type of 4th indexed element :"+ typeof(myArray[4]));
console.log("---Length : " + myArray.length);


console.log("----------CONCAT------------");
{      
    let arr_1 = ["konya" , "canakkale"];
    const result_1 = myArray.concat(arr_1);
    console.log(myArray);
    console.log(arr_1);
    console.log("Result of concat method" , result_1);
}

console.log("----------SORT------------");
//Changes the original array but not the ones compised of numbers

{
    let myArray = ["izmir" , "istanbul" , "ankara" , "Corum" , "Kars"];
    const result = myArray.sort();
    console.log(myArray);
    console.log(result);
}
{
    let num = ["23","198","34","3","9"];
    let result = num.sort();
    console.log(num);
    console.log(result);
}

console.log("----------PUSH------------");
//Adds an element to the end
{
    let myArray = ["izmir" , "istanbul" , "ankara" , "Corum" , "Kars"];
    let result = myArray.push("Van");
    console.log(myArray);
    console.log(result);
    console.log(myArray);
}

console.log("----------POP------------");
//removes an alement from the end
{
    let myArray = ["izmir" , "istanbul" , "ankara" , "Corum" , "Kars"];
    console.log(myArray);
    let result = myArray.pop();
    console.log(result);
    console.log(myArray);
}

console.log("----------SHIFT------------");
//removes an alement from the beginning
{
    let myArray = ["izmir" , "istanbul" , "ankara" , "Corum" , "Kars"];
    console.log(myArray);
    let result = myArray.shift();
    console.log(result);
    console.log(myArray);
}

console.log("----------UNSHIFT------------");
//Adds an alement to the beginning
{
    let myArray = ["izmir" , "istanbul" , "ankara" , "Corum" , "Kars"];
    console.log(myArray);
    let result = myArray.unshift("Rize");
    console.log(result);
    console.log(myArray);
}

console.log("----------SPLICE------------");
//add and delete new elements. Changes the array
{
    let myArray = ["izmir" , "istanbul" , "ankara" , "Corum" , "Kars"];
    console.log(myArray);
    let result = myArray.splice(0,3); //begin from index0 and delete 3 elements followingly
    console.log(result);
    console.log(myArray);
}
console.log("--------------------------");
{
    let myArray = ["izmir" , "istanbul" , "ankara" , "Corum" , "Kars"];
    console.log(myArray);
    let result = myArray.splice(1,3, "NEW", "NEWER"); 
    //begin from index1 and delete 3 elements followingly, add following 
    console.log(result);
    console.log(myArray);
}
console.log("--------------------------");
{
    let myArray = ["izmir" , "istanbul" , "ankara" , "Corum" , "Kars"];
    console.log(myArray);
    let result = myArray.splice(1,4); 
    //begin from index1 and delete 3 elements followingly, add following 
    console.log(result);
    console.log(myArray);
}
console.log("-----------INDEXOF-LASTONDEXOF--------------");
{
    let myArray = ["ankara", "izmir" , "ankara", "istanbul" , "corum" , "ankara", "kars"];
    let first_index = myArray.indexOf("ankara");
    console.log(first_index); //0
    let declared_index = myArray.indexOf("ankara", 1); //find "ankara"s index after 1st index
    console.log(declared_index); //2
    let last_index = myArray.lastIndexOf("ankara");
    console.log(last_index); //5
}

