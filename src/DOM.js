import "./style.css";

const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const grids = document.createElement("div");
const footer = document.createElement("footer");

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

/* Create the PC grid */

const playerGrid = document.createElement("div");
playerGrid.classList.add("playerGrid");
grids.appendChild(playerGrid);
for (let i = 0; i < 10; i += 1) {
  const gridRow = document.createElement("div");
  gridRow.dataset.row = `${i}`;
  playerGrid.appendChild(gridRow);
  for (let j = 0; j < 10; j += 1) {
    const gridField = document.createElement("div");
    gridField.dataset.field = `${i},${j}`;
    const gridRowSelector = document.querySelector(`[data-row = "${i}"]`);
    gridRowSelector.appendChild(gridField);
  }
}

/* Create the player grid */
