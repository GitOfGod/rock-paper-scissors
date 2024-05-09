function getComputerChoice () {
    choice = "";
    number = Math.random()*100;
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