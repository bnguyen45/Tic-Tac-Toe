//Grab all elements to be interacted with 
const boxElements = document.querySelectorAll(".box");
const gameBoardElement = document.querySelector(".game-board");
const restartButton = document.querySelector(".restartButton");

//Make playerOne start as first
let playerTurn = false;



//Create Players for Game
const playerOne = "blue";
const playerTwo = "red";

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
    playerTurn = false; // Default to playerOne Start as X
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
    const currentPlayer = playerTurn ? playerTwo : playerOne; // if playerTwoTurn = True , return playerTwo, otherwise return playerOne

    //Create x or o and check for winning conditions
    createCharacter(box, currentPlayer)//Makes x or o
    if (winnerCheck(currentPlayer)){ // Check if current player has winningStates for any row, call gameEnd Function
        gameEnd(false); // if no winners yet gameEnd Function is false
    }else if (drawGame()){ //  drawGame function executes a check of the array if a draw
        gameEnd(true);// if its a draw or a winner is declared, gameEnd is true and executes
    }else{
        switchPlayers();//switch players if game doesnt end
    }

}

//Create createCharacter Function
function createCharacter(box, currentPlayer) { // adds blue or red to the box element
    box.classList.add(currentPlayer);
}

//Create winnerCheck Function
function winnerCheck(currentPlayer){
    return winningStates.some(state =>{ //Checks for atleast one combination is matched(some method)
        return state.every(i =>{ // Checks for every box that would match atleast one winningState (every method)
            return boxElements[i].classList.contains(currentPlayer);
        })
    })
}


//Create gameEnd Function
function gameEnd(draw) {
    if (draw) {
        alert("It's a Draw!");
    }else{
        alert(`${playerTurn ? "Player 2 Wins" : "Player 1 Wins"}`);
    }
}

//Create drawGame Function
function drawGame(){
    return [...boxElements].every(box => { // Checks for every box (every method)
        return box.classList.contains(playerOne) || box.classList.contains(playerTwo); // returns the current layout of the boxes to see if its a draw 
    })
}


//Create switchPlayers Function
function switchPlayers(){
    playerTurn = !playerTurn;
}