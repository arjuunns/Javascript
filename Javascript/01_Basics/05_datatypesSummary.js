// Javascript is dynamically typed programming language

// Primitive :

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

// Non-Primitive (Reference)

// Arrays,Objects,Functions

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id == anotherId);

const bigNumber = 5345435345345345345345345345345345345532425n;
// console.log(bigNumber);
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Arjun",
  age: 20,
};

const myFunction = function () {
  // console.log("Hello world");
};

// console.log(typeof anotherId);
// console.log(typeof bigNumber);

// Stack and Heap Memory

// Stack (Primtive) -> copy of value     ||      Heap (non-primitive) -> actual address of memory

let myYoutubeName = "codeWithArjun";
let anothername = myYoutubeName;
anothername = "GamingWithArjun"; // stack memory => primitive datatype => change in one variable does'nt reflect in other variable bcuz a copy of tht variable is created and change occurs there
console.log(myYoutubeName);
console.log(anothername);

let userOne = { // created in heap reference type
  email: "arjun@google.com",
  upi: "user@bhim",
};
let userTwo = userOne; // reference created , change in either of two objects will be reflected in the other
userTwo.email = "harshu@meta.com";

console.log(userOne.email);
console.log(userTwo.email);
