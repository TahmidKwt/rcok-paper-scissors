let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissors = document.querySelector(".scissors-btn");
let result = document.querySelector(".round-result");
let winner = document.querySelector(".game-result");
let pscore = document.querySelector(".player-score");
let cscore = document.querySelector(".computer-score");
let reset = document.querySelector(".reset-btn");
let rule = document.getElementById("game-rule");

rock.addEventListener("click", () => playRound("ROCK"));
paper.addEventListener("click", () => playRound("PAPER"));
scissors.addEventListener("click", () => playRound("SCISSORS"));

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
  
	if ((computerScore === 5) || (playerScore === 5)) {
	  
		gameEnd();
	}
}

function gameEnd() {

	rule.style.display = "none";
	result.style.display = "hiddden";

        if (computerScore === 5) {
		winner.textContent = "Game Over! Computer is the Winner!" 
	} else if (playerScore === 5) {
		winner.textContent = "Game Over! You are the Winner!";
	}

	playerScore = 0;
	computerScore = 0;

	pscore.textContent = `Player Score: ${playerScore}`;
	cscore.textContent = `Computer Score: ${computerScore}`;
}
   
reset.addEventListener("click", gameEnd);
