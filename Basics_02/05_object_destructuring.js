const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

// const { property / key / attribute } = object_name // to get rid of riding of writing course.courseInstructor multiple times we use this syntax so that we can directly access the object property by its name instead of writing with dot operator again and again.
// const { property / key / attribute : short_name (optional) }

const { courseInstructor: teacher } = course; // teacher(short-name) is optional, agar name jyada lamba ho toh shortname de skte h but it is optional

// console.log(course.courseInstructor);
// console.log(courseInstructor); // same output as course.courseInstructor
console.log(teacher); // same output as course.courseInstructor

/************************************************* HOW THIS IS USED IN REACT  *************************************************/

const navBar = ({ company }) => {};
navBar((comapny = " Google"));

/*******************************************************************************************************************************/

// Api => apna kaam kisi aur ke sir par daal dena (backend se aai hui values ko likhne ka tarika => commonly JSON form me aati hai)

// JSON( Javascript Object Notation ) example :  (key value dono as string input hote hai)

// {
//     "name" : "Arjun",
//     "courseName" : "js in hindi",
//     "price" : "free",
// };

// sometimes Api comes in form of arrays instead of JSON =>

[{}, {}, {}];
