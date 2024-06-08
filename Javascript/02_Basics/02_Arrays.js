const marvel_Heroes = ["Thor", "Ironman", "Spiderman"];
const dc_Heroes = ["Superman", "Flash", "Batman"];

// marvel_Heroes.push(dc_Heroes);
// console.log(marvel_Heroes);
// console.log(marvel_Heroes[3][1]);

// concat => to merge two arrays

const allHeroes = marvel_Heroes.concat(dc_Heroes); // concat returns a new array so you need another array in order to store it
// console.log(allHeroes);
// console.log(marvel_Heroes);

// Spread operator is more commonly used to merge arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7];
const arr3 = [8, 9];
const mergedArr = [...arr1, ...arr2, ...arr3]; // ... (spread operator makes the array elements as individual entities and then joins them into one single array)
// console.log(mergedArr);

// flatten a multidimensional array into single array =>

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flattened_Arr = anotherArr.flat(Infinity); // flat(depth till which you want ot flatten),infinity means till all the depth is flattened
// console.log(flattened_Arr);

// IMP ARRAY FUNCTIONS =>

// console.log(Array.isArray("Arjun")); // checks if argument is an array or not
console.log(Array.from("Arjun")); // makes an array of arguments
console.log(Array.from({ name: "Arjun" })); //interesting : key,value pair => cant decide what to do with keys

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // creates an array of passed arguments
