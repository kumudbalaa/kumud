

// for 
// 1
for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element == 5) {
        console.log(" 5 is best no")
    }
    console.log(element);
    
}

// +++++++++++++++++++++++++++++++++++++++
// 2
// table code 

for (let i = 0; i <= 10 ; i++) {
    console.log(`outher loop value : ${i}`) ;

    for (let j =  0; j<=10 ; j++ ) {
        console.log( i + '*'+ j + '=' + i*j ) ;
    }
    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++
// 3 

let myarray = ["flash" , " batman" , "supermN"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// 4

//  break and continue

for (let index = 1 ; index <= 20 ; index++) {
    if (index == 5 ) {
        console.log(`detected 5 `);
        break;
    }
    console.log(` value of i is ${index}`);
    
    
}

// +++++++++++++++++++++++++++++++++++++++++

for (let index = 1 ; index <= 20 ; index++) {
    if (index == 5 ) {
        console.log(`detected 5 `);
        continue;
    }
    console.log(` value of i is ${index}`);
    
    
}
