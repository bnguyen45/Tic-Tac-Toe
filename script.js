//Grab all elements to be interacted with 
const boxElements = document.querySelectorAll(".box");
const restartButton = document.querySelector(".restartButton");
const audio = new Audio("blaster.wav");

//Make playerOne start as first
let playerTurn = false;

//ScoreBoard
let blueScore = 0;
let redScore = 0;


//Create Players for Game
const playerOne = "blue";
const playerTwo = "red";


//Create Winning Conditions for Board // Each array represents a row on the board
const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6]
];

//Create a Start Game Function and for restart Button
restartButton.addEventListener("click", gameStart)

gameStart(); //Start Game

function gameStart() {
    playerTurn = false; // Default to playerOne Start as Blue
    boxElements.forEach(box => {
        box.classList.remove(playerOne); //remove all previous players from last game
        box.classList.remove(playerTwo);
        box.removeEventListener("click", clickedBox); // remove previous clicked boxes 
        box.addEventListener("click", clickedBox, {
            once: true  // Makes sure the click event only happens once per click
        })
        gameBoard.classList.remove("disabledButton");

    })
};

//Create function for each clicked box
function clickedBox(event) {
    audio.play();
    const box = event.target; // target each clicked box
    const currentPlayer = playerTurn ? playerTwo : playerOne; // if playerTurn = True , return playerTwo, otherwise return playerOne
    createCharacter(box, currentPlayer) //Makes blue or red
    if (winnerCheck(currentPlayer)) { // Check if current player has winningStates for any row, call gameEnd Function
        gameEnd(false); // if no winners yet gameEnd Function is false
    } else if (drawGame()) { //  drawGame function executes a check of the array if a draw
        gameEnd(true); // if its a draw or a winner is declared, gameEnd is true and executes
    } else {
        switchPlayers(); //switch players if game doesnt end
    }

}

//Create createCharacter Function
function createCharacter(box, currentPlayer) { // adds blue or red to the box element
    box.classList.add(currentPlayer);
}

//Create winnerCheck Function
function winnerCheck(currentPlayer) {
    return winningStates.some(state => { //Checks for atleast one combination is matched(some method)
        return state.every(i => { // Checks for every box that would match atleast one winningState (every method)
            return boxElements[i].classList.contains(currentPlayer);

        })
    })
}


//Create gameEnd Function
function gameEnd(draw) {
    if (draw) {
        alert("It's a Draw!");
    } else {
    		if(playerTurn) {
        	alert("Red wins")
          redScore += 1;
          console.log(redScore) //display somewhere
          gameBoard.classList.add("disabledButton")
        } else {
        	alert("Blue wins")
          blueScore += 1;
          console.log(blueScore) //display somewhere
          gameBoard.classList.add("disabledButton")
        }
        /* alert(`${playerTurn ? "Player 2 Wins" : "Player 1 Wins"}`); */

    }

}

//Create drawGame Function
function drawGame() {
    return [...boxElements].every(box => { // Put boxElements into a spread Operator => Checks for every box (every method)
        return box.classList.contains(playerOne) || box.classList.contains(playerTwo); // returns the current layout of the boxes to see if its a draw 
    })
}


//Create switchPlayers Function
function switchPlayers() {
    playerTurn = !playerTurn;
}