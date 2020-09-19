console.log("----------FOR---------");

{
let sum = 0;

for (let i = 0; i <= 10; i++) {
    sum += i;
}

console.log("sum : ", sum);

}

// AVOID NESTED FOR LOOPS

{
    let mystring = 'Clarusway';
    let result = "";

    for (let i = 0; i<mystring.length; i++) {
        // console.log(`${i+1}.ci harf : ${mystring[i]}`);
        for (j = 0; j < 2; j++) {
            console.log(mystring[i]);
            result += mystring[i];
        }
    }

    console.log(result);
}

console.log("----------WHILE---------");

{
let i = 0;

while (i < 5) {
    console.log("i :" ,i );
    i++;
}

}

{
let i = 0, sum =0;

while (i < 5) {
    i++;
    sum += i;
}

console.log("sum" , sum );

}


{
    let mystring = "Clarusway;"
    let i = 0;

    while (i < mystring.length) {
        console.log(mystring[i]);
        i++;
    }
}


console.log("---------DO-WHILE---------");

{
    let i = 0;

    do {
        console.log(i);
        i++;
    } while (i < 3)
}


console.log("---------BREAK-CONTINUE---------");

{
    let sum = 0;
    //Reveal odd numbers from 1 to 5 
    for (let i = 1 ; i <= 5;  i++) {
        if (i % 2 == 0)
        continue;
        console.log("i : ", i)
        sum += i;
    }
}

{
    let mystring = "Clarusway", result = "";
    // Get rid of letters "a" in a string
    for (let i = 0; i < mystring.length; i++) {
        if (mystring[i] === "a")
            continue;
        result += mystring[i]
    }

    console.log(result);

}