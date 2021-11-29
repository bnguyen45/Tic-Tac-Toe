//Grab all elements to be interacted with 
const boxElements = document.querySelectorAll(".box");
const gameBoardElement = document.querySelector(".game-board");
const restartButton = document.querySelector(".restartButton");

//Make playerOne start as first
let playerTwoTurn = false;



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
];

//Create a Start Game Function and for restart Button
restartButton.addEventListener("click", gameStart)

gameStart();//Start Game

function gameStart(){
    playerTwoTurn = false; // Default to playerOne Start as X
    boxElements.forEach(box =>{
        box.classList.remove(playerOne);//remove all previous players from last game
        box.classList.remove(playerTwo);
        box.removeEventListener("click", clickedBox); // remove previous clicked boxes 
        box.addEventListener("click", clickedBox, {once: true}); // Makes sure the click event only happens once per click

    })
};

//Create function for each clicked box
function clickedBox(event){
    const box = event.target; // target each clicked box
    const currentPlayer = playerTwoTurn ? playerTwo : playerOne; // if playerTwoTurn = True , return playerTwo, otherwise return playerOne

    //Create x or o and check for winning conditions
    createCharacter(box, currentPlayer)
    if (winnerCheck(currentPlayer)){ // Check if current player has winningStates for any row, call gameEnd Function
        gameEnd(false); // if no winners yet gameEnd Function is false
    }else if (drawGame()){ //  drawGame function executes a check of the array if a draw
        gameEnd(true);// if its a draw or a winner is declared, gameEnd is true and executes
    }else{
        switchPlayers();
    }

}

//Create gameEnd Function
function gameEnd(draw) {
    if (draw) {
        alert("It's a Draw!");
    }else{
        alert(`${playerTwoTurn ? "Player 2 Wins" : "Player 1 Wins"}`);
    }
}

//Create drawGame Function
function drawGame(){
    return winningStates.every(box => {
        return box.classList.contains(playerOne) || box.classList.contains(playerTwo);
    })
}

//Create createCharacter Function




//Create switchPlayers Function