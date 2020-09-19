console.log("----------FOR LOOP-------");

{
let sum = 0;

for (let i = 0; i <= 10; i++) {
    sum += i;
}

console.log("sum : ", sum);

}



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
