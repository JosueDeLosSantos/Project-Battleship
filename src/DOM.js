import "./style.css";
import * as logic from "./logic";
import randomIcon from "./icons/change_circle.svg";
import customiseIcon from "./icons/swipe.svg";

const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
const grids = document.createElement("div");
grids.classList.add("grids");
body.appendChild(header);
body.appendChild(main);
main.appendChild(grids);
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

function playerAction() {
  const playerGridContainer = document.createElement("div");
  playerGridContainer.classList.add("playerGridContainer");
  const playerIndex1 = document.createElement("table");
  playerIndex1.classList.add("playerIndex1");
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
  playerIndex2.classList.add("playerIndex2");
  for (let i = 1; i < 11; i += 1) {
    const trColumn1 = document.createElement("tr");
    const tdColumn1 = document.createElement("td");
    tdColumn1.dataset.rowIndex = `${i}`;
    tdColumn1.textContent = `${i}`;
    playerIndex2.appendChild(trColumn1);
    trColumn1.appendChild(tdColumn1);
  }

  // Create the player grid
  const playerGrid = document.createElement("table");
  playerGrid.classList.add("playerGrid");

  playerGridContainer.appendChild(playerIndex1);
  playerIndex1.appendChild(rowIndex1);
  playerGridContainer.appendChild(playerContainer2);
  playerContainer2.appendChild(playerIndex2);
  playerContainer2.appendChild(playerGrid);
  grids.appendChild(playerGridContainer);
}
playerAction();
const playerGridContainer = document.querySelector(".playerGridContainer")
const playerGrid = document.querySelector(".playerGrid")

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

let opponentBoard = null;
function opponentAction(){
  opponentBoard = logic.Gameboard();
    // Create the opponent grid
  const opponentGridContainer = document.createElement("div");
  opponentGridContainer.classList.add("opponentGridContainer");
  const opponentGrid = document.createElement("table");
  opponentGrid.classList.add("opponentGrid");
  const opponentIndex1 = document.createElement("table");
  opponentIndex1.classList.add("opponentIndex1");
  opponentIndex1.classList.add("opponentIndex1Light");
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
  opponentIndex2.classList.add("opponentIndex2Light");
  for (let i = 1; i < 11; i += 1) {
    const trColumn = document.createElement("tr");
    const tdColumn = document.createElement("td");
    tdColumn.dataset.rowIndex = `${i}`;
    tdColumn.textContent = `${i}`;
    opponentIndex2.appendChild(trColumn);
    trColumn.appendChild(tdColumn);
  }
  grids.appendChild(opponentGridContainer);
  opponentGridContainer.appendChild(opponentIndex1);
  opponentIndex1.appendChild(rowIndex2);
  opponentGridContainer.appendChild(opponentContainer2);
  opponentContainer2.appendChild(opponentIndex2);
  opponentContainer2.appendChild(opponentGrid);

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
}
opponentAction()
const opponentGridContainer = document.querySelector(".opponentGridContainer")


function titlesAction() {
  const gridsTitle = document.createElement("div");
  gridsTitle.classList.add("gridsTitles");
  const title1 = document.createElement("div");
  title1.classList.add("title1");
  title1.innerText = "Your grid";
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
  gridOption1Icon.addEventListener("click", randomise);
  gridOption2Icon.src = customiseIcon;
  gridOption2Icon.addEventListener("click", dragDrop);
  gridOption1.appendChild(gridOption1Icon);
  gridOption2.appendChild(gridOption2Icon);
  gridOptions.appendChild(gridOption1);
  gridOptions.appendChild(gridOption2);
  // Add titles to each grid
  main.appendChild(gridsTitle);
  // Add options to the player's grid
  main.appendChild(gridOptions);
}
titlesAction()
const gridOptions = document.querySelector(".gridOptions");
const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");

// Selectors
const playerIndex1 = document.querySelector(".playerIndex1");
const playerIndex2 = document.querySelector(".playerIndex2");
const opponentGrid = document.querySelector(".opponentGrid");
const opponentIndex1 = document.querySelector(".opponentIndex1");
const opponentIndex2 = document.querySelector(".opponentIndex2");

