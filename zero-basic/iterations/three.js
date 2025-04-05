//  for of

["", "", "",] // srings in array
[{},{},{} ] // objects in array 

const arr = [1 , 2, 3, 4, 5 ]

for (const num of arr ) {

    // console.log(num);
    
}

const greetings = " hello kumud"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}

//  maps 

const map = new Map ()
map.set ('IN', "INDIA")
map.set ('USA', "UNITED STATE OF INDIA")
map.set ('FR', "FRANCE")
map.set ('IN, "INDIA')

console.log(map);

for (const [key , value] of map) {
    console.log(key, ':-', value );
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++

const myobj = {
    'game1' : 'nsf',
    'game2' : 'spiderman'
}

for (const [key , value] of object) {
    console.log(key, ':-' , value );
    
}

// forof loops are not applicable on onjects 