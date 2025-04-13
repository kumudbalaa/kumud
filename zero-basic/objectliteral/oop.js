// const user = {
//     username : "kumud",
//     login : "5",
//     signin : true,

//     getuserdetails : function(){
//         // console.log("got user details from database");
//         // console.log(`username : ${this.username}`);
//         console.log(this);
        
//  }
// }

// console.log(user.username);
// console.log(user.getuserdetails());

// const promiseone = new Promise()
// const date = new Date()

function user(username , logincount , isloggedin ) {
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    return this
}
// const userone = user ("kumud" , 12 , true)
const usertwo = user("bhanu" , 6 , true )
const userone = user ("kumud" , 12 , true)
console.log(userone);
console.log(usertwo);

