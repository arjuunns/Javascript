// function sayMyName() {
//   console.log("A");
//   console.log("R");
//   console.log("J");
//   console.log("U");
//   console.log("N");
// }

// sayMyName; // function ka reference pass kiya hai bas ki function exist karta hai par execute nahi karvaya.
// sayMyName(); // function ko execute karvaya hai

// function addTwoNumbers(num1, num2) {  // num1,num2 are parameters of the function as they are passed in the definition of the function.
//   console.log(num1 + num2);
// }
// addTwoNumbers(3, 5); // 3,5 are arguments of function i.e. the actual values passed inside the function.
// let result = addTwoNumbers(4, 5);
// console.log("Sum is :", result); // result undefined bcuz tune return nhi ki koi value

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
let a = 4;
let b = 6;
let result = addTwoNumbers(a,b); // agar func me parameter nahi doge like addTwoNumber() then unke by default dataype undefined ho jayenge
console.log(`Sum of ${a} and ${b} is :`, result);

function loginUserMessage(username = "Anonymous") { // if we give a default value to a parameter,it will always be executed and can be over-ridden
  //   if (username === undefined) console.log("Please enter a username");
  if (!username) console.log("Please enter a username");
  else return `${username} just logged in`;
}
// console.log(loginUserMessage("Arjun"));
console.log(loginUserMessage()); // output will be Anonymous just logged in


