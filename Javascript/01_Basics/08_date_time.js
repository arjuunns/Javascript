let myDate = new Date(); // months and day start from 0 in js => sunday = day 0 and Janaury = month 0
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate); // OBJECT

// let myCreatedDate = new Date(2024, 3, 14, 3, 59);
let myCreatedDate1 = new Date("2024-04-14"); // YYYY-MM-DD
let myCreatedDate2 = new Date("04-14-2024"); // MM-DD-YYY
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now(); // current time from 1 jan 1970 in miliseconds

// console.log(myTimeStamp); // in miliseconds

// to compare two different time
// console.log(myCreatedDate1.getTime());

// console.log(Math.floor(Date.now() / 1000)); // in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay() + 1);
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString("default", { weekday: "long" })); // more customization
