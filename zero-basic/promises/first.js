const  promiseone = new Promise(function( resolve , reject) {
    // do async task
    // DB calls , cryptography , network
  setTimeout(function(){
    console.log('async task is completed');
    resolve()
    }, 1000)

})
promiseone.then(function(){
    console.log("promise consume");
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  new promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     } , 1000)

// }).then(function(){
//     console.log("async to resolve");
    
// })

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

const promoisethere = new Promise(function(resolve , reject){
    setTimeout( function(){
        resolve({username : "chai" , email : "uudbaliuy.cpok"})

    },1000)
})

promoisethere.then (function(user){
    console.log(user);
    
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promisefour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false // true krke check kro
        if (!error ){
            resolve({username : "kumud" , pass : "47676"})
        }
        else {
            reject ('error : something went wrong ')
            }
    },1000)
})
const username = promisefour.then((user)=>{
  console.log(user);
  return user.username
})

.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("the promise finally resolved or rejected ")
)

// console.log(username);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promisefive = new Promise(function(resolve , reject ) {
    setTimeout(function(){
        let error = true // true krke check kro
        if (!error ){
            resolve({username : "java script " , pass : "47676"})
        }
        else {
            reject ('error : something js went wrong ')
            }
    },1000)
});

 async function consumepromisefive () {
   try {
     const response = await promisefive
     console.log(response);
   } catch (error) {
     console.log(error);
   }
   }

 consumepromisefive()
