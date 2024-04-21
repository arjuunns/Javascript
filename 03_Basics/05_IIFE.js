// IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

// USED FOR = >
// 1. IMMEDIATELY CALLING A FUNCTION
// 2. SAVING FUNCTION FROM GETTING POLLUTED FROM GLOBAL VARIABLES

(function chai() { // this is a named IIFE or IIFE with a name.
  console.log("DB Connected");
})();  // first () function wrap krane ke liye, second () immediately execute krne ke liye function ko

// upar semicolon lgana jaruri tha bcuz IIFE ko nahi pta chlega varna context kaha rokna hai then hum ek se jyada IIFE likh sakte hai.

(() => {  // using arrow function for creating IIFE (un-named IIFE)
  console.log("DB Connected 2");
})();  // first () function wrap krane ke liye, second () immediately execute krne ke liye function ko

((name) => {  // using arrow function creating IIFE
  console.log(`DB connected ${name}`);
})("Arjun");  // treat 2nd parenthesis as function execution , pass values in it.
