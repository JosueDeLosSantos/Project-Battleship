import big4 from "./big4";
import big3 from "./big3";
import big2 from "./big2";
import big1 from "./big1";

// # Project-Battleship

// 1- Begin your app by creating the Ship factory function.
/* 1. Your ‘ships’ will be objects that include their length,
the number of times they’ve been hit and whether or not they’ve been sunk. */
export function Ship(v) {
  return { length: v, hits: 0, sunk: false };
}

// 3. Ships should have a hit() function that increases the number of ‘hits’ in your ship.
export function hit(v) {
  return { length: v.length, hits: v.hits + 1, sunk: v.sunk };
}

/* 4. isSunk() should be a function that calculates it based on their length and the
number of ‘hits’. */
export function isSunk(v) {
  let result = null;
  if (v.length === v.hits) {
    result = true;
  }
  if (v.length !== v.hits) {
    result = false;
  }
  return result;
}

// 2- Create Gameboard factory

export function Coordinates(v, matrix) {
  const result = [];
  if (v === 4) {
    result.push(Ship(4));
    result.push(big4(matrix));
    return result;
  }
  if (v === 3) {
    result.push(Ship(3));
    result.push(big3(matrix));
    return result;
  }
  if (v === 2) {
    result.push(Ship(2));
    result.push(big2(matrix));
    return result;
  }
  if (v === 1) {
    result.push(Ship(1));
    result.push(big1(matrix));
    return result;
  }
}

function updateBoard(arr, matrix) {
  arr.forEach((element) => {
    matrix.forEach((matrixEl) => {
      matrixEl.forEach((el) => {
        if (el === element) {
          const found = (findEl) => findEl === element;
          const mainIndex = matrixEl.findIndex(found);
          matrixEl[mainIndex] = [];
        }
      });
    });
  });
  return matrix;
}

/* 1. Gameboards should be able to place ships at specific
 coordinates */
export function Gameboard() {
  const ships = [];
  let board = [];
  const missedShot = [];
  const allShipsSunk = false;
  for (let i = 0; i < 10; i += 1) {
    board.push([]);
    for (let j = 0; j < 10; j += 1) {
      board[i].push([i, j]);
    }
  }
  // Add first ship (the biggest one) and  update board
  ships.push(Coordinates(4, board));
  board = updateBoard(ships[0][1], board);
  // Add two smaller ships and update board
  for (let i = 1; i < 3; i += 1) {
    ships.push(Coordinates(3, board));
    board = updateBoard(ships[i][1], board);
  }
  // Add three even smaller ships and update board
  for (let i = 3; i < 6; i += 1) {
    ships.push(Coordinates(2, board));
    board = updateBoard(ships[i][1], board);
  }
  // Add the four smallest ships and update board
  for (let i = 6; i < 10; i += 1) {
    ships.push(Coordinates(1, board));
    board = updateBoard(ships[i][1], board);
  }
  return { ships, missedShot, board, allShipsSunk };
}

/* 3. Gameboards should have a receiveAttack function that takes a pair of coordinates,
 determines whether or not the attack hit a ship and then sends the ‘hit’ function to 
 the correct ship, or records the coordinates of the missed shot. */

export function receiveAttack(C1, GameboardStatus) {
  const C2 = GameboardStatus;

  for (let i = 0; i < C2.ships.length; i += 1) {
    for (let j = 0; j < C2.ships[i][1].length; j += 1) {
      // determines whether or not the attack hit a ship
      if (JSON.stringify(C1) === JSON.stringify(C2.ships[i][1][j])) {
        C2.ships[i][0] = hit(C2.ships[i][0]);
        // determines whether or not the ship is sunk
        if (isSunk(C2.ships[i][0])) {
          C2.ships[i][0].sunk = true;
        }
      }
    }
  }
  // keep track of missed attacks
  for (let i = 0; i < C2.board.length; i += 1) {
    for (let j = 0; j < C2.board[i].length; j += 1) {
      if (JSON.stringify(C1) === JSON.stringify(C2.board[i][j])) {
        C2.missedShot.push(C1);
      }
    }
  }
  // determines whether or not all ships are sunk
  let count = 0;
  for (let i = 0; i < C2.ships.length; i += 1) {
    if (C2.ships[i][0].sunk === true) {
      count += 1;
    }
  }
  if (count === 10) {
    C2.allShipsSunk = true;
  }
  return C2;
}