// Add play button on the opponent's grid
function playButtonAction(){
  opponentGrid.classList.add("weak");
  const playButton = document.createElement("div");
  playButton.classList.add("playButton");
  playButton.innerText = "Play";
  const playButtonContainer = document.createElement("div");
  const playButtonTitle = document.createElement("div");
  playButtonTitle.classList.add("playButtonTitle");
  playButtonTitle.innerText = "Opponent";
  playButtonContainer.classList.add("playButtonContainer");
  grids.appendChild(playButtonContainer);
  playButtonContainer.appendChild(playButtonTitle);
  playButtonContainer.appendChild(playButton);
}
playButtonAction();
const playButton = document.querySelector(".playButton");
const playButtonContainer = document.querySelector(".playButtonContainer");


function randomise() {
  playerBoardFunction();
}

function dropTable(){
  const dropTableContainer = document.createElement("div");
  dropTableContainer.classList.add("dropTableContainer");
  const dropIndex1 = document.createElement("table");
  dropIndex1.classList.add("dropIndex1");
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
  const dropTableIndex2 = document.createElement("table");
  dropTableIndex2.classList.add("dropTableIndex2");
  for (let i = 1; i < 11; i += 1) {
    const trColumn1 = document.createElement("tr");
    const tdColumn1 = document.createElement("td");
    tdColumn1.dataset.rowIndex = `${i}`;
    tdColumn1.textContent = `${i}`;
    dropTableIndex2.appendChild(trColumn1);
    trColumn1.appendChild(tdColumn1);
  }

  // Create the dropTable grid
  const dTable = document.createElement("table");
  dTable.classList.add("dTable");
  dTable.dataset.grab = "none";

  dropTableContainer.appendChild(dropIndex1);
  dropIndex1.appendChild(rowIndex1);
  dropTableContainer.appendChild(playerContainer2);
  playerContainer2.appendChild(dropTableIndex2);
  playerContainer2.appendChild(dTable);
  grids.appendChild(dropTableContainer);

  for (let i = 0; i < 10; i += 1) {
    const gridRow = document.createElement("tr");
    gridRow.dataset.dragTableRow = `${i}`;
    dTable.appendChild(gridRow);
    for (let j = 0; j < 10; j += 1) {
      const gridField = document.createElement("td");
      gridField.dataset.dragTableField = `${[i]},${[j]}`;

      const gridRowSelector = document.querySelector(`[data-drag-table-row = "${i}"]`);
      gridRowSelector.appendChild(gridField);
    }
  }
  // Add event listeners to all fields
  const dropFields = document.querySelectorAll("[data-drag-table-field]");
  dropFields.forEach(field => {
    field.addEventListener("dragend", dragEnd);
    field.addEventListener("dragover", dragOver);
    field.addEventListener("dragleave", dragLeave);
    field.addEventListener("drop", drop);
  })
}

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.classList[1]);
  /* const selectedClass = e.dataTransfer.getData('text/plain');
  const dTable = document.querySelector(".dTable")
  console.log(dTable) */
  const dTable = document.querySelector(".dTable")
  let ex = e.x;
  let ey = e.y;

  // x-249 y-215
  if(e.target.classList[0] === "dBoxFour"){
    if(ex > 248) ex = 248;
    if(ex < 134) ex = 134;
    if(ey > 214) ey = 214;
    if(ey < 188) ey = 188;

    const elementAtCoordinates = document.elementFromPoint(ex, ey);

    if (elementAtCoordinates.dataset.dboxdiv === "0") {
      dTable.dataset.grab = "0";
    }
    if (elementAtCoordinates.dataset.dboxdiv === "1") {
      dTable.dataset.grab = "1";
    }
    if (elementAtCoordinates.dataset.dboxdiv === "2") {
      dTable.dataset.grab = "2";
    }
    if (elementAtCoordinates.dataset.dboxdiv === "3") {
      dTable.dataset.grab = "3";
    }
  }
  
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);

  e.target.addEventListener("dragend", dragEnd);
}

