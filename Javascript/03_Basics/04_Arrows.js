const user = {
    username : "Arjun",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website `); // w/o this work hi ni krega tumne btaya hi nahi username kiska h , kyuki username toh change ho sakta h
        // console.log(this); // this gives current context , in this case it is the user object.
    }
}

// user.welcomeMessage();
// user.username = "Harshu";
// user.welcomeMessage();

// console.log(this); // **** gives context as empty bcuz in node environment there is no global context but if you run it in browser it will give window as the current context. 

function chai(){
    let username = "Arjun"
    console.log(this.username); // cannot use this keyword in this type of function declarations
}
chai();

// const chai = function(){
//     let username = "Arjun"
//     console.log(this.username); // cannot use this keyword in this type of function declarations
// }
// chai();


// const chai = () => { // function declaration using arrow (arrow functions)
//         let username = "Arjun"
//         console.log(this); // yaha pe empty ayega context naki chai function
//         console.log(this.username); // cannot use this keyword in this type of function declarations
//     }
// chai();

/***********************************  MORE ABOUT ARROW FUNCTIONS  ***************************************/

const addThree = ( num1,num2,num3 ) => { // explicit return -> explicitly btaya hai ki return kro kuch return keyword use karke
    return num1+num2+num3;
}

const addTwo = ( num1 ,num2 ) => ( num1 + num2 ); // implicit return -> btaya nhi return kro khud hi return kr dega , used in single line always and react me bhot use hoga.

// Note : curly braces me return keyword likhna pdega aur parentheses me nahi likhna hoga .

console.log(addThree(1,2,3));
console.log(addTwo(1,2));

const fun = () => ({username : "Arjun"}) // object ke elements return karte time curly braces use karne padege
console.log(fun());