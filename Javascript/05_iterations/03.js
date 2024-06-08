/********************************************* ARRAY SPECIFIC LOOPS *************************************************/

// ["","","",""]
// [{},{},{},{}]

const arr = [1, 2, 3, 4, 5];

// for of loop => can be used for objects,arrays,strings etc

// for (const iterator of object) {
//
// }

// for (const value of arr) {
//   console.log(value);
// }

const greetings = "Hello World";
for (const ch of greetings) {
  console.log(`Each char is ${ch}`);
}

// Maps => unique values in order

const map = new Map();
map.set("IN", "INDIA");
map.set("Fr", "France");
map.set("Aus", "Australia");
console.log(map);

for (const [key, value] of map) { // to print keys and values separately (slight variation of for of loop)
  console.log(key, ":-", value);
}

// On Objects =>

const myObject = {
  game1: "NFS",
  game2: "GTA",
};

// for (const [key, value] of myObject) { // for of loop can't iterate over objects
//     console.log(key, ":-", value);
//   }