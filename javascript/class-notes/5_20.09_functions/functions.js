console.log("--------REGULAR(NORMAL) FUNCTIONS-------------");


const nr_1 = 9;
const nr_2 = 10;

function sumNumbers() {
    const result = nr_1 + nr_2;
    return result;
}

const res = sumNumbers();
console.log(res);


console.log("---------1------------");

const str1 = "Hi";
const str2 = "harald";

{
    let str1 = "Hi";
    let str2 = "harald";

    console.log("1. " , str1, str2);

    function upperwords() {
        str1 = str1.toUpperCase();
        str2 = str2.toUpperCase();
    }

    console.log("2. " , str1, str2);

    upperwords();

    console.log("3. " , str1, str2);

}

console.log("--------2-------------");
{
    let str1 = "Hi";
    let str2 = "harald";

    console.log("1. " , str1, str2);

    function upperwords(word) {
        const response = word.toUpperCase();
        return response;
    } 
    console.log("2. " , str1);
    console.log("2. " , str2);


    str1 = upperwords(str1);
    str2 = upperwords(str2);
    
    console.log("3. " , str1, str2);
}

console.log("---------3------------");
{
    let word1 = 'Selamlar';
    let word2 = 'Merhaba';
   
    function upperWords(w1, w2){
        const w_1 = w1.toUpperCase();
        const w_2 = w2.toUpperCase();
        return w_1 + ' ' + w_2;
    }

    console.log(upperWords(word1, word2));
    console.log(upperWords('Hello', "World!"));
}


console.log("--------4-------------");
{
    function checknumbers() {
        for (let i=0; i < 10; i++) {
            if (i === 5)
                return;  //ends the function
                //break;  //ends the for loop
            console.log("i : " + i);
        }

        console.log("END");
    }

    checknumbers();
}


console.log("--------FUNCTION EXPRESSION-------------");
console.log("--------5-------------");

{
    //regular expression
    function myfunc_1(p1) {
        console.log("my_func1", p1)
    }

    myfunc_1("Clarus"); //hoisting //i can call this function wherever i want

    //function expression 
    const myfunc_2 = function(p2) {
        console.log("myfunc_2 " + p2)
    }

    myfunc_2("way"); //I cannot call this function before this line
}


console.log("--------ARROW FUNCTIONS---- ()=>{} ---------");
console.log("--------6-------------");

{

    const myfunc3 = (p3) => {
        console.log("my_arrow_func", p3)
    }

    myfunc3("lorem")


    console.log("--------7-------------");

    const myfunc4 = p1 => p1 + 6;
    console.log(myfunc4(10));

    console.log("--------8-------------");

    const myfunc5 = (p1, p2) => "Welcome " + p1 + " it's " + p2;
    //if we use return we have to use {}
    // const myfunc5 = (p1, p2) => return {"Welcome " + p1 + " it's " + p2};
    console.log(myfunc5("Bill", "Sunday"));

    console.log("--------9-------------");

    const myfunc6 = () => console.log("heyyyo");
    myfunc6();

}

console.log("--------IIFE FUNCTIONS---------------------");
console.log("--Immediately Invobale Function Expression--");

console.log("--------10-------------");

(function (p1, p2) {
    console.log("IIFE  example: ", p1, p2);
})("JS", "Sunday");

((p1,p2)=>{
    console.log("IIFE  example: ", p1, p2);
})("Another", "Version");

//Function without a name is called anonymus functions

console.log("--------CALLBACK FUNCTIONS---------------------");
//Callback function returns a value
{
    let my_array = [6, 7, 11, 2, 123, 3, 55];
    console.log("Original array: " + my_array)

     console.log("---------")

     function sortElements_1(a,b){
         return a - b
     }

     const sortElements_2 = (a,b)=>{return a - b}

     const num1 = my_array.sort(function (a,b) {return a - b});
     const num2 = my_array.sort((a,b)=> a - b);
     const num3 = my_array.sort(sortElements_1);
     const num4 = my_array.sort(sortElements_2);

     console.log(num1);
     console.log(num2);
     console.log(num3);
     console.log(num4);
}