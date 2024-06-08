// Singleton => when we declare object as literals, singletons is not created

Object.create; // constructor method -> singleton is created

// Object Literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Arjun",
  age: 18,
  [mySym]: "myKey", // use [] to declare symbols inside an object
  location: "Jaipur",
  "experience in years": 5,
  email: "arjun@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]); // imp hai => jab object mein key string type ki hogi toh fas jaoge varna
// console.log(JsUser.experience in years); // won't work as key is multiple words string type
// console.log(JsUser["experience in years"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); // symbol is of string dataype not symbol dataype
// console.log(JsUser.mySym); // won't work
// console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser); // prevents overiding of object data

JsUser.email = "harshu@gmail.com"; // as object is freezed email won't be over-ridden
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User!!");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User ${JsUser.name} aged ${this.age}`); // to use object properties use string-interpolation using back-ticks ` `
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
