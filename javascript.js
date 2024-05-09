let humanScore = 0;
let computerScore = 0;
function getComputerChoice () {
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

function getHumanChoice () {
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
    }
    return choice;
}



console.log(getComputerChoice());
console.log(getHumanChoice());