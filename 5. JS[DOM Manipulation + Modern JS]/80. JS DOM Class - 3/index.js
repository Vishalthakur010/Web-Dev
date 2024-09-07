//      Performance

// // Adding 100 para
// const t1=performance.now();
// for(let i=1; i<=100; i++){
//     let newelement= document.createElement('p');
//     newelement.textContent='This is para' + i;
    
//     document.body.appendChild(newelement);
// }
// const t2=performance.now();
// console.log("This took" + (t2-t1) + "ms");


// Optimizing little bit
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1; i<=100; i++){
//     let element= document.createElement('p');
//     element.textContent='This is new para' + i;

//     mydiv.appendChild(element)
// }
// document.body.appendChild(mydiv);

// const t4=performance.now();
// console.log("This took" + (t4-t3) + "ms");




// // DocumentFragment
// let fragment= document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let newelement= document.createElement('p');
//     newelement.textContent='This is para' + i;
    
//     fragment.appendChild(newelement);
// }
// document.body.appendChild(fragment);  // 1 Reflow  1 Repaint






//Single-threading
// The call stack

// function addpara(){
//     let para= document.createElement('p');
//     para.textContent='Js is single Threading language';
//     document.body.appendChild(para);
// }
// function newmessage(){
//     let para=document.createElement('p');
//     para.textContent='kyu nahi ho rahi padhai';
//     document.body.appendChild(para);
// }
// addpara();
// newmessage();




//Event Loop
// Set Timeout
setTimeout(function(){
    console.log('Anyeonhaseyo')
},10000)    // It will run after 10 sec 