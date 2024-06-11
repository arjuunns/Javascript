const obj = [{
  name: "Arjun",
  subject:"cs",
  welcome : function(){
    console.log(`Welcome ${this.name} you are enrolled in ${this.subject}`);
  }
}];

// for(const key in obj){
//     console.log(`${key} is ${obj[key]}`);
// }
const myfunc = (num1,num2) => {
    return num1+num2};
console.log(myfunc(2,3));

const print = () => ({name : obj.name})
console.log(print());


 (function connected(name){
  console.log(`Connection established ${name}`);
 })("chutiya");

 ((name)=>{
console.log(`hi ${name}`);
 })("chutiya")

 const arr =[1,2,3,4];

 arr.forEach((element) =>{
  console.log(element);
 });
 arr.forEach(function(item){
  console.log(item);
 })

 function printMe(item){
  console.log(item);
 }

 arr.forEach(printMe);
 obj.forEach((item)=>{
  console.log(item);
 })


 const userdata = obj.filter((it)=> {
  return it.name ==="Arjun"
 });
 console.log(userdata);

 const obj1 = [1,2,3];
  const x = obj1.reduce((curval,num)=>curval+num,0);
 console.log(x);