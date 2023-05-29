import "./style.css";

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
playerIndex1.classList.add("playerIndex1");
const rowIndex1 = document.createElement("tr");
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
for (let i = 0; i < 10; i += 1) {
  const gridRow = document.createElement("tr");
  gridRow.dataset.row = `${i}`;
  playerGrid.appendChild(gridRow);
  for (let j = 0; j < 10; j += 1) {
    const gridField = document.createElement("td");
    gridField.dataset.field = `${i},${j}`;
    const gridRowSelector = document.querySelector(`[data-row = "${i}"]`);
    gridRowSelector.appendChild(gridField);
  }
}

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
for (let i = 0; i < 10; i += 1) {
  const gridRow = document.createElement("tr");
  gridRow.dataset.row2 = `${i}`;
  opponentGrid.appendChild(gridRow);
  for (let j = 0; j < 10; j += 1) {
    const gridField = document.createElement("td");
    gridField.dataset.field2 = `${i},${j}`;
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
