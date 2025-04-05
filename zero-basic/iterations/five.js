
const coding = ["js", "css" ," js" , "rubby" ]

coding.forEach(function(item) {
//   console.log(item);
  
})

// ++++++++++++++++++++++++++++

coding.forEach( (val) => {
    // console.log(val);
})

// +++++++++++++++++++++++++++++++++++++++++++

// function printme (item) {
//     console.log(item);
    
// }
// coding.forEach(printme)

// +++++++++++++++++++++++++++++++++++++++++++++++
// foreach loop in objects in arr [{}, {}, {}] 
const mycoding = [
    {
        languagename : "javascript",
        languagefile : "js"
    },
    {
        languagename : "java",
        languagefile : "javs"
    },
    {
        languagename : "phython",
        languagefile : "ph"
    },
    {
        languagename : "html",
        languagefile : "js"
    },
]

mycoding.forEach ( (item) => {
    console.log(item.languagename);
    
})
