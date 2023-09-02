
document.querySelector(".rock-btn").addEventListener("click", () => playRound("ROCK"));
document.querySelector(".paper-btn").addEventListener("click", () => playRound("PAPER"));
document.querySelector(".scissors-btn").addEventListener("click", () => playRound("SCISSORS"));
document.querySelector(".reset-btn").addEventListener("click", () => resetGame());

function getComputerChoice() {

	const choices = ["ROCK", "PAPER", "SCISSORS"];
	const randomize = Math.floor(Math.random() * choices.length);
	return choices[randomize];

}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  
	let computerSelection = getComputerChoice();
	document.getElementById("comp-choice").textContent = ` ${computerSelection} `;
	document.getElementById("player-choice").textContent = ` ${playerSelection} `;
  
	if (playerSelection === computerSelection) {
    
		document.getElementById("round-result").textContent = "It's a tie.";
    
	} else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
    
		document.getElementById("round-result").textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
		computerScore++;
		document.getElementById("comp-score").textContent = ` ${computerScore} `;
  
	} else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
    
		document.getElementById("round-result").textContent = `You win! ${playerSelection} beats ${computerSelection}`;
		playerScore++;
		document.getElementById("player-score").textContent = ` ${playerScore} `;
  
	}

	gameEnd();
  
}

document.querySelector(".rock-btn").disabled = false;
document.querySelector(".paper-btn").disabled = false;
document.querySelector(".scissors-btn").disabled = false;

function gameEnd() {

        if (computerScore === 5) {

		document.getElementById("game-result").textContent = "Computer is the Winner!";	
		document.querySelector(".rock-btn").disabled = true;
		document.querySelector(".paper-btn").disabled = true;
		document.querySelector(".scissors-btn").disabled = true;

	} else if (playerScore === 5) {

		document.getElementById("game-result").textContent = "You are the Winner!";
		document.querySelector(".rock-btn").disabled = true;
		document.querySelector(".paper-btn").disabled = true;
		document.querySelector(".scissors-btn").disabled = true;

	}

}

gameEnd();

function resetGame() {

	playerScore = 0;
	computerScore = 0;

	document.getElementById("player-score").textContent = `${playerScore}`;
	document.getElementById("comp-score").textContent = `${computerScore}`;
   
	document.querySelector(".rock-btn").disbled = false;
	document.querySelector(".paper-btn").disabled = false;
	document.querySelector(".scissors-btn").disabled = false;

}
