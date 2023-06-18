// eslint-disable-next-line prettier/prettier
import * as players from "./DOM";
import * as logic from "./logic";

let opponentBoard = players.opponentBoard;
let playerBoard = players.playerBoard;

const opponentGrid =
  document.body.children[1].children[0].children[1].children[1].children[1];
const playerGrid =
  document.body.children[1].children[0].children[0].children[1].children[1];

function randomePlay(anyBoard) {
  const newBoard = [];
  // Saves all coordinates which lengths are beyond 0 on the newBoard array.
  for (let i = 0; i < anyBoard.board.length; i += 1) {
    for (let j = 0; j < anyBoard.board[i].length; j += 1) {
      if (anyBoard.board[i][j].length > 0) {
        newBoard.push(anyBoard.board[i][j]);
      }
    }
    // Saves all coordinates of the ships on the newBoard array if such coordinates have not been hit
    for (let j2 = 0; j2 < anyBoard.ships[i][1].length; j2 += 1) {
      newBoard.push(anyBoard.ships[i][1][j2]);
    }
  }
  // Then selects a random coordinate from the new array
  return newBoard[Math.floor(Math.random() * newBoard.length)];
}

function playerGridFlow(pBoard, oBoard){
  // Spot all missed attacks
  const playerTable = document.querySelector(".playerGrid");
  for (let i = 0; i < pBoard.missedShot.length; i += 1) {
    const ms1 = pBoard.missedShot[i][0];
    const ms2 = pBoard.missedShot[i][1];
    const selection = playerTable.childNodes[ms1].childNodes[ms2];
    selection.classList.add("missed2");
  }
  // Spot all achieved attacks
  for (let i = 0; i < pBoard.ships.length; i += 1) {
    for (let j = 0; j < pBoard.ships[i][0].hitsrecord.length; j += 1) {
      const ms1 = pBoard.ships[i][0].hitsrecord[j][0];
      const ms2 = pBoard.ships[i][0].hitsrecord[j][1];
      const selection = playerTable.childNodes[ms1].childNodes[ms2];
      selection.classList.add("sunk");
    }
  }

  if ((oBoard.allShipsSunk === true) || (pBoard.allShipsSunk === true)) {
    console.log(oBoard);
    console.log(pBoard);
  } else {
    setTimeout(() => {playerGridWeak();}, 1000);
  }
}

function opponentGridFlow(e) {
  if (!opponentGrid.classList.contains("weak")) {
    const field = e.target.dataset.field2.split("");
    if (field.length === 3) {
      e.target.classList.add("missed");
      setTimeout(() => {
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
        const sunkWeak = document.getElementsByClassName("sunk");
        // Most efficient way to convert an HTMLCollection to an Array
        const arrNotsunkWeak = [].slice.call(notSunkWeak);
        arrNotsunkWeak.forEach((el) => {
          el.classList.remove("notSunkWeak");
          el.classList.add("notSunk");
        });

        const arrSunkWeak = [].slice.call(sunkWeak);
        arrSunkWeak.forEach((el) => {
          el.classList.remove("sunk");
          el.classList.add("sunkWeak");
        });

        const missed = document.getElementsByClassName("missed");
        const arrMissed = [].slice.call(missed);
        arrMissed.forEach((el) => {
        el.classList.replace("missed","missedWeak");
        });

        const missedWeak2 = document.getElementsByClassName("missedWeak2");
        const arrMissedWeak2 = [].slice.call(missedWeak2);
        arrMissedWeak2.forEach((el) => {
        el.classList.replace("missedWeak2","missed2");
       });

      }, 100);
      if ((opponentBoard.allShipsSunk === true) || (playerBoard.allShipsSunk === true)) {
        console.log(opponentBoard);
        console.log(playerBoard);
        return;
      }
      // Update playerBoard on each turn
      playerBoard = logic.receiveAttack(randomePlay(playerBoard), playerBoard);
      // PC turn will be reflected on the DOM
      setTimeout(() => {playerGridFlow(playerBoard, opponentBoard)},2000);
    }
    if (field.length === 2) {
      const attack = [+field[0], +field[1]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      e.target.classList.add("sunk");
    }
  }
}
opponentGrid.addEventListener("click", opponentGridFlow);

function playerGridWeak(){
  // hide player's grid;
  const playerGridDOM = document.querySelector(".playerGrid");
  playerGridDOM.classList.add("weak");
  const rowIndex1 = document.querySelector(".rowIndex1");
  const playerContainer2 = document.querySelector(".playerContainer2");
  rowIndex1.parentNode.classList.add("playerIndex1");
  playerContainer2.childNodes[0].classList.add("playerIndex2");
  const notSunk = document.getElementsByClassName("notSunk");
  const arrNotsunk = [].slice.call(notSunk);
  arrNotsunk.forEach((el) => {
    el.classList.remove("notSunk");
    el.classList.add("notSunkWeak");
  });
  // Open opponent's grid
  opponentGrid.classList.remove("weak");
  const opponentIndex2 = opponentGrid.parentNode.children[0];
  opponentIndex2.classList.remove("opponentIndex2");
  const opponentIndex1 = opponentGrid.parentNode.parentNode.children[0];
  opponentIndex1.classList.remove("opponentIndex1");
  const sunkWeak = document.getElementsByClassName("sunkWeak");
  const arrSunkWeak = [].slice.call(sunkWeak);
  arrSunkWeak.forEach((el) => {
    el.classList.remove("sunkWeak");
    el.classList.add("sunk");
  });

  const missedWeak = document.getElementsByClassName("missedWeak");
  const arrMissedWeak = [].slice.call(missedWeak);
  arrMissedWeak.forEach((el) => {
  el.classList.replace("missedWeak","missed");
  });

  const missed2 = document.getElementsByClassName("missed2");
  const arrMissed2 = [].slice.call(missed2);
  arrMissed2.forEach((el) => {
  el.classList.replace("missed2","missedWeak2");
  });
}