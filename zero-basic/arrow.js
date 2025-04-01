// const user = {
//     username : " kumud",
//     price : 999 ,

//     welcomemsg : function(){
//         console.log(`${this.username} welcome to website`);
//         console.log(this);
//     }


// }

// user.welcomemsg()
// user.username = " sam"
// user.welcomemsg()

// function chai2 (){
//     let username = "kumud"
//     console.log(this.username);
// }
// chai2()

// // here this  is used in only objects not in functions


// const chai =  () => {
//     let username = "kumud"
//     console.log(this.username);
//     console.log(this);

// }
// chai ()


// // const addtwo = (num1 , num2) => {
// //     return num1 + num2
// // }

// // const addtwo = (num1 , num2) =>  (num1 + num2)

// const addtwo = (num1 , num2) => ({username : "kumud"})

// console.log(addtwo(2,4))

// ===========================================
// prractice
const chai = function (num) {
    const result = num +  5;
    return result
}
console.log(chai(7));

// =============================================

const addtwo = (n1 , n2) => {
    return n1 + n2 ;
}
console.log(addtwo(4,7));

// ==================================================

const addthree = (n1 , n2 , n3) => (n1 + n2 + n3)
 console.log(addthree(4, 5 , 6))

//  ====================================================

const adds = (n1 , n2 ) => (n1 + n2 )
console.log(adds("name" , "kumud"))