function dragEnd() {
  const dBoxFour = document.querySelector(".dBoxFour");
  const dTable = document.querySelector(".dTable")
  if (dBoxFour.classList.contains("hide")) {
    if (!dTable.classList.contains("dBox4")) {
      dBoxFour.classList.remove("hide")
    }
  }
  
  console.log("drag ended")
  // e.target.removeEventListener("dragend", dragEnd);
}

function dragOver(e) {
  e.preventDefault();

  const dTable = document.querySelector(".dTable")
  const coordinate = e.target.dataset.dragTableField.split(",");

  if (dTable.dataset.grab === "0"){
    if(+coordinate[1] < 7){
      e.target.parentElement.children[+coordinate[1]].classList.add('drag-over')
      e.target.parentElement.children[+coordinate[1] + 1].classList.add('drag-over')
      e.target.parentElement.children[+coordinate[1] + 2].classList.add('drag-over')
      e.target.parentElement.children[+coordinate[1] + 3].classList.add('drag-over')
    }
  }
}

function dragLeave(e) {

  const dTable = document.querySelector(".dTable")
  const coordinate = e.target.dataset.dragTableField.split(",");

  if (dTable.dataset.grab === "0"){
    if(+coordinate[1] < 7){
      e.target.parentElement.children[+coordinate[1]].classList.remove('drag-over')
      e.target.parentElement.children[+coordinate[1] + 1].classList.remove('drag-over')
      e.target.parentElement.children[+coordinate[1] + 2].classList.remove('drag-over')
      e.target.parentElement.children[+coordinate[1] + 3].classList.remove('drag-over')
    }
  }
}

function drop(e) {

  const selectedClass = e.dataTransfer.getData('text/plain');
  const dTable = document.querySelector(".dTable")
  
  
  if (e.target.classList.contains("drag-over")) {
    if (selectedClass === "dBox4"){
      if (!dTable.classList.contains("dBox4")){
        dTable.classList.add(selectedClass)
      }
    }
  }

  const coordinate = e.target.dataset.dragTableField.split(",");
  if (dTable.dataset.grab === "0"){
    if (dTable.classList.contains("dBox4")){
      dBoxFourDrop(e, coordinate)
    }
  }

  e.target.classList.remove('drag-over');
}

function dBoxFourDrop(e, coordinate){
  if(+coordinate[1] < 7){
    e.target.parentElement.children[+coordinate[1]].classList.remove('drag-over')
    e.target.parentElement.children[+coordinate[1] + 1].classList.remove('drag-over')
    e.target.parentElement.children[+coordinate[1] + 2].classList.remove('drag-over')
    e.target.parentElement.children[+coordinate[1] + 3].classList.remove('drag-over')
    e.target.parentElement.children[+coordinate[1]].classList.add('notSunk')
    e.target.parentElement.children[+coordinate[1] + 1].classList.add('notSunk')
    e.target.parentElement.children[+coordinate[1] + 2].classList.add('notSunk')
    e.target.parentElement.children[+coordinate[1] + 3].classList.add('notSunk')
  }
}


