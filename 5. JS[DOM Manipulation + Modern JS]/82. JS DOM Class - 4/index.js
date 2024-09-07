console.log('Js DOM Class-4')


// Synchronous code
// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');



// Asynchronous
// setTimeout(function(){
//     console.log('Third');
// },5000)

// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');



//  Promise
// let mypromise= new Promise(function(resolve,reject){
//     console.log('i am inside promise');
//     resolve(1998);
// })
// console.log('Pehla');


// let mypromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('i am inside promise');
//     }, 5000)
//     // resolve(2234);
//     reject(new Error('ye to reject ho gaya'));
// })
// console.log('Pehla');




// let mypromise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('i am inside promise 1');
//     }, 5000)
//     // resolve(2234);
//     // reject(new Error('ye to reject ho gaya'));
// })

// let mypromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('i am inside promise 2');
//     }, 3000)
//     // resolve(2234);
//     // reject(new Error('ye to reject ho gaya'));
// })

// console.log('Pehla');




// fullfiled- then()   rejected- catch()
// let mypromise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('i am inside promise 1');
//     }, 5000)
//     // resolve(2234);
//     reject(new Error('ye to reject ho gaya'));
// })
// // mypromise1.then((value) => {console.log(value)});
// // mypromise1.catch((error)=> {console.log('This is a new error')})

// mypromise1.then((value) => {console.log(value)}, (error)=> {console.log('This is a new error')});




// Synchronous with multiple promises using then()

// let promise1= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('SetTimeout-1 Started');
//     },2000)
//     resolve();
// })
// let output = promise1.then(() => {
//     let promise2= new Promise((resolve, reject) => {
//         setTimeout(function(){
//             console.log('SetTimeout-2 Started')
//         },3000)
//         resolve('promise2 resolved')
//     })
//     return promise2;
// })
// output.then((value)=> console.log(value));




// Async- Await
// async function trial(){
//     return "kya haal hai bhai";
// }
// console.log(trial());


async function utility(){

let delhimausam= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Delhi me to bohot garmi hai");
    },5000)
});

let manalimausam= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Manali me baarish ho rahi hai");
    },7000)
});


let dm=await delhimausam;
let mm=await manalimausam;

return[dm,mm];
}

console.log(utility());
