const element1 = document.getElementById("user_name");
console.log(element1);

const element2 = document.getElementsByClassName("user_tag");
console.log(element2);

const element3 = document.getElementsByTagName("p");
console.log(element3);

const element4 = document.querySelector("#user_name");
console.log(element4);

//Brigns the first element
const element5 = document.querySelector(".user_tag");
console.log(element5);

const element6 = document.querySelectorAll(".user_tag");
console.log(element6);

const element7 = document.querySelectorAll("p");
console.log(element7);
console.log(element7[2]);

console.log("---------------------------");
const city_list = document.querySelector('#city_list');

const elements_1 = document.getElementsByClassName("city");
const elements_2 = document.querySelectorAll(".city");

city_list.innerHTML += '<li class="city">Corum</li>';

console.log(elements_1); //5 element siraliyor
console.log(elements_2); //Hala 4 element siraliyor

console.log("---------------------------");

const element8 = document.querySelector("#my_element");
element8.innerText = "Hello";
element8.innerHTML += "<br> I come from Mars";
console.log("Element : " + element8);

console.log("---------------------------");

//Adding my car brands to the html list

const car_list = [
    {id: 0, brandName: "Mercedes"},
    {id: 1, brandName: "BMW"},
    {id: 2, brandName: "Opel"},
    {id: 3, brandName: "Audi"},
];

const listElement = document.querySelector("#cars");

car_list.forEach((car)=>{
    listElement.innerHTML += `<li class="cars">${car.brandName}</li>` 
});

for (let i = 0; i < car_list.length; i++) {
    listElement.innerHTML += `<li class="cars">${car_list[i].brandName}</li>`
}

console.log(listElement);

console.log("---------------------------");

const element9 = document.querySelector("#link");
console.log(element9);

const attr = element9.getAttribute("href");
console.log(attr);

element9.setAttribute("href", "http://www.clarusway.com");
//change href attribute to http://www.clarusway.com
//if there is no attribute this method adds both attribute and value.
element9.innerHTML = "Go to Clarusway";

console.log("---------------------------");

//Change words' colors  

const element10 = document.querySelectorAll(".word_class");
console.log(element10);

element10.forEach(w => {
    if ( w.innerText.includes("error")){
        w.setAttribute("class", "error");
    } else if ( w.innerText.includes("success")){
        w.setAttribute("class", "success");
    }
}
);

console.log("----------CHANGE STYLE-----------------");

const element11 = document.querySelector(".hello");

element11.style.color = "yellowgreen";
element11.style.border = "1px solid brown";
element11.style.display = "inline-block";
element11.style.fontWeight = "bold";   //Case sensitive

console.log("--------CLASS LIST-------------------");

const element12 = document.querySelector("#myBanner");
console.log(element12.classList);

element12.classList.add("underline");
console.log(element12.classList);

console.log("-----------CREATE ELEMENT, APPEND CHILD----------------");

const element13 = document.querySelector("#today");
console.log(element13);

const new_element = document.createElement("p");

new_element.innerText = "Thursday";
console.log("new_element", new_element);

element13.appendChild(new_element);

console.log("-----------EVENT LISTENER----------------");

const element14 = document
    .querySelector("#btn")
    .addEventListener("click", clickFunction);

const element15 = document.querySelector("#para");

element15
    .addEventListener("mouseenter", give_alert)

// element15.removeEventListener("mouseenter", give_alert);

function clickFunction() {
    element15.innerHTML = "I changed";
}

function give_alert (){
    alert("Jeeeppi");
}



