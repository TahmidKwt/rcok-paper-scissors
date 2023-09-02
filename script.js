const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const result = document.querySelector(".round-result");
const winner = document.querySelector(".game-result");
const pscore = document.querySelector(".player-score");
const cscore = document.querySelector(".computer-score");
const reset = document.querySelector(".reset-game");

rock.addEventListener("click", () => playRound("ROCK"));
paper.addEventListener("click", () => playRound("PAPER"));
scissors.addEventListener("click", () => playRound("SCISSORS"));
reset.addEventListener("click", () => resetGame);

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomize = Math.floor(Math.random() * choices.length);

  return choices[randomize];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    
    result.innerHTML = "Result: It's a tie.";
    
  } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
    
    result.textContent = `Result: You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    cscore.textContent = `Computer Score: ${computerScore}`;
  
  } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
    
    result.textContent = `Result: You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    pscore.textContent = `Player Score: ${playerScore}`;
    
  }

  if (computerScore === 5) {
    winner.textContent = "Game Over! Computer is the Winner!";
  } else if (playerScore === 5) {
    winner.textContent = "Game Over! You are the Winner!";
  }
}

