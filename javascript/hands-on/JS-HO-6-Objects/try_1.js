const nameElement = document.getElementById("name");
const ageElement = document.getElementById("age");
const dayElement = document.querySelector("#day");
const presenceElement = document.querySelector("#presence");

const submitBtn = document.querySelector("#submit");
const showListBtn = document.querySelector("#list");
const hideListBtn = document.querySelector("#hide");

const textArea = document.getElementById("list_area");

const child_array = [];

class Child {
    constructor (name, age, day, pres){
        this.childName = name;
        this.childAge = age;
        this.childDay = day;
        this.childPresence = pres;
    }

    checkPresence(pres){
        let yes = 0;
        if (this.childPresence == "Y" || this.childPresence == "y")
            yes++
            return yes
    }
}


submitBtn.addEventListener("click", getData);

function getData(){

    let name = nameElement.value;
    let age = ageElement.value;
    let day = dayElement.value;
    let pres = presenceElement.value;

    child = new Child (name, age, day, pres);

    console.log(child);
    console.log(child.checkPresence(pres));

    child_array.push(child);
}

showListBtn.addEventListener("click", function() {
    console.log(child_array);

    for (i=0; i < child_array.length; i++) 
        textArea.innerHTML += child_array[i] + "\n";
    
    showListBtn.style.display = "none"
});


hideListBtn.addEventListener("click", hideList);

function hideList() {
    textArea.innerText = "";
    showListBtn.style.display = "inline"

}