const startGameBtn = document.getElementById('start_game_btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  // validation
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    // negative case
    alert(`Invalid Choice! We choose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

// function getPlayerChoice() {}

startGameBtn.addEventListener('click', function () {
  console.log('Game is starting .....');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