function draggableShips() {
  const dBox = document.createElement("div");
  dBox.classList.add("dBox");
  grids.appendChild(dBox);

  const firstContainer = document.createElement("div");
  firstContainer.classList.add("firstContainer");
  const dBoxFour = document.createElement("div");
  dBoxFour.classList.add("dBoxFour");
  dBoxFour.classList.add("dBox4");
  dBoxFour.draggable = true;
  for(let i = 0; i < 4; i += 1){
    const dBoxFourBox = document.createElement("div")
    dBoxFourBox.dataset.dboxdiv = `${i}`;
    dBoxFour.appendChild(dBoxFourBox);
  }
  dBoxFour.addEventListener("dragstart", dragStart)
  
  firstContainer.appendChild(dBoxFour);
  dBox.appendChild(firstContainer);
  
  const secondContainer = document.createElement("div");
  secondContainer.classList.add("secondContainer");
  const dBoxThree1 = document.createElement("div");
  dBoxThree1.classList.add("dBoxThree1");
  dBox.appendChild(secondContainer);
  secondContainer.appendChild(dBoxThree1);
  const dBoxThree2 = document.createElement("div");
  dBoxThree2.classList.add("dBoxThree2");
  dBox.appendChild(secondContainer);
  secondContainer.appendChild(dBoxThree2);

  const thirdContainer = document.createElement("div");
  thirdContainer.classList.add("thirdContainer");
  const dBoxTwo1 = document.createElement("div");
  dBoxTwo1.classList.add("dBoxTwo1");
  dBox.appendChild(thirdContainer);
  thirdContainer.appendChild(dBoxTwo1);
  const dBoxTwo2 = document.createElement("div");
  dBoxTwo2.classList.add("dBoxTwo2");
  dBox.appendChild(thirdContainer);
  thirdContainer.appendChild(dBoxTwo2);
  const dBoxTwo3 = document.createElement("div");
  dBoxTwo3.classList.add("dBoxTwo3");
  dBox.appendChild(thirdContainer);
  thirdContainer.appendChild(dBoxTwo3);

  const fourthContainer = document.createElement("div");
  fourthContainer.classList.add("fourthContainer");
  const dBoxOne1 = document.createElement("div");
  dBoxOne1.classList.add("dBoxOne1");
  dBox.appendChild(fourthContainer);
  fourthContainer.appendChild(dBoxOne1);
  const dBoxOne2 = document.createElement("div");
  dBoxOne2.classList.add("dBoxOne2");
  dBox.appendChild(fourthContainer);
  fourthContainer.appendChild(dBoxOne2);
  const dBoxOne3 = document.createElement("div");
  dBoxOne3.classList.add("dBoxOne3");
  dBox.appendChild(fourthContainer);
  fourthContainer.appendChild(dBoxOne3);
  const dBoxOne4 = document.createElement("div");
  dBoxOne4.classList.add("dBoxOne4");
  dBox.appendChild(fourthContainer);
  fourthContainer.appendChild(dBoxOne4);
}

function dragDrop(){
  /* grids.removeChild(playerGridContainer);
  grids.removeChild(opponentGridContainer);
  grids.removeChild(playButtonContainer); */
  playerGridContainer.classList.add("hide");
  opponentGridContainer.classList.add("hide");
  playButtonContainer.classList.add("hide");
  draggableShips() 
  dropTable()
  title1.innerText = "Your ships";
  title2.innerText = "Your grid";
}

