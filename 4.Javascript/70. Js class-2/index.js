console.log('lets start');

//object create
// const rectangle={
//     length:1 ,
//     breadth:2 ,

//     Draw: function(){
//         console.log('Drawing rectangle');
//     }
// };

// Factory function
// function createRectangle(len, br){
//     return rectangle={
//         length:len ,
//         breadth:br ,
    
//         Draw(){
//             console.log('Drawing rectangle');
//         }
//     };
// }

// let rectangleObj1= createRectangle(8,6);
// let rectangle2= createRectangle(4,3);
// let rectangle3= createRectangle(5,2);

// console.log(rectangleObj1);
// rectangleObj1.Draw();

// camelcase -> numberOfstudents
// constructor function -> Pascal notation -> First letter of every word is capital -> NumberOfStudents
// conatructor function -> property/methods -> initialize/define

// function Rectangle(len, br){
//     this.length=len;
//     this.breadth=br;
//     this.draw=function(){
//         console.log('Drawing');
//     }
// }
// // Object creation using constructor function
// let rectangleObject= new Rectangle(5,6);

// // rectangleObject.color="Red";
// // console.log(rectangleObject);

// // delete rectangleObject.color;
// // console.log(rectangleObject);

// let rectangle1= new Function(
//     'len','br',
//     `this.length=len;
//     this.breadth=br;
//     this.draw=function(){
//         console.log('Drawing');
//     }`
// );

// // Object creation using rectangle1
// let rect= new rectangle1(2,3);

// console.log(rect);


// // Functions are objects

// Types in js :- 1. premitive   2. Refrence

//premitive  
// let a=10;
// let b=a;

// a++;
// console.log(a);
// console.log(b);

// Reference
// let a={value:10}
// let b=a;

// a.value++;
// console.log(a.value);
// console.log(b.value);


// premitive or pass by value
// let a=10;
//  function inc(a){
//     a++
//  };
//  inc(a);

//  console.log(a);

//  Reference or pass by address
// let a={value:10};
// function inc(a){
//     a.value++
// };
// inc(a);
// console.log(a.value);


// Iterating through objects

let rectangle= {
    length:2,
    breath:4,
};

// for in loop
// for(let key in rectangle){
//     // keys are reflected through 'key' variable
//     // values are reflected through 'rectangle[key]'
//     console.log(key, rectangle[key])
// }

// for of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// };

// find if any property is available in the object or not
// if('color' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }



// object cloning :-

// 1.Iteration
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// };

// src.a++;
// console.log(dest);

// 2.Assign
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let src2={value:25};
// let dest= Object.assign({},src, src2);
// console.log(dest);


// src.a++;
// console.log(dest);

// 3.Spread
let src={
    a:10,
    b:20,
    c:30
};

let dest={... src};

console.log(dest)

src.a++;
console.log(dest);