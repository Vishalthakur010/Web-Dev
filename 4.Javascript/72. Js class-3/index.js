console.log('class 3')

let lastName='thakur';   // primitive type string
lastName.replace;

let firstName= new String('vishal');  // object

// let message='This is \n \' my first \' \n message';


// let message=        //Template literal
// `hello,
//       vishal ${lastName}

//       thanks for your great work
// regards
// vishal thakur`

// console.log(message);

// let word= message.split(' ');
// console.log(word);

// Date
// let date= new Date();

// let date2= new Date('June 15 2004 7:15');

// let date3= new Date(1975, 11, 23, 16);
// date3.setFullYear(1980);

// console.log(date3);

// Arrays

// Insert
// let num=[5,3,7,2,9];

// num.push(6); // End
// num.unshift(2); // Begin

// num.splice(2, 0, 'a', 'b', 'c'); // Middle

// Searching
// console.log(num);
// console.log(num.indexOf(2));

// If we want to check if a number is present in an array or not

// if(num.indexOf(7) != -1)
//   console.log('present')

// console.log(num.includes(7));

// console.log(num.indexOf(7,3)); // start searching from index 3



// searching on objects or references
//  courses=[
//     {no:1, name:'vishal'},
//     {no:2, name:'Thakur'}
// ];

// console.log(courses);

// callback function
// let course = courses.find(function(course){
//     return course.name == 'vishal';
// })

// let course= courses.find(course => course.name === 'Thakur');
// console.log(course);


// removing
// let num=[1,2,3,4,5,6,7];

// num.pop();   // End

// num.shift(); //Begin

// num.splice(2,1);  // Middle

// console.log(num);

//Empty

// let num=[1,2,3,4,5];
// let num2=num;

// num=[];        //Method : 1
// num.length=0;  //Method : 2

// num.splice(0,num.length);     //Method : 3

// while(num.length > 0){        //Method : 4
//       num.pop();
// }

// console.log(num);
// console.log(num2);


//    combining and Slicing

// let first=[1,2,3];
// let second=[4,5,6];

// let combined=first.concat(second);
// console.log(combined);

//slice
// let marks=[10,20,30,40,50,60,70,80];

// let sliced=marks.slice();
// let sliced=marks.slice(2);
// let sliced=marks.slice(2,6);

// console.log(sliced);


// spread operator
// let first=[1,2,3];
// let second=[4,5,6];

// let combined=[...first,'a', ...second, 'b',true]
// console.log(combined);

// // for copy
// let another=[...combined];
// console.log(another);


// Iterating an array
// let arr=[10,20,30,40,50]

// for(let value of arr){
//       console.log(value);
// }

// arr.forEach(function(number){
//       console.log(number)
// })

// converting into arrow function
// arr.forEach(number =>console.log(number));

// Joining array
// let num=[1,2,3,4,5];
// const joined= num.join(',');
// console.log(joined);


// Spliting 
// let message='This is my first message';
// let parts= message.split(' ');
// console.log(parts);

// let joined=parts.join('_') // Joining again
// console.log(joined);

// Sorting

// Premitives
// let num=[50,20,60,40,30,10];
// num.sort();

// console.log(num);

// num.reverse();
// console.log(num);

// Objects
// let arr=[
//       {id:4, Name:'Thakur'},
//       {id:2, Name:'sahil'},
//       {id:3, Name:'prince'},
//       {id:1, Name:'Vishal'}
// ]
// let sorted=arr.sort(function(a,b){
//       return a.id-b.id;
// })
// console.log(sorted);
 

// Filtering Arrays
// let num=[-4,5,0,-2,-6,8,3]

// Normal callback function
// let filtered= num.filter(function(value){
//       return value <=0;
// })

// Arrow function
// let filtered= num.filter(value => value >=0);

// console.log(filtered);


// Mapping Arrays
// let num=[7,8,9,10];

// let mapped= num.map(function(value){
//       return 'student_no : '+ value ;
// });

// Arrow function
// let mapped=num.map(value => 'student_no : '+ value)
// console.log(mapped);

// Mapping with Objects
let num=[4,-6,0,2,-8]
// let filtered= num.filter(value => value>0)

// let mapped= filtered.map(function(num){
//       return {value:num};
// })

// Arrow Function
// let mapped=filtered.map(num => ({value:num}));

// chaining
let mapped=num.filter(value => value>0)
                  .map(num => ({value:num}));

console.log(mapped);