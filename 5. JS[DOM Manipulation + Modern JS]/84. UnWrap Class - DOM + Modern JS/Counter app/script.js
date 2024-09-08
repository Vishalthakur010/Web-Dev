const countvalue= document.querySelector("#counter");

const increment = ()=>{
    // Get value from UI
    let value= parseInt(countvalue.innerText);
    // Update value
    value +=1;
    // Sent the value into UI
    countvalue.innerText=value;
};

const decrement = () =>{
    // Get value from UI
    let value= parseInt(countvalue.innerText);
    // Update value
    value -=1;
    // Sent the value into UI
    countvalue.innerText=value;
};