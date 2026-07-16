// console.log(typeof(NaN));
// console.log({}+[])

// function abs(){
//   return 
//   {
//     a: 1
//   }
// }
// console.log(abc());

// let arr =[10,15,30];
// arr[5] = 100;
// console.log(arr.length);

// let arr =[15,10,30,40,5,10,30];
// let uniqueArr =arr.filter((item,index)=>{
//   return arr.indexOf(item)===index;
// })
// console.log(uniqueArr);


// function fn(){
//   return
//   {name:'abc'};
// }
// console.log(fn());
// const arr = [10,12,18,6,4];
// function a(b){
//   return(c)=>{
//     return b+c;
//   }
// }
// console.log(a(10)(20));
// console.log("farhan" *"ansari");
// const str1 =  "farhan";
// const str2 =  "ansari";

// function abc(str1,str2){
//   let newstr = "";
//   let min =Math.min(str1.length,str2.length);
//   for(let i=0; i<min;i++){
//     newstr += str1[i]+str2[i];

//   }
//   return newstr+str1.slice(min)+str2.slice(min);
// }
// console.log(abc(str1,str2));

// let obj =[{name:"farhan",marks:65},{name:"ansari",marks:80},{name:"farhan",marks:100}];
// const newobj =obj.filter((item)=>item.marks>70);
// console.log(newobj);

// let obj =[{name:"farhan",marks:65},{name:"ansari",marks:80},{name:"farhan",marks:100}  ];
//  const newobj = obj.filter((item)=>item.marks>40)
//  console.log(newobj);

// console.log({}=={});
// console.log({}==={});


// var a={
//   id:1,
//   title:"meet",
//   abc:"A",
// }
// var b= {
//   id:2,
//   title:"ansari"
// }

// var c= {
//   ...a,...b
// }
// console.log(c);

// const original = {
//   name: "Farhan",
//   address: {
//     city: "Aurangabad"
//   }
// };

// const copy = { ...original };

// copy.name = "Ahmed";
// copy.address.city = "Pune";

// console.log(original);
// console.log(copy);




// const arr=[1,2,3,4,5];
// //  const double =arr.map(num=>num*2);
// //  console.log(double);

// arr.forEach(num=>{
//   console.log(num*2);
// });

// const fruits = ["apple", "banana", "cherry"];
// for(const fruit of fruits ){
//   console.log(fruit);
// }

// const person ={
//   name:"farhan",
//   age:25,
//   city:"aurangabad"
// }
// for(const key in person){
//   console.log(key,person[key]);
// }

// let str = "farhan";
// let reversestr = str.split("").reverse().join("");
// console.log(reversestr);
// function reversedstring(str){
//   let reversed = "";
//   for(let i=str.length -1 ;i>=0; i--){
//     reversed  += str[i];
//   }
//   return reversed;
// }

// function counter(){
// let count = 0;
// return function(){
//   count++;
//   return count;
// }
// }

// const arr =["apple","banana","cherry","date","elderberry","fig","grape","honeydew","kiwi","lemon"];

// const result =arr.map(a)
// let arr = [10, 15, 30, "cat", "e", 40, 61, "q", 23, 75];

// let numbers = arr.filter(item => typeof item === "number");
// let strings = arr.filter(item => typeof item === "string");

// console.log(numbers);
// console.log(strings);


// let str = "farhan";
// let reversestr =str.split("").reverse("").join("");
// console.log(reversestr);


// function reversestring(str){
//   let reversed="";
//   for(let i=str.length -1;i>=0;i--){
//     reversed += str[i];
//   }
//     return reversed;
// }


// function reversedstring(str){
//   let reversed = "";
//   for(let i=str.length -1 ;i>=0; i--){
//     reversed  += str[i];
//   }
//   return reversed;
// }
// console.log(reversedstring("farhan"));
// console.log(reversedstring("ansari"));

// let str = "farhan";
// let reveersestr=str.split("").reverse().join("");
// console.log(reveersestr);

// let arr =[10,15,30,"cat","e",40,61,"q",23,75];
// let numbers = arr.filter(item => typeof item === "number");
// let strings = arr.filter(item => typeof item === "string");
//   console.log(numbers);
//   console.log(strings);

// let arr =[1,2,3,4,5,6,7,8,9,10];
// let asnwer=arr.reduce((total,num)=>total+num,0);
// console.log(asnwer);

// // let name =  "farhan";
// let name ="ansari";
// console.log(name);

// const name ="farhan";
// name ="ansari";
// console.log(name );

// a = 10
// var a
// console.log(a);
const arr=[
  {name:"farhan",age:22},
  {name:"ansari",age:25},
  {name:"meet",age:20}
]

const result =arr.find(item=>item.age>65);
console.log(result);