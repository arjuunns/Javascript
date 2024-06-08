const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift",
};

// Iterating on objects using for in loop =>
// note : forof loop me by default values print hoti hai and forin loop me keys
for (const key in myObject) {
    // console.log(`Key :- ${key}, value :- ${myObject[key]}`);
}

const arr = [2, 3, 3, 4, 5, 3];
for (const key in arr) {
  //   console.log("Key : " + key);
  //   console.log("Value : " + arr[key]);
}

// const map = new Map();
// map.set("IN", "INDIA");
// map.set("Fr", "France");
// map.set("Aus", "Australia");

// for (const key in map) { //  maps don't work with forin loops
//   console.log(key);
// }

// OBJECTS => use for-in loop and ARRAYS => use for-of loop

/*********************************  For Each Loops (Most widely used on arrays) *******************************************/

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (item) { // forEach ke parameter me callBack func dalna h , uska koi naam ni hoga .
//   console.log(item);
});

coding.forEach( (item) => { // using arrow functions
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe); // function ka reference pass kar diya

coding.forEach( (item,index,arr) => { // you can even pass item,index and array in parameter to get the required things
    console.log(item , index , arr);
})

// V.V.IMP =>

const myCoding = [
    {
        langauageName: "Javascript",
        languageFileName:"js",
    },
    {
        langauageName: "C++",
        languageFileName:"cpp",
    },
    {
        langauageName: "Python",
        languageFileName:"py",
    }
]

// Jab bhi database se data ayega mostly array of objects ki form m hi ayega, then maximum times you will use for-each lopp

myCoding.forEach( (item)=>{
    // console.log(item.langauageName);
})