//GET COMPUTER SELECTION
//create array with 3 items r p s
//make a function compplay that will randomly chose one of these
//make function return the string r p s
const rps = ["rock", "paper", "scissors"];
function computerPlay() {
    let compChoice = (rps[Math.floor(Math.random() * rps.length)]);
    console.log("comp: " + compChoice);
    return(compChoice);
}

//GET PLAYER SELECTION
function playersPlay() {
playerChoice = prompt("Choose 1: Rock, paper or scissors?");
playerSelection = playerChoice.toLowerCase();
console.log("player:" + playerSelection);
return(playerSelection);
}

//PLAY ONE GAME OF RPS
let computerSelection;
let playerSelection;

function rockPaperGame(computerSelection, playerSelection) {
//make variables to store function results
computerSelection = computerPlay();
playerSelection = playersPlay();

    if (computerSelection === playerSelection) {
        console.log("its a draw");
        return("draw");
    }if ((computerSelection === "rock") && (playerSelection === "scissors")){
        console.log("computer wins");
        return("comp wins");
    }else if (computerSelection === "paper" && playerSelection === "rock"){
        console.log("computer wins");
        return("comp wins");
    }else if (computerSelection === "scissors" && playerSelection === "paper"){
        console.log("computer wins");
        return("comp wins");
    }else {
        console.log("player wins");
        return("player wins");
    }
   
}

//CREATE SCOREKEEPER FUNCTION
//create variable compscore and playerscore = 0 and gameresult
//play one game of rps which returns play or comp wins
//the function has to take the return of the game (gameresult) as an arguement
// make gameresult = rps()
//if return from game is comp wins compscore++1
//if return from game is player wins playerscore++1
//if return draw consolelog its a draw and current score 
//consolog the score after each round

let compScore = 0;
let playerScore = 0;
let gameResult;

function scoreKeeper(gameResult) {
compScore;
playerScore;
    gameResult = rockPaperGame(computerSelection, playerSelection);
    if(gameResult === "comp wins") {
        ++compScore;
        console.log("1computerscore is: " + compScore + " playerscore is: " + playerScore);
        return(compScore);
    } else if (gameResult === "player wins") {
        ++playerScore;
        console.log("2computerscore is: " + compScore + " playerscore is: " + playerScore);
        return(playerScore);
    } else {
        console.log("3computerscore is: " + compScore + " playerscore is: " + playerScore);
        return("draw");}
    //else {
    //    console.log("error with scorekeeper function");
    //}
}

//create function finalscore (have compScore and playerscore as args)
//run scorekeeper (this runs the game )
// ifcompscore>playerscore consolelog final score : compscore is ... player is ....COMP WINS
// if compscore<playerscore consolelog final score : compscore is ... player is ....PLAYER WINS
// if compscoe=== playerscore consolelog final score is a draw



function finalScore(compScore, playerScore) {
    if (compScore > playerScore) {
        console.log("finalL score: computer score is " + compScore + " player score is " + playerScore + ". COMPUTER WINS");
    }else if(compScore < playerScore) {
        console.log("final score: computer score is " + compScore + " player score is " + playerScore + ". PLAYER WINS");
    } else if (compScore === playerScore) {
        console.log("final score: computer score is " + compScore + " player score is " + playerScore + ". IT'S A DRAW");
    }else {
        console.log("error in the final score function");
    }
}

//RUN THE GAME FIVE TIMES
function gameFive() {
scoreKeeper(gameResult); 
finalScore(compScore, playerScore);
scoreKeeper(gameResult); 
finalScore(compScore, playerScore);
scoreKeeper(gameResult); 
finalScore(compScore, playerScore);
scoreKeeper(gameResult); 
finalScore(compScore, playerScore);
scoreKeeper(gameResult); 
finalScore(compScore, playerScore);
}

gameFive();