const buttonScissors = document.getElementById("buttonScissors");
let result = document.getElementById("result");
let buttonReset = document.getElementById("buttonReset");
let roundsPlayed = 0;
let gamePointPlayer = 0;
let gamePointComputer = 0;

function computerChoice() {
  const gameChoose = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * gameChoose.length);
  return gameChoose[choice];
}

function playGame(playerChoice) {
  if (roundsPlayed >= 5) {
    alert("to play again please click restart");
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
    gamePointPlayer++;
  } else {
    result.textContent = `you lose ${computer} beats ${playerChoice} `;
    gamePointComputer++;
  }
  roundsPlayed++; // Increment the round counter after each game

  if (roundsPlayed === 5) {
    result.textContent = "Press the   reset button to play again.";

    alert(`Game over: ${showGameWinner()}`);
  }
}
function resetGame() {
  roundsPlayed = 0;
  gamePointPlayer = 0;
  gamePointComputer = 0;
  result.textContent = "";
}
function showGameWinner() {
  let winner =
    gamePointPlayer > gamePointComputer ? "Player Winner" : "Computer Winner";
  return winner;
}

buttonRock.addEventListener("click", () => playGame("rock"));
buttonPaper.addEventListener("click", () => playGame("paper"));
buttonScissors.addEventListener("click", () => playGame("scissors"));
buttonReset.addEventListener("click", resetGame);
