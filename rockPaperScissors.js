// 1 = ROCK 2 = PAPER 3 = SCISSORS
const startGame = document.getElementById("startGame");
const rock = document.getElementById("rockGame");
const paper = document.getElementById("paperGame");
const scissors = document.getElementById("scissorsGame");
const roundWin = document.getElementById("roundWin");

let rockClick = 0;
let paperClick = 0;
let scissorsClick = 0;
let cpuChoice = 0;
let playerCounter = 0;
let roundCount = 0;
let tieCount = 0


startGame.addEventListener("click", starting);


rock.addEventListener("click", rockFunc)
paper.addEventListener("click", paperFunc)
scissors.addEventListener("click", rockFunc)


function starting() {
    rock.style.visibility = "visible";
    paper.style.visibility = "visible";
    scissors.style.visibility = "visible";
    startGame.style.visibility = "hidden";
    roundCount = 0;
    tieCount = 0;
}

function rockFunc() {
    cpuChoice = getRandomInt(1, 3);
    ++roundCount;
    if (roundCount > 5) {
        declareWinner();
    }else if (cpuChoice == 3){
        ++playerCounter;
        roundWin.innerHTML = "Your Rock beats their Scissors, YOU WIN ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }else if (cpuChoice == 1){
        ++tieCount;
        roundWin.innerHTML = "You both chose Rock, YOU TIE ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }else {
        roundWin.innerHTML = "Your rock was beaten by their paper, YOU LOSE ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }
}
function paperFunc() {
    ++roundCount;
    cpuChoice = getRandomInt(1, 3);
    if (roundCount > 5) {
        declareWinner();
    }else if (cpuChoice == 1){
        ++playerCounter;
        roundWin.innerHTML = "Your Paper beats their Rock, YOU WIN ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }else if (cpuChoice == 2){
        ++tieCount;
        roundWin.innerHTML = "You both chose Paper, YOU TIE ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }else {
        roundWin.innerHTML = "Your Paper was beaten by their Scissors, YOU LOSE ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }
}
function scissorsFunc() {
    ++roundCount;
    cpuChoice = getRandomInt(1, 3);
    
    if (roundCount > 5) {
        declareWinner();
    }else if ( cpuChoice == 2){
        ++playerCounter;
        roundWin.innerHTML = "Your Scissors beats their Paper, YOU WIN ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }else if (cpuChoice == 3){
        ++tieCount;
        roundWin.innerHTML = "You both chose Scissors, YOU TIE ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }else {
        roundWin.innerHTML = "Your Scissors was beaten by their Rock, YOU LOSE ROUND: " + roundCount;
        roundWin.style.visibility = "visible";
        return;
    }
}

function declareWinner() {
    rock.style.visibility = "hidden";
    paper.style.visibility = "hidden";
    scissors.style.visibility = "hidden";
    startGame.style.visibility = "visible";
    if (playerCounter >= 3) {
        roundWin.innerHTML = "YOU WIN";
    }else if (tieCount >= 3) {
        roundWin.innerHTML = "YOU TIE";
    }else {
        roundWin.innerHTML = "YOU LOSE";
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}