
// // const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newnum = mynum.map((num) => { return num + 10})
// // console.log(newnum);

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // channing
// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynum
//             .map((num) => num * 10 )
//             .map((num) => num + 1)
//             .filter((num) => num >= 40 )

// console.log(newnum);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// USE OF REDUCE FUNCTION 

const array1 = [1, 2, 3, 4, 5, 6, ];

// 2+ 2+ 3+ 4+ 5+ 6+

const intialvalue = 0;
const sumwithvalue = array1.reduce ((accumulator , currentvalue ) => accumulator + currentvalue , intialvalue );

console.log(sumwithvalue);

// +++++++++++++++++++++++++++++++++++++++++

const mynum = [1, 2, 3, 4];

const mytotal = mynum.reduce( function (acc, currval) {
    console.log(`acc: ${acc} currval : ${currval}`);
    return acc + currval

    } , 0 )

console.log(mytotal);

// with arrowfunction ex =>

const mytotal2 = mynum.reduce((acc, currval) => acc + currval , 0 )
console.log(mytotal2);


// ++++++++++++++++++++++++++++++++++++++++++

// with arrowfunction =>

    const shoppingcart = [
        {
            itemname : " js course " ,
            price : 2999
        },
        {
            itemname : " data course " ,
            price : 12999
        },
        {
            itemname : " mob dev course " ,
            price : 5099
        },
        {
            itemname : " python course " ,
            price : 999
        },
    ]

    const pricetopay = shoppingcart.reduce ((acc,item) => acc + item.price , 0 )
    console.log(pricetopay);
    

    
