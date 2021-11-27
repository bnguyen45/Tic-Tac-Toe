//Grab all elements to be interacted with 
const boxElements = document.querySelectorAll(".box");
const gameBoardElement = document.querySelector(".game-board");
const restartButton = document.querySelector(".restartButton");

//Make playerOne start as first
let playerTwoTurn = false



//Create Players for Game
const playerOne = "x";
const playerTwo = "o";

//Create Winning Conditions for Board // Each array represents a row on the board
const winningStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//Create a Start Game Function and for restart Button

restartButton.addEventListener("click", gameStart)

function gameStart(){
    playerTwoTurn = false; // Default to playerOne Start as X
    boxElements.forEach(box =>{
        box.classList.remove(playerOne);//remove all previous players from last game
        box.classList.remove(playerTwo);
        box.removeEventListener("click", clickedBox); // remove previous clicked boxes 
        box.addEventListener("click", clickedBox, {once: true}); // Makes sure the click event only happens once per click

    })
}