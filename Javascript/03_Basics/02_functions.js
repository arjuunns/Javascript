// function calculateCartPrice(...items) { // jab hume na pta ho function me kitne parameters aa skte hai we use ... (rest operator)
// return items;
// }
console.log(calculateCartPrice(10,20,30,40)); // array me dalke de dega multiple arguments ko

function calculateCartPrice(item1, item2, ...items) { // phli 2 values item1,item2 me chali jayegi aur baki values array me bcuz of rest operartor (...)
  return items;
}
// console.log(calculateCartPrice(10, 20, 30, 40)); // array me dalke de dega multiple arguments ko

// Passing objects and arrays into function =>

const user = {
  username: "Arjun",
  price: "299",
};

const handleObject = function(anyobject) {
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); // we also need to ensure ki anyobject ke pass username aur price jaisi properties hai bhi ya nahi
}

// handleObject(user);
handleObject({ // we can also pass the object directly instead of its name
  username: "Gurpreet",
  price: "399",
});

const myNewArray = [200, 400, 100, 600];
function returnSecondElement(getArray) {
  return getArray[1];
}
// console.log(returnSecondElement(myNewArray));
console.log(returnSecondElement([200, 400, 100, 600])); // we can also directly pass array as an argument instead of its name.


