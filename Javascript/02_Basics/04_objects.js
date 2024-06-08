// const tinderuser = new Object()
const tinderuser = {};
// we can also declare object members outside the object => 
tinderuser.id = "123abc";
tinderuser.name = "Manpreet";
tinderuser.isLoggedIn = true;
// console.log(tinderuser);

// nesting of objects =>

const regularUser = {
  email: "manpreet@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Manpreet",
      lastName: "Singh",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName); // ? used to check print only if the value exists , useful during apis , will be learning it later.

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = {obj1,obj2,obj3} // creates 3 nested objects in object4
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3); // single object without nesting
// console.log(obj4);

// BEST PRACTICE => using spread operator

// const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

/********************************************************* ARRAY OF OBJECTS ******************************************************************/

// Jab users ka data ayega toh vo generally array of objects ki form me ayega =>

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
];

// console.log(users[0].id, users[1].email);
// console.log(tinderuser);
/************************ VERY IMP METHODS TO RETRIEVE DATA FROM OBJECTS EXTENSIVELY USED IN BACKEND ****************************/

console.log(Object.keys(tinderuser)); // ************************* converts all the keys to an array *******************************
console.log(Object.values(tinderuser)); // *********************** converts all the values to an array *****************************
console.log(Object.entries(tinderuser)); // converts all the (key,value) pairs into arrays with each element of array consisting of an array of size2 with (key,value) as its elements

console.log(tinderuser.hasOwnProperty("isLoggedIn")); // before performing operations in backend , to be on the safer side , we check whether the object has that property or not.