function play() {
  grids.removeChild(playButtonContainer);
  opponentGrid.classList.remove("weak");
  opponentIndex1.classList.remove("opponentIndex1Light");
  opponentIndex2.classList.remove("opponentIndex2Light");
  playerIndex1.classList.add("playerIndex1Light");
  playerIndex2.classList.add("playerIndex2Light");
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
      response = adjacentMove(anyBoard.ships[i][0].hitsrecord, anyBoard);
      return response;
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

function opponentGridFlowRefresh(oBoard) {
    // Spot all missed attacks
    for (let i = 0; i < oBoard.missedShot.length; i += 1) {
      const ms1 = oBoard.missedShot[i][0];
      const ms2 = oBoard.missedShot[i][1];
      const selection = opponentGrid.childNodes[ms1].childNodes[ms2];
      selection.classList.add("missed");
    }
    // Spot all achieved attacks
    for (let i = 0; i < oBoard.ships.length; i += 1) {
      for (let j = 0; j < oBoard.ships[i][0].hitsrecord.length; j += 1) {
        const ms1 = oBoard.ships[i][0].hitsrecord[j][0];
        const ms2 = oBoard.ships[i][0].hitsrecord[j][1];
        const selection = opponentGrid.childNodes[ms1].childNodes[ms2];
        selection.classList.add("sunk");
      }
    }
}


function playerGridFlow(pBoard){
  // Spot all missed attacks eccept the last one
  for (let i = 0; i < pBoard.missedShot.length - 1; i += 1) {
    const ms1 = pBoard.missedShot[i][0];
    const ms2 = pBoard.missedShot[i][1];
    const selection = playerGrid.childNodes[ms1].childNodes[ms2];
    if (!selection.classList.contains("missed2")) {
      selection.classList.add("missed2");
    }
  }
  // Spot all achieved attacks
  for (let i = 0; i < pBoard.ships.length; i += 1) {
    for (let j = 0; j < pBoard.ships[i][0].hitsrecord.length; j += 1) {
      const ms1 = pBoard.ships[i][0].hitsrecord[j][0];
      const ms2 = pBoard.ships[i][0].hitsrecord[j][1];
      const selection = playerGrid.childNodes[ms1].childNodes[ms2];
      if (selection.classList.contains("notSunk")) {
        selection.classList.remove("notSunk");
        selection.classList.add("sunk2");
      }
    }
  }
}

let counter = 1;

function pcTurn(pBoard = playerBoard, oBoard = opponentBoard) {
  counter += 1;
  const currentLength = pBoard.missedShot.length;
  let newLength = currentLength;

  // Check if game is over
  if ((oBoard.allShipsSunk === true) || (pBoard.allShipsSunk === true)) {
    playerGridFlow(pBoard);
    console.log(oBoard);
    console.log(pBoard);
    console.log(gameEnds(pBoard, oBoard))
    return;
  }

  // Update playerBoard on each turn
  pBoard = logic.receiveAttack(randomePlay(pBoard), pBoard);
  newLength = pBoard.missedShot.length;

  if (newLength === (currentLength + 1)) {
  // Missed attacks will be reflected on the DOM
    playerGridFlow(pBoard);
    // The last missed attack will be shown later, to make the game look more realistic
    const ms1 = pBoard.missedShot[pBoard.missedShot.length - 1][0];
    const ms2 = pBoard.missedShot[pBoard.missedShot.length - 1][1];
    setTimeout(() => {
      playerGrid.children[ms1].children[ms2].classList.add("missed2");
    }, 600);
    // Hide the players grid and oppen the opponet's grid
    setTimeout(() => {playerGridWeak();}, counter * 300);
    counter = 1;

  } else {

    for (let i = 0; i < pBoard.ships.length; i += 1) {
      for (let j = 0; j < pBoard.ships[i][0].hitsrecord.length; j += 1) {
        const ms1 = pBoard.ships[i][0].hitsrecord[j][0];
        const ms2 = pBoard.ships[i][0].hitsrecord[j][1];
        const selection = playerGrid.childNodes[ms1].childNodes[ms2];

        if (selection.classList.contains("notSunk")) {
          selection.classList.remove("notSunk");
          selection.classList.add("sunk2");
        }
      }
    }
    setTimeout(() => {pcTurn(pBoard, oBoard)}, 500);
  }
}

function opponentGridFlow(e) {

  if ((opponentBoard.allShipsSunk === true) || (playerBoard.allShipsSunk === true)) {
    console.log(opponentBoard);
    console.log(playerBoard);
    console.log(gameEnds(playerBoard, opponentBoard))
  }

  if (!opponentGrid.classList.contains("weak") &&
  !e.target.classList.contains("missed") &&
  !e.target.classList.contains("sunk")) {
    if (!e.target.dataset.field2) return;
    const field = e.target.dataset.field2.split("");
    if (field.length === 3) {
      const attack = [+field[0], +field[2]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      opponentGridFlowRefresh(opponentBoard);
      setTimeout(() => {
        // Close the opponent's grid
        opponentGrid.classList.add("weak");
        opponentIndex2.classList.add("opponentIndex2Light");
        opponentIndex1.classList.add("opponentIndex1Light");
        e.target.dataset.field2 = "1234";
        // Open the player's grid
        playerGrid.classList.remove("weak");
        playerGrid.classList.add("playerGrid");
        playerIndex2.classList.remove("playerIndex2Light");
        playerIndex1.classList.remove("playerIndex1Light");
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

      pcTurn(); 
    }
    if (field.length === 2) {
      const attack = [+field[0], +field[1]];
      opponentBoard = logic.receiveAttack(attack, opponentBoard);
      opponentGridFlowRefresh(opponentBoard);
      if ((opponentBoard.allShipsSunk === true) || (playerBoard.allShipsSunk === true)) {
        console.log(opponentBoard);
        console.log(playerBoard);
        console.log(gameEnds(playerBoard, opponentBoard))
      }
    }
  }
}
opponentGrid.addEventListener("click", opponentGridFlow);

function playerGridWeak(){
  // hide player's grid;
  playerGrid.classList.add("weak");
  const rowIndex1 = document.querySelector(".rowIndex1");
  rowIndex1.parentNode.classList.add("playerIndex1Light");
  const playerContainer2 = document.querySelector(".playerContainer2");
  playerContainer2.childNodes[0].classList.add("playerIndex2Light");
  const notSunk = document.getElementsByClassName("notSunk");
  const arrNotsunk = [].slice.call(notSunk);
  arrNotsunk.forEach((el) => {
    el.classList.replace("notSunk", "notSunkWeak");
  });
  const sunk2 = document.getElementsByClassName("sunk2");
  const arrSunk2 = [].slice.call(sunk2);
  arrSunk2.forEach((el) => {
  el.classList.replace("sunk2","sunkWeak2");
  });
  const missed2 = document.getElementsByClassName("missed2");
  const arrMissed2 = [].slice.call(missed2);
  arrMissed2.forEach((el) => {
  el.classList.replace("missed2","missedWeak2");
  });
  
  // Open opponent's grid
  opponentGrid.classList.remove("weak");
  opponentIndex2.classList.remove("opponentIndex2Light");
  opponentIndex1.classList.remove("opponentIndex1Light");
  const sunkWeak = document.getElementsByClassName("sunkWeak");
  const arrSunkWeak = [].slice.call(sunkWeak);
  arrSunkWeak.forEach((el) => {
    el.classList.replace("sunkWeak","sunk");
  });

  const missedWeak = document.getElementsByClassName("missedWeak");
  const arrMissedWeak = [].slice.call(missedWeak);
  arrMissedWeak.forEach((el) => {
  el.classList.replace("missedWeak","missed");
  });
}

function showWinner(firstBoard, secondBoard, winner) {
  const winnerCard = document.createElement('div');
  winnerCard.classList.add("winnerCard");
  const winnerTitle = document.createElement('div');
  winnerTitle.classList.add("winnerTitle");
  winnerTitle.innerText = `${winner} won`;
  winnerCard.appendChild(winnerTitle);
  main.appendChild(winnerCard);

  const results = document.createElement("div");
  results.classList.add("results");
  winnerCard.appendChild(results);
  const winnerResults = document.createElement("div");
  winnerResults.classList.add("winnerResults");
  const loserResults = document.createElement("div");
  loserResults.classList.add("loserResults");
  results.appendChild(winnerResults);
  results.appendChild(loserResults);

  const winnerResultsTitle = document.createElement("div");
  winnerResultsTitle.classList.add("winnerResultsTitle");
  winnerResults.appendChild(winnerResultsTitle);
  winnerResultsTitle.innerText = `Winner`;
  const wrDescription = document.createElement("div");
  wrDescription.classList.add("wrDescription");
  winnerResults.appendChild(wrDescription);
  wrDescription.innerText = `Sank ${firstBoard} ships`;

  const loserResultsTitle = document.createElement("div");
  loserResultsTitle.classList.add("loserResultsTitle");
  loserResults.appendChild(loserResultsTitle);
  loserResultsTitle.innerText = `Loser`;
  const lrDescription = document.createElement("div");
  lrDescription.classList.add("lrDescription");
  loserResults.appendChild(lrDescription);
  lrDescription.innerText = `Sank ${secondBoard} ships`;

  const restartButton = document.createElement("div");
  restartButton.classList.add("restartButton");
  restartButton.innerText = `Restart`;
  winnerCard.appendChild(restartButton);
  restartButton.addEventListener("click", () => {
    location.reload();
  })
}

function shipsSunk(board){
  let amount = 0;
  for (let i = 0; i < board.ships.length; i++) {
    if (board.ships[i][0].sunk === true){
      amount += 1;
    }
  }
  return amount;
}

function gameEnds(pBoard, oBoard){

  main.removeChild(main.children[0])
  main.removeChild(main.children[0])

  if (shipsSunk(oBoard) > shipsSunk(pBoard)) {
    showWinner(shipsSunk(oBoard), shipsSunk(pBoard), "Player")
  } else {
    showWinner(shipsSunk(pBoard), shipsSunk(oBoard), "PC")
  }

  return {player: `${shipsSunk(pBoard)}`,
    opponent: `${shipsSunk(oBoard)}`
  }
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
