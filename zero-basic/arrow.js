const user = {
    username : " kumud",
    price : 999 ,

    welcomemsg : function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }


}

user.welcomemsg()
user.username = " sam"
user.welcomemsg()

function chai2 (){
    let username = "kumud"
    console.log(this.username);
}
chai2()

// here this  is used in only objects not in functions


const chai =  () => {
    let username = "kumud"
    console.log(this.username);
    console.log(this);

}
chai ()


// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addtwo = (num1 , num2) =>  (num1 + num2)

const addtwo = (num1 , num2) => ({username : "kumud"})

console.log(addtwo(2,4))