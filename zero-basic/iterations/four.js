// forin loop in objects
const myobj = {
    js : 'javascrippt',
    cpp : 'c++',
    rb : 'rubby',
    swift : ' swift by apple'
}

for (const key in myobj ) {
    // console.log(`${key} shourtcut is for ${myobj[key]}`);
    
}

// +++++++++++++++++++++++++++++++++++++++

// forin loop in array

const programinglan = ["js", "css" ," js" , "rubby" ]

for (const key in programinglan) {
    console.log( programinglan[key]);
    
    }