
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// 1 premitave and non  2.primitive according to kis trah
// se data ko memory me rakha jata hai aur use kiya jata hai

// primitive: 7 type :  string, number, boolean, null-menas empty not zero, undefined , symbol, big int

// non primitive, (reference) : Array, objects, functions

//  we dont define data in js

const score = 100;
const scorevalue = 100.5;

const loggedin = false;
const outtemp = null;

let usseremail;

const id = Symbol('234');
const anotherid = Symbol('234');

console.log(id === anotherid);

// arrays, objects

const heros = ["sakhtimman","naagraaj", "doga"]
let myobj = {
    name : "kumud",
    age : 22,
}

const myfunction = function(){
    console.log("hello kumud");
}

console.log(typeof bignumber);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

