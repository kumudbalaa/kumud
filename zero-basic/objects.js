// singleton
// Object.create

// object literal

// const user = {
//     name : "kumud",
//     "full name" : "kumud bala",
//     age : 20,
//     location : "Ara",
//     email :"google@gmail.com",
//     isloggedin : false,
//     lastloggedin : ["mondAy","sunday"],

    
// }

// console.log(user.email)
// console.log(user.name)
// console.log(user.age)
// console.log(user.location)

// console.log(user ["email"]);
// console.log(user ["full name"]);
// console.log(user.email);
// console.log(user.email);

// user.email = "kumus@google.com"
// Object.freeze(user)
// user.email = "kumus@microsoft.com"
// console.log(user);

// user.greeting = function(){
//     console.log("hello js user")
// }

// user.greetingtwo = function(){
//     console.log(`hello js user : ${this.name}`)
// }

// console.log(user.greeting());
// console.log(user.greetingtwo());


// ***************************************************************

// const tinderuser = new Object()

const tinderuser = {}
 tinderuser.id = "123abc",
 tinderuser.name = "sam",
 tinderuser.isloggedin = false,
// console.log(tinderuser);

// ***************************************

//  const regularuser = {
//     email : "some@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "kumud",
//             lastname : "bala"
//         }
//     }
// }

// console.log(regularuser.fullname.userfullname)

// *************************************8

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 , obj2)

// most used this ... spread operator
// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

// ************************************************8

 user = [
    {
        id : 1,
        email : "gmail.com"
    },

    {
        id : 1,
        email : "gmail.com"
    },
    {
        id : 1,
        email : "gmail.com"
    },
    {
        id : 1,
        email : "gmail.com"
    },
];

// user[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(tinderuser.hasOwnProperty('isloggedin'))

// ************************************************************vdo3

const course = {
    coursename : "js in hindi",
    price : "9999",
    courseinstructor : "kumud"
}

// const {courseinstructor} = course 
// console.log(courseinstructor);
// instent of this u can disructure it

const {courseinstructor:instructor} = course 
console.log(instructor);


// *****************************************************8
// json is object and array in api
{
 "   name" : "kumud",
    "coursename" : "js in hindi",
   " price" : "free"
}

[
    {}
    {}
    {}
]