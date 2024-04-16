// Avoid these kind of conversions

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // F
console.log(null == 0); // F == works differently than other comparison operators
console.log(null >= 0); // T

console.log(undefined == 0); // F
console.log(undefined > 0); // F
console.log(undefined < 0); // F

// triple equality also check for dataypes first
console.log("2" === 2); // F
