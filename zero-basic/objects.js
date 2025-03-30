// singleton
// Object.create

// object literal

const user = {
    name : "kumud",
    "full name" : "kumud bala",
    age : 20,
    location : Array,
    email :"google@gmail.com",
    isloggedin : false,
    lastloggedin : ["mondAy","sunday"],

    
}

// console.log(user.email)
// console.log(user ["email"]);
// console.log(user ["full name"]);
// console.log(user.email);
// console.log(user.email);

user.email = "kumus@google.com"
// Object.freeze(user)
user.email = "kumus@microsoft.com"
// console.log(user);

user.greeting = function(){
    console.log("hello js user")
}

user.greetingtwo = function(){
    console.log(`hello js user : ${this.name}`)
}

console.log(user.greeting());
console.log(user.greetingtwo());