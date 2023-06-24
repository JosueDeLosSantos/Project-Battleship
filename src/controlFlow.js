// eslint-disable-next-line prettier/prettier
import * as players from "./DOM";
import * as logic from "./logic";

let opponentBoard = players.opponentBoard;
let playerBoard = players.playerBoard;

const opponentGrid =
  document.body.children[1].children[0].children[1].children[1].children[1];
const playerGrid =
  document.body.children[1].children[0].children[0].children[1].children[1];


function randomePlay(b) {
  const anyBoard = b;
  const newBoard = [];
  let response = null;
  // Saves all coordinates which lengths are beyond 0 on the newBoard array.
  for (let i = 0; i < anyBoard.board.length; i += 1) {

    for (let j = 0; j < anyBoard.board[i].length; j += 1) {
      if (anyBoard.board[i][j].length > 0) {
        newBoard.push(anyBoard.board[i][j]);
      }
    }
    // Saves all coordinates of the ships on the newBoard array if such coordinates have not been hit
    for (let j = 0; j < anyBoard.ships[i][1].length; j += 1) {
      newBoard.push(anyBoard.ships[i][1][j]);
    }
  }

  // selects a random coordinate from the new array
  response = newBoard[Math.floor(Math.random() * newBoard.length)];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    if ((anyBoard.ships[i][0].hitsrecord.length === 1) &&
    (anyBoard.ships[i][1].length > 0)) {
      response = adjacentMove(anyBoard.ships[i][0].hitsrecord, anyBoard);
    }
  }

  return response;
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
      selection.classList.remove("notSunk");
      selection.classList.add("sunk2");
    }
  }

  if ((oBoard.allShipsSunk === true) || (pBoard.allShipsSunk === true)) {
    console.log(oBoard);
    console.log(pBoard);
  } else {
    setTimeout(() => {playerGridWeak();}, 1000);
  }
}

function opponentGridFlowRefresh(oBoard) {
    // Spot all missed attacks
    const opponentTable = document.querySelector(".opponentGrid");
    for (let i = 0; i < oBoard.missedShot.length; i += 1) {
      const ms1 = oBoard.missedShot[i][0];
      const ms2 = oBoard.missedShot[i][1];
      const selection = opponentTable.childNodes[ms1].childNodes[ms2];
      selection.classList.add("missed");
    }
    // Spot all achieved attacks
    for (let i = 0; i < oBoard.ships.length; i += 1) {
      for (let j = 0; j < oBoard.ships[i][0].hitsrecord.length; j += 1) {
        const ms1 = oBoard.ships[i][0].hitsrecord[j][0];
        const ms2 = oBoard.ships[i][0].hitsrecord[j][1];
        const selection = opponentTable.childNodes[ms1].childNodes[ms2];
        selection.classList.add("sunk");
      }
    }
}

function pcTurn(p, oBoard) {
  let pBoard = p;
  const currentLength = pBoard.missedShot.length;
  let newLength = null;
  // Update playerBoard on each turn
  pBoard = logic.receiveAttack(randomePlay(pBoard), pBoard);
  // PC turn will be reflected on the DOM
  setTimeout(() => {playerGridFlow(pBoard, oBoard)}, 2000);
  newLength = pBoard.missedShot.length;
  if (currentLength === newLength) {
    setTimeout(() => {pcTurn(pBoard, oBoard)}, 500);
  }
  return pBoard;
}

function opponentGridFlow(e) {
  if (!opponentGrid.classList.contains("weak") &&
  !e.target.classList.contains("missed") &&
  !e.target.classList.contains("sunk")) {
    const field = e.target.dataset.field2.split("");
    if (field.length === 3) {
      const attack = [+field[0], +field[2]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      e.target.classList.add("missed");
      opponentGridFlowRefresh(opponentBoard);
      setTimeout(() => {
        // Close the opponent's grid
        opponentGrid.classList.add("weak");
        const opponentIndex2 = opponentGrid.parentNode.children[0];
        opponentIndex2.classList.add("opponentIndex2");
        const opponentIndex1 = opponentGrid.parentNode.parentNode.children[0];
        opponentIndex1.classList.add("opponentIndex1");
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
          el.classList.replace("notSunkWeak","notSunk");
        });

        const arrSunkWeak = [].slice.call(sunkWeak);
        arrSunkWeak.forEach((el) => {
          el.classList.replace("sunk","sunkWeak");
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

       const sunkWeak2 = document.getElementsByClassName("sunkWeak2");
       const arrSunkWeak2 = [].slice.call(sunkWeak2);
       arrSunkWeak2.forEach((el) => {
        el.classList.replace("sunkWeak2","sunk2");
       });

      }, 100);

      if ((opponentBoard.allShipsSunk === true) || (playerBoard.allShipsSunk === true)) {
        console.log(opponentBoard);
        console.log(playerBoard);
        return;
      }

      playerBoard = pcTurn(playerBoard, opponentBoard);
      
    }
    if (field.length === 2) {
      const attack = [+field[0], +field[1]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      e.target.classList.add("sunk");
      opponentGridFlowRefresh(opponentBoard);
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
    el.classList.replace("notSunk", "notSunkWeak");
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
    el.classList.replace("sunkWeak","sunk");
  });

  const sunk2 = document.getElementsByClassName("sunk2");
  const arrSunk2 = [].slice.call(sunk2);
  arrSunk2.forEach((el) => {
  el.classList.replace("sunk2","sunkWeak2");
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

function adjacentMove1center(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0] + 1, arr[1]];
  const second = [arr[0] - 1, arr[1]];
  const third = [arr[0], arr[1] + 1];
  const four = [arr[0], arr[1] - 1];
  
  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(four) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(four) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMove1up(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0], arr[1] + 1];
  const second = [arr[0] + 1, arr[1]];
  const third = [arr[0], arr[1] - 1];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMove1right(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0] + 1, arr[1]];
  const second = [arr[0] - 1, arr[1]];
  const third = [arr[0], arr[1] - 1];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMove1bottom(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0] - 1, arr[1]];
  const second = [arr[0], arr[1] + 1];
  const third = [arr[0], arr[1] - 1];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMove1left(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0] + 1, arr[1]];
  const second = [arr[0] - 1, arr[1]];
  const third = [arr[0], arr[1] + 1];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(third) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMoveCorner1(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0], arr[1] + 1];
  const second = [arr[0] - 1, arr[1]];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMoveCorner2(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0], arr[1] - 1];
  const second = [arr[0] - 1, arr[1]];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMoveCorner3(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0] - 1, arr[1]];
  const second = [arr[0], arr[1] - 1];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMoveCorner4(arr, anyBoard) {
  const allMoves = [];
  let move = null;

  const first = [arr[0] - 1, arr[1]];
  const second = [arr[0], arr[1] + 1];

  for (let i = 0; i < anyBoard.ships.length; i++) {
    for (let j = 0; j < anyBoard.ships[i][1].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.ships[i][1][j]))
      allMoves.push(anyBoard.ships[i][1][j]);
    }
  }

  for (let i = 0; i < anyBoard.board.length; i++) {
    for (let j = 0; j < anyBoard.board[i].length; j++) {
      if (JSON.stringify(first) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);

      if (JSON.stringify(second) === JSON.stringify(anyBoard.board[i][j]))
      allMoves.push(anyBoard.board[i][j]);
    }
  }

  move = allMoves[Math.floor(Math.random() * allMoves.length)];

  return move;
}

function adjacentMove(array ,anyBoard) {
  let answer = null;
  if (array.length === 1) {
    if ((array[0][0] > 0) && (array[0][0] < 9) &&
    (array[0][1] > 0) && (array[0][1] < 9)) {
      answer = adjacentMove1center(array[0], anyBoard);
    }
    if ((array[0][0] === 0) && (array[0][1] > 0) && (array[0][1] < 9)) {
      answer = adjacentMove1up(array[0], anyBoard);
    }
    if ((array[0][0] > 0) && (array[0][0] < 9) && (array[0][1] === 9)) {
      answer = adjacentMove1right(array[0], anyBoard);
    }
    if ((array[0][0] === 9) && (array[0][1] > 0) && (array[0][1] < 9)) {
      answer = adjacentMove1bottom(array[0], anyBoard);
    }
    if ((array[0][0] > 0) && (array[0][0] < 9) && (array[0][1] === 0)) {
      answer = adjacentMove1left(array[0], anyBoard);
    }

    if ((array[0][0] === 0) && (array[0][1] === 0)) {
      answer = adjacentMoveCorner1(array[0], anyBoard);
    }
    if ((array[0][0] === 0) && (array[0][1] === 9)) {
      answer = adjacentMoveCorner2(array[0], anyBoard);
    }
    if ((array[0][0] === 9) && (array[0][1] === 9)) {
      answer = adjacentMoveCorner3(array[0], anyBoard);
    }
    if ((array[0][0] === 9) && (array[0][1] === 0)) {
      answer = adjacentMoveCorner4(array[0], anyBoard);
    }
  }

  return answer;
}

/* console.log(adjacentMove([[5, 7]] ,playerBoard));

console.log(adjacentMove1center([5, 7] ,playerBoard)); */