let a = 10
const b = 20
// var c = 30 we dont use var

if (true) {
    let a = 10
    const b = 20
}



// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "kumud"

    function two (){
        const website = "youtube"
        console.log(username);
     }
    // console.log(website);
    two()
}

// one ()
if (true) {
    const username = "kumud"
    if(username === "kumud"){
        const website = " youtube"
    //    console.log(username +  website);

    }
}

// intresting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone (8)) // here we can console before function
function addone (num){
    return num + 1

}


// console.log(addtwo(5)) // we can not access these  tyoe of function
// becs addtwo is holding in a const varialbe
const addtwo = function (num){
    return num + 2
}

console.log(addtwo(5))