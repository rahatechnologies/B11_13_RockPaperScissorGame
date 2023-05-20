const startGameBtn = document.getElementById('start_game_btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const PLAYER_WINS = 'WINS';
const PLAYER_LOST = 'LOST';

let isGameRunning = false;
// function expression
const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  // User input validation
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    // negative case
    alert(`Invalid Choice! We choose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Function declaration
// function getWinner (cChoice, pChoice) {
// }

// Function expression
// const getWinner = function (cChoice, pChoice) {

//  Arrow function

const add = (a, b) => a + b;

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? PLAYER_WINS
    : PLAYER_LOST;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   // || logical or
//   // && logical and
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return PLAYER_WINS;
// } else {
//   return PLAYER_LOST;
// }
// };

startGameBtn.addEventListener('click', function () {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('Game is starting .....');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});
