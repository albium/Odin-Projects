let buttonRock = document.getElementById("buttonRock");
let buttonPaper = document.getElementById("buttonPaper");
let buttonScissors = document.getElementById("buttonScissors");
let result = document.getElementById("result");
let buttonReset = document.getElementById("buttonReset");
let roundsPlayed = 0;

function computerChoice() {
  const gameChoose = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * gameChoose.length);
  return gameChoose[choice];
}

function playGame(playerChoice) {
  if (roundsPlayed >= 5) {
    alert("Game over! You played 5 rounds.");
    return; // Stop the game after 5 rounds
  }
  const computer = computerChoice();

  if (playerChoice === computer) {
    result.textContent = `it's a tie play chose ${playerChoice}`;
  } else if (
    (playerChoice === "rock" && computer === "scissors") ||
    (playerChoice === "paper" && computer === "rock") ||
    (playerChoice === "scissors" && computer === "paper")
  ) {
    result.textContent = `you win ${playerChoice} beats ${computer}`;
  } else {
    result.textContent = `you lose ${computer} beats ${playerChoice} `;
  }
  roundsPlayed++; // Increment the round counter after each game

  if (roundsPlayed === 5) {
    alert("Game over! You played 5 rounds.");
  }
}
function resetGame() {
  roundsPlayed = 0;
  result.textContent = "Game reset! Press a button to play again.";
}

buttonRock.addEventListener("click", () => playGame("rock"));
buttonPaper.addEventListener("click", () => playGame("paper"));
buttonScissors.addEventListener("click", () => playGame("scissors"));
buttonReset.addEventListener("click", resetGame);
