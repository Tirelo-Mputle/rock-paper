
//Write a NEW function called game(). 
//Use the previous function inside of this one to play a 5 round game 
//create variables for comp and for player
//put result for return as an addtion to the variable comp/player
//compare comp to player score
//highest number is winner
//reports a winner or loser at the end. 
let playerScore = 0;
let compScore = 0;

// create a function to keep score after each round
// function need the playerscore and the compscore
//
function scoreKeeper() {
    if (rockPaperGame() === "player wins"){
        playerScore = ++playerScore;
        console.log(playerScore);
    } else if (rockPaperGame() === "comp wins") {
        compScore = ++compScore;
        console.log(compScore);
    } else {
        return("draw");
    }
 
}

function finalScore(playerScore, compScore) {
    if (playerScore > compScore) {
        alert("The game winner is: Player");
    } else if (playerScore < compScore)  {
        alert("The game winner is: Computer");
    } else {
        alert("It's a draw");
    }
}

function game() {
    rockPaperGame(computerSelection, playerSelection);
    scoreKeeper();
    finalScore(playerScore, compScore);
}

game();