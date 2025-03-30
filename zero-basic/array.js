// const myarr = [1,2,3,4]
const marvel_heros = ["thor","spiderman","ironman"];
const dc = ["superman","flash","batman"];

// marvel_heros.push(dc);
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc);
// console.log(all_heros);


// **spread array ...
const all_newheros = [...marvel_heros, ...dc];
console.log(all_newheros);

// **
const another_array = [ 1, 2, 3,[4,5,6],7,[,6,7,[4,5]]]
const realanotherarray = another_array.flat(Infinity)
console.log(realanotherarray);


// **
console.log(Array.isArray("kumud"))
console.log(Array.from("kumud"))
console.log(Array.from({name :"kumud"})) // intresting key value give impaty

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));