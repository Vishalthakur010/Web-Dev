console.log('Class :- 4');

// Function call or invoke
// run();   // Because of hoisting we can call function before declaration

// // Function Declaration
// function run(){
//     console.log('running');
// }


// // Named Function Assignment
// let stand=function walk(){
//     console.log('walking');
// }
// stand(); // hoisting dosent work here

// let jump=stand;
// jump();

// // Anonymous Function Assignment
// let stand2=function(){
//     console.log('standing');
// }
// stand2();



// Js is a dynamic language

// let a=1;
// a='Hello';
// console.log(a)

// function sum(a,b){
//     console.log(arguments)
//     return a+b;
// };
// console.log(sum(2,3));
// console.log(sum(2));
// console.log(sum());
// console.log(sum(1,2,3,4,5));

// let ans = console.log(sum(1,2,3,4,5));

// Dynamic function using special keyword Arguments
// function sum(){
//     let total=0;
//     for(let value of arguments){
//         total=total+value;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5));



// Rest operator :- Works on array
// function sum(a,b, ...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);



// Default Parameters
// function interest(p,r=8,y=10){
//     return p*r*y/100;
// };
// console.log(interest(1000,6));
// console.log(interest(1000,undefined,6)); // Trick



// Getter Setter
// Getter => Access properties
// Setter => change or manipulate properties

// let person={
//     fName :'Vishal',
//     lName :'Thakur',

//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error('you have not sent a string')
//         }
//         let parts= value.split(' ');
//         this.fName= parts[0];
//         this.lName= parts[1];
//     }
// };

// console.log(person.fullName); // Getter function

// // person.fullName='Rahul kumar'  // Setter function

// try{
//     // person.fullName='Rahul kumar';
//     person.fullName=67;
// }
// catch(e){
//     alert(e);
// }

// console.log(person.fullName);



// Scope 

// let keyword
// {
//     // let a=5;
//     var a=6;
//     console.log(a);
// }
// console.log(a);

// var keyword
// {
//     var a=6;
//     console.log(a);
// }
// console.log(a);

// function walk(){
//     var a=10;
//     // console.log(a);
// }
// console.log(a);

// for(let a=0; a<=10; a++){

// }
// console.log(a);

// for(var a=0; a<=10; a++){

// }
// console.log(a);

// if(true){
//     let a=5;
// }
// console.log(a);

// if(true){
//     var a=6;
// }
// console.log(a);

// function a(){
//     const ab= 5;
// }

// const ab=5;

// function a(){
//     const ab=5;
// }




// Reducing an array
// let arr=[1,2,3,4,5];
// let total =0;

// for(let value of arr){
//     total += value;
// }
// console.log(total);

let arr=[1,2,3,4,5];
let result= arr.reduce((accumulator ,currentValue) => accumulator +currentValue)
console.log();
console.log(result);