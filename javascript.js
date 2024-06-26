let humanScore = 0;
let computerScore = 0;
const result = document.querySelector('#result');
const displayHumanScore = document.querySelector('.human .score');
const displayComputerScore = document.querySelector('.computer .score');


const rockButton = document.body.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


function getComputerChoice() {
    let choice = "";
    let number = Math.round(Math.random()*100);
    if (number < 33) {
        choice = "rock";
    } else if (number > 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;

}


function playRound(humanChoice) {
    let computerChoice= getComputerChoice();
    

    if (humanChoice == computerChoice) {
        result.textContent = "No one wins! Its a draw!";

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        result.textContent = "You win! Rock beats Scissors";
        humanScore++;
        displayHumanScore.textContent = humanScore;

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        result.textContent = "You win! Paper beats Rock";
        humanScore++;
        displayHumanScore.textContent = humanScore;

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        result.textContent ="You win! Scissors beats Paper";
        humanScore++;
        displayHumanScore.textContent = humanScore;

    } else {
        result.textContent = "Computer wins! Better luck next time!";
        computerScore++;
        displayComputerScore.textContent = computerScore;
    }
    checkGameStatus();
}

function playRock() {
    playRound("rock");
}

function playScissors() {
    playRound("scissors");
}

function playPaper() {
    playRound("paper"); 
}


function displayWinner() {
    if (humanScore > computerScore ) {
        result.textContent = "You win!";
    } else if (humanScore == computerScore) {
        result.textContent = "Its a draw! Try Again!";
    } else {
        result.textContent = "Computer wins! Better luck next time";
    }
}

function addEventListeners() {
     // Rock button event listener
     rockButton.addEventListener("click", playRock);

     // Paper button event listener
     paperButton.addEventListener('click', playPaper);

     // Scissors button event listener
     scissorsButton.addEventListener('click', playScissors);
}

function removeEventListeners() {
    rockButton.removeEventListener("click", playRock);
    paperButton.removeEventListener('click', playPaper);
    scissorsButton.removeEventListener('click', playScissors);

    
}

function checkGameStatus() {
    if(humanScore >= 5 || computerScore >= 5) {
        removeEventListeners();
        displayWinner();
    }
}

function playGame() {
    addEventListeners();
}



playGame();