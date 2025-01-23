console.log("Hello User!");
const player_score = document.getElementById("player-score-span");
const computer_score = document.getElementById("computer-score-span");
const Result = document.getElementById("result");

document.getElementById("rock").addEventListener("click", () => playGame("rock"))

document.getElementById("paper").addEventListener("click", () => playGame("paper"))

document.getElementById("scissor").addEventListener("click", () => playGame("scissor"))

const choices = ["rock", "paper", "scissor"];

function playGame(player_choice) {
    var computer_choice = choices[Math.floor(Math.random()*3)];
    let winner = findWinner(player_choice, computer_choice);
    displayWinner(winner, player_choice, computer_choice);
}

function findWinner(player_choice, computer_choice) {
    if(player_choice==="rock" && computer_choice==="scissor"|| player_choice==="paper" && computer_choice==="rock" || player_choice==='scissor' && computer_choice==="paper")
        return "player";
    else if(player_choice===computer_choice) return "draw";
    else return "computer";
}

function displayWinner(winner, player_choice, computer_choice) {
    if(winner==="player") {
        player_score.innerHTML++;
        Result.innerHTML = `Player : ${player_choice} <br> Computer : ${computer_choice}<br>Player Beats Computer!!!`;
    }
    else if(winner==="computer") {
        computer_score.innerHTML++;
        Result.innerHTML = `Player : ${player_choice} <br> Computer : ${computer_choice}<br>Computer Beats Player!!!`
    }
    else {
        Result.innerHTML = `Player : ${player_choice} <br> Computer : ${computer_choice}<br>Draw!!!`
    }
}
