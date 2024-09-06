// // Add eventListner
// function tapfunction(){
//     console.log('this is vishal')
// }

// document.addEventListener('click',tapfunction)
// document.removeEventListener('click',tapfunction)



// // The event object
// const content =document.querySelector('#wrapper')
// // console.log(content)

// content.addEventListener('click',function(event){
//     console.log(event)
// })



//The default action
// let links=document.querySelectorAll('a')
// let thirdlink=links[2]

// thirdlink.addEventListener('click', function(event){
//     event.preventDefault()
//     console.log('Ab ye faceBook pe nahi jayega ')
// })



//Avoid too many Events

// Normal Way
// let mydiv=document.createElement('div');
// for(let i=1; i<=100; i++){
//     let newelement= document.createElement('p')
//     newelement.textContent='This is para'+ i;

//     newelement.addEventListener('click', function(){
//         console.log('I have clicked on para');
//     })
//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);



// Efficient Way
// let mydiv=document.createElement('div');

// function parastatus(event){ 
//     console.log('para', event.target.textContent)
//     // console.log('I have clicked on para');
// }
// mydiv.addEventListener('click',parastatus)

// for(let i=1; i<=100; i++){
//     let newelement= document.createElement('p')
//     newelement.textContent='This is para'+ i;

//     mydiv.appendChild(newelement);
// }
// document.body.appendChild(mydiv);



// Another way
let element= document.querySelector('#container');

element.addEventListener('click', function(event){
    if(event.target.nodeName == 'SPAN'){
        console.log('clicked on span' + event.target.textContent)
    }
})