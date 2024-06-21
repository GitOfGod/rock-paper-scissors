let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = "";
    let number = Math.round(Math.random()*100);
    console.log(number);
    if (number < 33) {
        choice = "rock";
    } else if (number > 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;


}


/*function getHumanChoice () {
    let user_input = prompt("Choose between rock, paper or scissors");
    user_input = user_input.toLowerCase();
    let choice = "";
    switch(user_input) {
        case "rock":
            choice = "rock";
            break;
        case "paper":
            choice = "paper";
            break;
        case "scissors":
            choice = "scissors";
            break;
        default:
            choice = "Choice not available. Pls try again.";
    }
    return choice;
} */

function playRound(humanChoice) {
    let computerChoice= getComputerChoice();
    

    if (humanChoice == computerChoice) {
        console.log("No one wins! Its a draw!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else {
        console.log("Computer wins! Better luck next time!");
        computerScore++;
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


function playGame() {
    /*for (let i = 0; i < 5; i++) {
        computer= getComputerChoice();  
        human = getHumanChoice();
        playRound(human, computer);
    } */

    if (humanScore > computerScore ) {
        console.log("You win!");
    } else if (humanScore == computerScore) {
        console.log("Its a draw! Try Again!")
    } else {
        console.log("Computer wins! Better luck next time");
    }
}



//playGame();