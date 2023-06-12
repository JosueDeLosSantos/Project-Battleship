import * as players from "./DOM";
import * as logic from "./logic";

let opponentBoard = players.opponentBoard;
let playerBoard = players.playerBoard;

const opponentGrid =
  document.body.children[1].children[0].children[1].children[1].children[1];
const playerGrid =
  document.body.children[1].children[0].children[0].children[1].children[1];

function randomePlay(board) {
  const newBoard = [];
  // Saves all coordinates which lengths are beyond 0 on the newBoard array.
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j].length > 0) {
        newBoard.push(board[i][j]);
      }
    }
  }
  // Then selects a random coordinate from the new array
  return newBoard[Math.floor(Math.random() * newBoard.length)];
}

function opponentGridFlow(e) {
  if (!opponentGrid.classList.contains("weak")) {
    const field = e.target.dataset.field2.split("");
    if (field.length === 3) {
      // Close the opponent's grid
      const attack = [+field[0], +field[2]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      e.target.classList.add("missedWeak");
      opponentGrid.classList.add("weak");
      const opponentIndex2 = opponentGrid.parentNode.children[0];
      opponentIndex2.classList.add("opponentIndex2");
      const opponentIndex1 = opponentGrid.parentNode.parentNode.children[0];
      opponentIndex1.classList.add("opponentIndex1");
      e.target.dataset.field2 = ".";
      // Open the player's grid
      playerGrid.classList.remove("weak");
      playerGrid.classList.add("playerGrid");
      const playerIndex2 = playerGrid.parentNode.children[0];
      playerIndex2.classList.remove("playerIndex2");
      const playerIndex1 = playerIndex2.parentNode.parentNode.children[0];
      playerIndex1.classList.remove("playerIndex1");
      const notSunkWeak = document.getElementsByClassName("notSunkWeak");
      // Most efficient way to convert an HTMLCollection to an Array
      const arrNotsunkWeak = [].slice.call(notSunkWeak);
      arrNotsunkWeak.forEach((el) => {
        el.classList.remove("notSunkWeak");
        el.classList.add("notSunk");
      });

      const pcPlay = randomePlay(playerBoard.board);
      playerBoard = logic.receiveAttack(pcPlay, playerBoard);
      // setTimeout(() => {playerGridFlow()},1000); pc turn to play ...
    }
    if (field.length === 2) {
      const attack = [+field[0], +field[1]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      e.target.classList.add("sunk");
      // console.log(opponentBoard);
    }
  }
}
opponentGrid.addEventListener("click", opponentGridFlow);
