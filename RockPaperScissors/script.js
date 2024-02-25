function getComputerInput() {
  const options = ["rock", "paper", "scissors"];
  const r = Math.floor(Math.random() * options.length);
  return options[r];
}

const player_input = prompt("It's your turn");
player_input.toLowerCase();
const computer_input = getComputerInput();

if (player_input == "rock") {
  if (computer_input == "scissors") {
    console.log(`You win,${player_input} beats ${computer_input}`);
  } else if (player_input == computer_input) {
    console.log(`It\'s a tie`);
  } else {
    console.log(`You lose,${computer_input} beats ${player_input}`);
  }
} else if (player_input == "paper") {
  if (computer_input == "rock") {
    console.log(`You win,${player_input} beats ${computer_input}`);
  } else if (player_input == computer_input) {
    console.log(`It\'s a tie`);
  } else {
    console.log(`You lose,${computer_input} beats ${player_input}`);
  }
} else if (player_input == "scissors") {
  if (computer_input == "paper") {
    console.log(`You win,${player_input} beats ${computer_input}`);
  } else if (player_input == computer_input) {
    console.log(`It\'s a tie`);
  } else {
    console.log(`You lose,${computer_input} beats ${player_input}`);
  }
}
