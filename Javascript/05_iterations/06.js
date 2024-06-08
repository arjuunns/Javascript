const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// MAP FUNCTION => sare elements pe operation lgane ke liye koi

// let newNums = myNums.map((num) => num + 10); // sare elements pe operation lgane ke liye map function use kara hai

// CHAINING OF MAP/FILTER

let newNums = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 50);
console.log(newNums); //  [ 51, 61, 71, 81, 91, 101 ]


