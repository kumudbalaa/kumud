
// const coding = ["js", "css" ," js" , "rubby" ]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item // do not return foreach loop rerturn any value
//     })

    // console.log(values);

    // ++++++++++++++++++++++++++++++++++++++++++++++++++

    const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // const newnums =  mynum.filter((num) => {
    //     return num > 4
    // } )
    // console.log(newnums);

// ++++++++++++++++++++++++++++++++++++++++++++++++

const newnum = []

mynum.forEach( (num) => {
    if (num > 4 ) {
        newnum.push(num)
     }
    })
  console.log(newnum);

//++++++++++++++++++++++++++++++++++++++++++===============

// real word problem use of filter how t5o use


const books = [
    { title: 'The Alchemist', genre: 'Fiction', publishDate: '1988-04-15', edition: '1st' },
    { title: 'Eloquent JavaScript', genre: 'Programming', publishDate: '2018-12-04', edition: '3rd' },
    { title: 'The Hobbit', genre: 'Fantasy', publishDate: '1937-09-21', edition: '1st' },
    { title: 'Atomic Habits', genre: 'Self-Help', publishDate: '2018-10-16', edition: '1st' },
    { title: 'Clean Code', genre: 'Programming', publishDate: '2008-08-11', edition: '1st' },
    { title: 'To Kill a Mockingbird', genre: 'Fiction', publishDate: '1960-07-11', edition: '1st' },
    { title: 'Deep Work', genre: 'Productivity', publishDate: '2016-01-05', edition: '1st' },
    { title: 'The 7 Habits of Highly Effective People', genre: 'Self-Help', publishDate: '1989-08-15', edition: '1st' },
    { title: 'Intro to Algorithms', genre: 'Education', publishDate: '1990-09-01', edition: '3rd' },
    { title: 'Harry Potter', genre: 'Fantasy', publishDate: '1997-06-26', edition: '1st' }
  ];
  

  let userbooks = books.filter ( (bk) => bk.genre === 'Fantasy')

  userbooks = books.filter  ( (bk) => { 
    return bk.publishDate >= '01-01-2000' && bk.genre === 'Fantasy'})

  console.log(userbooks);
  


    

    