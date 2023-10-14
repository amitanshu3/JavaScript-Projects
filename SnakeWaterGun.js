
function snakeWaterGunGame() {
  const options = ["snake", "water", "gun"];
  let playerScore = 0;
  let computerScore = 0;

  while (true) {
    const computerChoice = options[Math.floor(Math.random() * 3)];

    const playerChoice = prompt("Enter your choice: snake, water, or gun:");
    if (!options.includes(playerChoice)) {
      alert("Invalid input. Please try again.");
      continue;
    }

    alert(`Computer chose: ${computerChoice}`);
    alert(`You chose: ${playerChoice}`);

    const result = playRound(playerChoice, computerChoice);

    if (result === "You win!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }

    alert(`Score - You: ${playerScore}, Computer: ${computerScore}`);

    const playAgain = confirm("Do you want to play again?");
    if (!playAgain) {
      break;
    }
  }

  if (playerScore > computerScore) {
    alert("You won the game!");
  } else if (playerScore < computerScore) {
    alert("Computer won the game!");
  } else {
    alert("It's a tie!");
  }
}

function playRound(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "snake" && computer === "water") ||
    (player === "water" && computer === "gun") ||
    (player === "gun" && computer === "snake")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

snakeWaterGunGame();
