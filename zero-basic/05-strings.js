const name = "kumud";
const repocount = 50;

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repocount is ${50}`);

const gamename = new String('kumud bala')
console.log(gamename[4,6,7,8]);
console.log(typeof name );
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf ('d'));

const newstring = gamename.substring(0,4);
console.log(newstring);

const anotherstring = gamename.slice(-8,3);

console.log(anotherstring);

const newstringone = "      kumud    ";
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://kumud.com/kumudbala%40bala";
console.log(url.replace('%40' , '-'));
console.log(url.includes('kumud'));
console.log(url.includes('bhanu'));
