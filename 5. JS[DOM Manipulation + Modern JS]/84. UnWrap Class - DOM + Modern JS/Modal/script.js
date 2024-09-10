const modal= document.querySelector(".modal");
const overlay= document.querySelector(".overlay");

//Modal open function
openModal=()=>{
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

//Close Modal function
closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}