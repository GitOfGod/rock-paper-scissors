let humanScore = 0;
let computerScore = 0;
const result = document.querySelector('#result');
const displayHumanScore = document.querySelector('.human .score');
const displayComputerScore = document.querySelector('.computer .score');


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
}

// Rock button event listener
const rockButton = document.body.querySelector("#rock");
rockButton.addEventListener("click", () => playRound('rock'));

// Paper button event listener
const paperButton = document.querySelector("#paper");
paperButton.addEventListener('click', () => playRound('paper'));

// Scissors button event listener
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener('click', () => playRound('scissors'));

function displayWinner() {
    if (humanScore > computerScore ) {
        console.log("You win!");
    } else if (humanScore == computerScore) {
        console.log("Its a draw! Try Again!")
    } else {
        console.log("Computer wins! Better luck next time");
    }
}


function playGame() {
    displayWinner();

    
}



playGame();