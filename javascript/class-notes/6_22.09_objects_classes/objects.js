console.log("-------------OBJECTS-------------");

// data_type <objects_name> = {
//     key : value,
//     key : value,
//     key : value,
//     key : value
// }




const user = {
    name: "John",
    surname: "Wick",
    age: 40,
    isMember: true
}

console.log(user); 
// {name: "John", surname: "Wick", age: 40, isMember: true}



// 1. erişim yöntemi
//console.log(user.userName) 
//2. erişim yöntemi
//console.log(user["userName"])
//3.erişim yöntemi bir değişkene atayarak erişim
//const propertName="userName";
//console.log(user[propertName])


console.log(user.surname); 
//Wick

console.log(user["surname"]); 
//Wick

const propName = "age";
console.log(user[propName]); 

console.log("-----------------------");

const user2 = {
    name: "Kirk",
    surname: "Longman",
    age: 40,
    isMember: true,
    login: function(){
        let name = "Eric";
        console.log(this.name + " logged in"); //points the context
        console.log(name + " logged in");
        console.log("This  : ", this);
    },
    // loginuser() {
    //    console.log("User logged in");
    // }
    changeName(nick){
        console.log("Set name from", this.name, "--->" , nick)
    }

    }



console.log(user2.name);
user2.login();

user2.changeName("Mr Green");



console.log("-------------CLASS-------------");


const user_object = {
    name: "",
    pass: "",
    age: 40,
    login: function(){
        console.log(this.name + " logged in"); //points the context
    },

    changeName(nick){
        console.log("Set name from", this.name, "--->" , nick)
    }
    }

    // const myUser_1 = user_object;
    // myUser_1.name = "Jenny";
    // myUser_1.pass = "xY3";
    // myUser_1.age = 45;
    // console.log(myUser_1);

    // const myUser_2 = user_object;
    // myUser_1.name = "Sylvia";
    // myUser_1.pass = "pp4";
    // myUser_1.age = 15;
    // console.log(myUser_2);

    // const userArray = [];

    // userArray.push(myUser_1);
    // userArray.push(myUser_2);
    // console.log(userArray);

    console.log("-----------------------");

    class User {
        // constructor(name, password, age){
        //     this.userName = name;
        //     this.userPassword = password;
        //     this.userAge = age;
        // }
        constructor(param){
            this.userName = param.name;
            this.userPassword = param.password;
            this.userAge = param.age;
        }

        login(){
            console.log(this.userName + " logged in")
        }
    }

    // const myUser_1 = new User("Albert", "fdbg", 40);
    // const myUser_2 = new User("Thomas", "yfb", 20);
    // console.log(myUser_1);
    // console.log(myUser_2);

    const myUser_3 = new User ({name: "Ricky", password: "jj65", age : 23});
    const myUser_4 = new User ({name: "Fred", password: "xx65", age : 83});
    console.log(myUser_3);
    console.log(myUser_4);

    myUser_3.login();


    


