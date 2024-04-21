//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Arjun";
  console.log("hemu");
  function two() {
    // child function can access parent function ke  functions and variables.

    const website = "youtube";
    console.log(username);
  }
  // console.log(website); cannot access child function ke variables/functions outside of that scope
  // two();
}
// one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website); // cannot access child function ke variables/functions outside of that scope
}

// console.log(username); // cannot access child function ke variables/functions outside of that scope

// ************************************************ INTERESTING ********************************************************

console.log(addOne(5)); // in this type of declaration we can use the function even before the function is declared
function addOne(num) {
  return num + 1;
}
console.log(addTwo(5)); // we cant use the function before its declaration when using an expression to declare a function
const addTwo = function (num) { // function declared as an expression
  return num + 2;
};
