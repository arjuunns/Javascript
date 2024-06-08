const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance); // also tells that 100 is a Number

// console.log(/balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.4535;

// console.log(otherNumber.toPrecision(4));

const hundereds = 1000000;
// console.log(hundereds.toLocaleString()); // for money related things adds comma between numbers based on country standards

const maxNum = Number.MAX_VALUE;
// console.log(maxNum);

/********************************************************   MATHS   *************************************************************************/

// console.log(Math.abs(-23));
// console.log(Math.round(2.463));
// console.log(Math.ceil(2.463));
// console.log(Math.floor(2.463));
// console.log(Math.min(2,4,5,6,8,9,3));
// console.log(Math.max(2,4,5,6,4,8,9));

// MOST USED =>

console.log(Math.random()); // generates a random number between 0 and 1
console.log(Math.random() * 10 + 1); // generates random number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // generates random number bw 1 to 10 without decimal

/******************************** IMP FORMULA TO GENERATE A RANDOM NUMBER IN A GIVEN RANGE => *************************************/

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
