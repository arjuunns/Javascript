/********************************************* FILTER , MAP , REDUCE ****************************************************/

const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item)=>{ // for-each doesn't have a return type
//     // console.log(item);
//     return item;
// })
// console.log(values);

// FILTER => (callback + condition)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4); // filter value return karta h toh kisime store karni pdegi

const newNums = myNums.filter((num) => {
  // syntax2
  return num > 4;
});

myNums.forEach((num) => {
    // if (num > 4) console.log(num);
});

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// extract data based on certain criteria => use filter function

let userBooks = books.filter((bk) => bk.genre === "Science"); // bina curly braces ke return nahi likhna hai
  console.log(userBooks);

userBooks = books.filter((bk) => { // curly braces ke saath return likhna hai
  return bk.publish > 1985 && bk.genre === "Fiction";
});
console.log(userBooks);
