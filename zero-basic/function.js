console.log("k");
console.log("u");
console.log("m");
console.log("k");
console.log("d");

function myname (){
console.log("k");
console.log("u");
console.log("m");
console.log("k");
console.log("d");
}
// myname()

// ***********************************************

// function addtwono ( number1 , number2){ // number1 and number2 are parameters
//     console.log(number1 + number2); 
// }


function addtwono ( number1 , number2){ // number1 and number2 are parameters
    
    let result = number1 + number2
    return result;
}
const result = addtwono (2 , 5)
// console.log(result)

// console.log("result :" , result ) ;
addtwono(4,7) // 4 & 7 are arguments

// *******************************************************

function userloggedin (username) {

    if(username === undefined){
     console.log("please enter user name");
        return
     
    }
    return `${username} just logged in`

}

// console.log(userloggedin("kumud"))
// console.log(userloggedin())

// ************************************************************
// ... called set operstor also
function calculatecartprice (...num1 ){
    return num1

}
// console.log(calculatecartprice(300,700,7899))

// *******************************************************8

const user = {
    username : "kumud",
    price : 233,
}

function handleobj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleobj(user)
handleobj({
    username : "shashi",
    price : "999"
})

const mynewarray = [200,400,500,800]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray));