import "./style.css";
import * as logic from "./logic";
import randomIcon from "./icons/change_circle.svg";
import customiseIcon from "./icons/swipe.svg";

const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const grids = document.createElement("div");
grids.classList.add("grids");
const playerGridContainer = document.createElement("div");
playerGridContainer.classList.add("playerGridContainer");
const opponentGridContainer = document.createElement("div");
opponentGridContainer.classList.add("opponentGridContainer");
const gridsTitle = document.createElement("div");
gridsTitle.classList.add("gridsTitles");
const title1 = document.createElement("div");
title1.classList.add("title1");
title1.innerText = "your grid";
const title2 = document.createElement("div");
title2.classList.add("title2");
title2.innerText = "Opponent's grid";
gridsTitle.appendChild(title1);
gridsTitle.appendChild(title2);
const gridOptions = document.createElement("div");
gridOptions.classList.add("gridOptions");
const gridOption1 = document.createElement("div");
const gridOption2 = document.createElement("div");
const gridOption1Icon = new Image();
const gridOption2Icon = new Image();
gridOption1Icon.classList.add("gridOption1Icon");
gridOption2Icon.classList.add("gridOption2Icon");
gridOption1Icon.setAttribute("title", "Randomise");
gridOption2Icon.setAttribute("title", "customize positions");
gridOption1Icon.src = randomIcon;
gridOption2Icon.src = customiseIcon;
gridOption1.appendChild(gridOption1Icon);
gridOption2.appendChild(gridOption2Icon);
gridOptions.appendChild(gridOption1);
gridOptions.appendChild(gridOption2);
const footer = document.createElement("footer");

body.appendChild(header);
body.appendChild(main);
main.appendChild(grids);
grids.appendChild(playerGridContainer);
body.appendChild(footer);
/* Create header containing the game name and a box for game alerts */
// Template: http://en.battleship-game.org/
// header
const gameTitle = document.createElement("div");
const title = document.createElement("div");
title.classList.add("gameTitle");
title.textContent = "Battleship";
gameTitle.appendChild(title);
const notificationBar = document.createElement("div");
const bar = document.createElement("div");
bar.classList.add("bar");
bar.textContent = "Place the ships.";
notificationBar.appendChild(bar);
header.appendChild(gameTitle);
header.appendChild(notificationBar);
// Create the player grid
const playerGrid = document.createElement("table");
playerGrid.classList.add("playerGrid");
const playerIndex1 = document.createElement("table");
const rowIndex1 = document.createElement("tr");
rowIndex1.classList.add("rowIndex1");
for (let i = 1; i < 11; i += 1) {
  const tdIndex1 = document.createElement("td");
  tdIndex1.dataset.columnIndex = `${i}`;
  tdIndex1.textContent = `${i}`;
  rowIndex1.appendChild(tdIndex1);
}
const playerContainer2 = document.createElement("div");
playerContainer2.classList.add("playerContainer2");
const playerIndex2 = document.createElement("table");
for (let i = 1; i < 11; i += 1) {
  const trColumn1 = document.createElement("tr");
  const tdColumn1 = document.createElement("td");
  tdColumn1.dataset.rowIndex = `${i}`;
  tdColumn1.textContent = `${i}`;
  playerIndex2.appendChild(trColumn1);
  trColumn1.appendChild(tdColumn1);
}
grids.appendChild(playerGridContainer);
playerGridContainer.appendChild(playerIndex1);
playerIndex1.appendChild(rowIndex1);
playerGridContainer.appendChild(playerContainer2);
playerContainer2.appendChild(playerIndex2);
playerContainer2.appendChild(playerGrid);
let playerBoard = null;

function playerBoardFunction(){
  const playerBoard1 = logic.Gameboard();
  playerBoard = playerBoard1;
  if (playerGrid.children.length > 0) {
    const playerGridTR = document.querySelectorAll(`[data-row]`)
    playerGridTR.forEach(el => {
      playerGrid.removeChild(el);
    });
  }
  for (let i = 0; i < 10; i += 1) {
    const gridRow = document.createElement("tr");
    gridRow.dataset.row = `${i}`;
    playerGrid.appendChild(gridRow);
    for (let j = 0; j < 10; j += 1) {
      const gridField = document.createElement("td");
      gridField.classList.add("gridFieldPlayer");
      gridField.dataset.field = `${playerBoard1.board[i][j]}`;
      if (!gridField.dataset.field) {
        gridField.dataset.field = `${i}${j}`;
      }
      if (gridField.dataset.field === `${i}${j}`) {
        gridField.classList.add("notSunk");
      }
      const gridRowSelector = document.querySelector(`[data-row = "${i}"]`);
      gridRowSelector.appendChild(gridField);
    }
  }
  return playerBoard1;
}
playerBoardFunction();
// Create the opponent grid
grids.appendChild(opponentGridContainer);
const opponentGrid = document.createElement("table");
opponentGrid.classList.add("opponentGrid");
const opponentIndex1 = document.createElement("table");
opponentIndex1.classList.add("opponentIndex1");
const rowIndex2 = document.createElement("tr");
for (let i = 1; i < 11; i += 1) {
  const tdIndex = document.createElement("td");
  tdIndex.dataset.columnIndex = `${i}`;
  tdIndex.textContent = `${i}`;
  rowIndex2.appendChild(tdIndex);
}
const opponentContainer2 = document.createElement("div");
opponentContainer2.classList.add("opponentContainer2");
const opponentIndex2 = document.createElement("table");
opponentIndex2.classList.add("opponentIndex2");
for (let i = 1; i < 11; i += 1) {
  const trColumn = document.createElement("tr");
  const tdColumn = document.createElement("td");
  tdColumn.dataset.rowIndex = `${i}`;
  tdColumn.textContent = `${i}`;
  opponentIndex2.appendChild(trColumn);
  trColumn.appendChild(tdColumn);
}
opponentGridContainer.appendChild(opponentIndex1);
opponentIndex1.appendChild(rowIndex2);
opponentGridContainer.appendChild(opponentContainer2);
opponentContainer2.appendChild(opponentIndex2);
opponentContainer2.appendChild(opponentGrid);
let opponentBoard = logic.Gameboard();
console.log(opponentBoard);
for (let i = 0; i < 10; i += 1) {
  const gridRow = document.createElement("tr");
  gridRow.dataset.row2 = `${i}`;
  opponentGrid.appendChild(gridRow);
  for (let j = 0; j < 10; j += 1) {
    const gridField = document.createElement("td");
    gridField.classList.add("gridFieldOpponent");
    gridField.dataset.field2 = `${opponentBoard.board[i][j]}`;
    if (!gridField.dataset.field2) {
      gridField.dataset.field2 = `${i}${j}`;
    }
    const gridRowSelector = document.querySelector(`[data-row2 = "${i}"]`);
    gridRowSelector.appendChild(gridField);
  }
}
// Add play button on the opponent's grid
opponentGrid.classList.add("weak");
opponentGrid.classList.remove("opponentGrid");
const playButton = document.createElement("div");
const playButtonContainer = document.createElement("div");
const playButtonTitle = document.createElement("div");
playButtonTitle.classList.add("playButtonTitle");
playButtonTitle.innerText = "Opponent";
playButtonContainer.classList.add("playButtonContainer");
playButton.classList.add("playButton");
playButton.innerText = "Play";
grids.appendChild(playButtonContainer);
playButtonContainer.appendChild(playButtonTitle);
playButtonContainer.appendChild(playButton);
// Add titles to each grid
main.appendChild(gridsTitle);
// Add options to the player's grid
main.appendChild(gridOptions);
// Add option to place the player's ships randomly

function randomise() {
  playerBoardFunction();
}
gridOption1Icon.addEventListener("click", randomise);

function play() {
  grids.removeChild(playButtonContainer);
  opponentGrid.classList.remove("weak");
  opponentGrid.classList.add("opponentGrid");
  opponentIndex1.classList.remove("opponentIndex1");
  opponentIndex2.classList.remove("opponentIndex2");
  playerIndex1.classList.add("playerIndex1");
  playerIndex2.classList.add("playerIndex2");
  playerGrid.classList.remove("playerGrid");
  playerGrid.classList.add("weak");
  const notSunk = document.getElementsByClassName("notSunk");
  // Most efficient way to convert an HTMLCollection to an Array
  const arrNotsunk = [].slice.call(notSunk);
  arrNotsunk.forEach((el) => {
    el.classList.remove("notSunk");
    el.classList.add("notSunkWeak");
  });
  main.removeChild(gridOptions);
}
playButton.addEventListener("click", play);

function randomePlay(b) {
  const anyBoard = b;
  const newBoard = [];
  let response = null;

  for (let i = 0; i < anyBoard.ships.length; i++) {
    if ((anyBoard.ships[i][0].hitsrecord.length > 0) &&
    (anyBoard.ships[i][1].length > 0)) {
      return adjacentMove(anyBoard.ships[i][0].hitsrecord, anyBoard);
    }
  }

  // Saves all coordinates which lengths are beyond 0 on the newBoard array.
  for (let i = 0; i < anyBoard.board.length; i += 1) {
    for (let j = 0; j < anyBoard.board[i].length; j += 1) {
      if (anyBoard.board[i][j].length > 0) {
        newBoard.push(anyBoard.board[i][j]);
      }
    }
  }

  for (let i = 0; i < anyBoard.ships.length; i += 1) {
    // Saves all of the ship's coordinates that have not been hit, into the newBoard array.
    for (let j = 0; j < anyBoard.ships[i][1].length; j += 1) {
      newBoard.push(anyBoard.ships[i][1][j]);
    }
  }

  // selects a random coordinate from the new array
  response = newBoard[Math.floor(Math.random() * newBoard.length)];

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

// PENDING pcTurn never makes the last play to win the game .........
function pcTurn(p = playerBoard, oBoard = opponentBoard) {
  let pBoard = p;
  const currentLength = pBoard.missedShot.length;
  let newLength = null;
  // Update playerBoard on each turn
  pBoard = logic.receiveAttack(randomePlay(pBoard), pBoard);
  newLength = pBoard.missedShot.length;
  if (newLength === (currentLength + 1)) {
    // PC turn will be reflected on the DOM
  setTimeout(() => {playerGridFlow(pBoard, oBoard)}, 1000);
  } else {
    setTimeout(() => {pcTurn(pBoard, oBoard)}, 500);
    console.log(pBoard);
  }
  // If all empty coordinates have been hit ...
  if (newLength === 80){
    if (pBoard.allShipsSunk === false) {
      setTimeout(() => {pcTurn(pBoard, oBoard)}, 500);
      setTimeout(() => {playerGridFlow(pBoard, oBoard)}, 1000);
    }
  }
}

function opponentGridFlow(e) {
  if (!opponentGrid.classList.contains("weak") &&
  !e.target.classList.contains("missed") &&
  !e.target.classList.contains("sunk")) {
    const field = e.target.dataset.field2.split("");
    if (field === undefined) return;
    if (field.length === 3) {
      const attack = [+field[0], +field[2]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      opponentGridFlowRefresh(opponentBoard);
      setTimeout(() => {
        // Close the opponent's grid
        opponentGrid.classList.add("weak");
        opponentIndex2.classList.add("opponentIndex2");
        opponentIndex1.classList.add("opponentIndex1");
        e.target.dataset.field2 = "1234";
        // Open the player's grid
        playerGrid.classList.remove("weak");
        playerGrid.classList.add("playerGrid");
        playerIndex2.classList.remove("playerIndex2");
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
      pcTurn(); 
    }
    if (field.length === 2) {
      const attack = [+field[0], +field[1]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      opponentGridFlowRefresh(opponentBoard);
      if ((opponentBoard.allShipsSunk === true) || (playerBoard.allShipsSunk === true)) {
        console.log(opponentBoard);
        console.log(playerBoard);
        return;
      }
    }
  }
}
opponentGrid.addEventListener("click", opponentGridFlow);

function playerGridWeak(){
  // hide player's grid;
  const playerGridDOM = document.querySelector(".playerGrid");
  playerGridDOM.classList.add("weak");
  rowIndex1.parentNode.classList.add("playerIndex1");
  playerContainer2.childNodes[0].classList.add("playerIndex2");
  const notSunk = document.getElementsByClassName("notSunk");
  const arrNotsunk = [].slice.call(notSunk);
  arrNotsunk.forEach((el) => {
    el.classList.replace("notSunk", "notSunkWeak");
  });
  // Open opponent's grid
  opponentGrid.classList.remove("weak");
  opponentIndex2.classList.remove("opponentIndex2");
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

function horizontalMove(arr, anyBoard) {
  const array = logic.reOrderArr(arr);
  const allMoves = [];
  let move = null;
  if ((array[0][1] === 0)){
    return [array[0][0], array[array.length - 1][1] + 1];
  }

  if (array[0][1] > 0){
    const firstMove = [array[0][0], array[0][1] - 1];
    const secondMove = [array[0][0], array[array.length - 1][1] + 1];
    const found = anyBoard.missedShot.find(element => JSON.stringify(element) === JSON.stringify(firstMove));
    const found2 = anyBoard.missedShot.find(element => JSON.stringify(element) === JSON.stringify(secondMove));
    if (found === undefined) {
      allMoves.push(firstMove)
    }
    if (found2 === undefined) {
      allMoves.push(secondMove)
    }
  }
  move = allMoves[Math.floor(Math.random() * allMoves.length)];
  return move;
}

function verticalMove(arr, anyBoard) {
  const array = logic.reOrderArr(arr);
  const allMoves = [];
  let move = null;
  if ((array[0][0] === 0)){
    return [array[array.length - 1][0] + 1, array[array.length - 1][1]];
  }

  if ((array[0][0] > 0) && (array[array.length - 1][0] < 9)){
    const firstMove = [array[0][0] - 1, array[0][1]];
    const secondMove = [array[array.length - 1][0] + 1, array[array.length - 1][1]];
    const found = anyBoard.missedShot.find(element => JSON.stringify(element) === JSON.stringify(firstMove));
    const found2 = anyBoard.missedShot.find(element => JSON.stringify(element) === JSON.stringify(secondMove));
    if (found === undefined) {
      allMoves.push(firstMove)
    }
    if (found2 === undefined) {
      allMoves.push(secondMove)
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

  if (array.length > 1) {
    if (array[0][0] === array[1][0]) {
      answer = horizontalMove(array, anyBoard);
    }
    if (array[0][1] === array[1][1]) {
      answer = verticalMove(array, anyBoard);
    }
  }
  return answer;
}
