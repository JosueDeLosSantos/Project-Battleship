import "./style.css";

const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

/* Create header containing the game name and a box for game alerts */
// Template: http://en.battleship-game.org/

// header
const gameTitle = document.createElement("div");
const title = document.createElement("div");
title.classList.add("gTitle");
title.textContent = "Battleship";
gameTitle.appendChild(title);
const notificationBar = document.createElement("div");
const bar = document.createElement("div");
bar.classList.add("bar");
bar.textContent = "Place the ships.";
notificationBar.appendChild(bar);
header.appendChild(gameTitle);
header.appendChild(notificationBar);

/* Create the player grid */

/* Create the PC grid */
