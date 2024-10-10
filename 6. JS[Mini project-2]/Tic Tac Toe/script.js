const boxes= document.querySelectorAll(".box")
const gameInfo= document.querySelector(".game-info")
const newGameBtn= document.querySelector(".btn")

let currentPlayer;
let gameGrid;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//let's create a function to initialize the game
function  initGame(){
    currentPlayer="X"
    gameGrid=["","","","","","","","",""]

    //Update on UI
    boxes.forEach((box,index)=>{
        box.innerText=""
        boxes[index].style.pointerEvents='all'
        boxes[index].classList.remove("win")
    })
    newGameBtn.classList.remove("active")
    gameInfo.innerText=`Current Player-${currentPlayer}`

    // boxes.forEach((box, index)=>{
    //     boxes[index].classList.remove("win")
    // })
}

initGame();

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer = "O"
    }
    else{
        currentPlayer="X"
    }
    gameInfo.innerText=`Current Player-${currentPlayer}`
}

function checkGameOver(){
    let answer=""
    winningPosition.forEach((position)=>{
        // All three boxes should be non empty and exactly same in value
        if( (gameGrid[position[0]]!="" || gameGrid[position[1]] !="" || gameGrid[position[2]]!="") && (gameGrid[position[0]]=== gameGrid[position[1]] && gameGrid[position[1]]=== gameGrid[position[2]])) {
            //check who win
            if(gameGrid[position[0]]==="X"){
                answer="X"
            }
            else{
                answer="O"
            }

            //disable pointer events
            boxes.forEach((box)=>{
                box.style.pointerEvents='none'
            })

            //now we know X/O win
            boxes[position[0]].classList.add("win")
            boxes[position[1]].classList.add("win")
            boxes[position[2]].classList.add("win")

        }
    })
    
    if(answer != ""){
        newGameBtn.classList.add("active")
        gameInfo.innerText=`Winner Player-${answer}`
        return
    }

    // check if there is a tie
    let fillCount=0
    gameGrid.forEach((box)=>{
        if(box!=""){
            fillCount++
        }
    })

    //Board is filled , Game is tie
    if(fillCount==9){
        gameInfo.innerText="Game is Tie !"
        newGameBtn.classList.add("active")
    }
}

function handleClick(index){
    if(gameGrid[index]==""){
        boxes[index].innerText=currentPlayer
        gameGrid[index]=currentPlayer

        //when a box is clicked then remove the cursor pointer
        boxes[index].style.pointerEvents='none'
        // swap player
        swapTurn()
        //check if someone won
        checkGameOver()
    }
}

boxes.forEach((box, index)=>{
    box.addEventListener('click', ()=>{
        handleClick(index)
    })
})

newGameBtn.addEventListener('click', initGame)