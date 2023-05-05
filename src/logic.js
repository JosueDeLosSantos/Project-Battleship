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
    result = { length: v.length, hits: v.hits, sunk: true };
  }
  if (v.length !== v.hits) {
    result = { length: v.length, hits: v.hits, sunk: false };
  }
  return result;
}

// 2- Create Gameboard factory

function big4(matrix) {
  const result = [];
  const side = () => Math.floor(Math.random() * 2);

  if (side() === 0) {
    const I = Math.floor(Math.random() * 10);
    const J = Math.floor(Math.random() * 7);
    result.push(matrix[I][J]);
    let record = result[0][1];
    for (let i = 0; i < 3; i += 1) {
      record += 1;
      result.push(matrix[result[0][0]][record]);
    }
  } else {
    const I = Math.floor(Math.random() * 7);
    const J = Math.floor(Math.random() * 10);
    result.push(matrix[I][J]);
    let record = result[0][0];
    for (let i = 0; i < 3; i += 1) {
      record += 1;
      result.push(matrix[record][result[0][1]]);
    }
  }
  return result;
}

function Coordinates(v, matrix) {
  const result = [];
  if (v === 4) {
    result.push(Ship(4));
    result.push(big4(matrix));
    return result;
  }
}

function updateBoard(arr, mArr) {
  const matrix = mArr;

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
 coordinates by calling the ship factory function. */
export function Gameboard() {
  const ships = [];
  let board = [];
  for (let i = 0; i < 10; i += 1) {
    const column = [];
    for (let j = 0; j < 10; j += 1) {
      column.push([i, j]);
    }
    board.push(column);
  }
  // Add first ship (the biggest one)
  ships.push(Coordinates(4, board));
  // Update board
  board = updateBoard(ships[0][1], board);
  return { ships, board };

  /* const four = [];
  const three = [];
  const two = [];
  const one = [];
  const side = () => Math.floor(Math.random() * 2); */
}
