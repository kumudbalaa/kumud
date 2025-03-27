const hunderds = 1000000;

console.log(hunderds);
console.log(Math.round(5.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(5.8));
// math.floor roundup mininmum value ex 6.6 = 6
// math.round roundup maxmimum value ex 4.6 = 5
console.log(Math.min(5,5,8,9,));
console.log(Math.max(5,5,8,9,));

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1 );

// here we are adding 1 to give a number like math.random create 0.06 so by mut 10 it shift 1 dig. 

// here by this min max we can findout according to u what no you wants
// math.random give numbers btwn 0to1
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (min - max + 1)) + min);
