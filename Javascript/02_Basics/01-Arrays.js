const myArray = [0, "Arjun", 2, false, 4, 5, 6];
// console.log(myArray[0], myArray[1], myArray[3]);

// const myArray2 = new Array(1, 2, 3, 4);
// console.log(myArray2[3]);
myArray.push("hello");
myArray.unshift(90); // adds element at the start => costly operation
myArray.shift(); // removes the starting element of the arr ay
// console.log(myArray);
myArray.pop();
// console.log(myArray);

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

const newArr = myArray.join() // converts array to comma separated string

// console.log(myArray);
// console.log(newArr);


// slice , splice => /************************************** IMP **************************************************/

// console.log("A ",myArray);

const myn1 = myArray.slice(1,3); // 3rd indexed element not included and original array is not manipulated
console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3) // last index included as well as the original array gets manipulated ,  the splice vala part gets removed from the array
console.log("C ",myArray);
console.log(myn2);

