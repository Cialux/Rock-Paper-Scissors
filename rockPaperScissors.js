// 1 = ROCK 2 = PAPER 3 = SCISSORS
let userChoice;
let userChoiceConverted;
userChoice = prompt("Rock, Paper or Scissors? ");
userChoice = userChoice.toLowerCase();
let cpuChoice = getRandomInt(1, 3)

if (userChoice == "rock") {
    userChoiceConverted = 1;
}else if (userChoice == "paper"){
    userChoiceConverted = 2;
}else if (userChoice == "scissors"){
    userChoiceConverted = 3;
}else {alert("WRONG INPUT")}
console.log("%i", cpuChoice);
if (userChoiceConverted == cpuChoice){
    console.log("Tied");
}else if (userChoiceConverted == 1 && cpuChoice == 3){
    console.log("You Win!");
}else if (userChoiceConverted == 2 && cpuChoice == 1){
    console.log("You Win!");
}else if (userChoiceConverted == 3 && cpuChoice == 2){
    console.log("You Win!");
}else{
    console.log("You Lose!");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}