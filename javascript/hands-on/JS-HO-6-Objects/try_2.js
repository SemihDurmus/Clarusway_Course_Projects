class Child {
    constructor(name, age, attendence){
        this.childName = name;
        this.childAge = age;
        this.childAttendence = attendence;
    }

    showYoungs() {
        if (this.childAge < 10) {
            console.log("Youngs: ", this.childName);
            youngs.innerHTML += `${this.childName} ${this.childAge}` + "<br>"; 
        }
    }

}

const nameElement  = document.querySelector("#name");
const ageElement  = document.querySelector("#age");
const ynElement  = document.querySelector("#yn");

const submitBtn = document.getElementById("submit");
const showBtn = document.getElementById("show");

const resultElement = document.getElementById("result_area");
const youngs = document.getElementById("young_list");





var child_array = [];

submitBtn.addEventListener("click", getData);

function getData() {

    let name = nameElement.value;
    let age = ageElement.value;
    let attendence = ynElement.value;

    if (attendence == "y" || attendence == "Y") {
        attendence = true;
    } else {
        attendence = false;
    }
    const child = new Child (name, age, attendence);

    console.log(name);
    console.log(age);
    console.log(attendence);

    child_array.push(child);

    console.log(child_array);
} 



showBtn.addEventListener("click", function(){

    // child_array[0].showYoungs();

    child_array.forEach((x)=> x.showYoungs());
    
});


//users.filter((user) => user.age < 25);

// numbers.forEach((number, index) => {
//     console.log(numbers[index]); });