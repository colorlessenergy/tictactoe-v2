/*
  logic for the game tic tac toe

  * addeventlisteners that manipulates every box
  * check win conditions
*/

let boxes = document.querySelectorAll('.box');
let tictactoeState = [];
let currentPlayer = 'X';

boxes.forEach(function (box) {
  box.addEventListener('click', playerLogic);
});

/*
  updates the state of the game with the move that was made
  changes the players turn

  @param  {object} event box the user clicked on
*/

function playerLogic (event) {
  // need this because it will break
  // the removeeventlistener from functioning properly
  event.stopPropagation();


  // store the move that was made into an array
  let boxPosition = event.currentTarget.dataset.position;
  tictactoeState[boxPosition] = currentPlayer;

  // edit the box to show the move that was made

  event.currentTarget.textContent = currentPlayer;

  // checking whos turn it is then reversing the output
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  winner();

  event.currentTarget.removeEventListener('click', playerLogic);
}

/*
  checks who won the game by the tictactoe rules

*/

let displayWinner = document.querySelector('#display-winner');
function winner () {
  // check if there are any horizontal winners
  for (let i = 0; i < tictactoeState.length; i += 3) {
    if (tictactoeState[i] === 'X' &&
        tictactoeState[i + 1] === 'X' &&
        tictactoeState[i + 2] === 'X' ||
        tictactoeState[i] === 'O' &&
        tictactoeState[i + 1] === 'O' &&
        tictactoeState[i + 2] === 'O') {
         return displayWinner.textContent = tictactoeState[i] + ' is the winner WOOO';
      }
  }

  // check if there are any vertical winners
  for (let i = 0; i < tictactoeState.length; i += 3) {
    if (tictactoeState[i] === 'X' &&
        tictactoeState[i + 3] === 'X' &&
        tictactoeState[i + 6] === 'X' ||
        tictactoeState[i] === 'O' &&
        tictactoeState[i + 3] === 'O' &&
        tictactoeState[i + 6] === 'O') {
         return displayWinner.textContent = tictactoeState[i] + ' is the winner WOOO';
      }
  }

  // hardcoded diagnoals


  // Left to right

  if (tictactoeState[0] === 'X' &&
      tictactoeState[4] === 'X' &&
      tictactoeState[8] === 'X' ||
      tictactoeState[0] === 'O' &&
      tictactoeState[4] === 'O' &&
      tictactoeState[8] === 'O') {
        return displayWinner.textContent = tictactoeState[0] + ' is the winner WOOO';
      }

    // right to left

    if (tictactoeState[2] === 'X' &&
      tictactoeState[4] === 'X' &&
      tictactoeState[6] === 'X' ||
      tictactoeState[2] === 'O' &&
      tictactoeState[4] === 'O' &&
      tictactoeState[6] === 'O') {
        return displayWinner.textContent = tictactoeState[2] + ' is the winner WOOO';
    }
}