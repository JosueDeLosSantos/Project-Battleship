import * as testMod from "./logic.js";

test("Receive a value and return an object containing: length, hits, and whether or not they've been sunk", () => {
  expect(testMod.Ship(4)).toEqual({ length: 4, hits: 0, sunk: false });
});

test("increases the number of hits in your ship", () => {
  expect(testMod.hit(testMod.Ship(4))).toEqual({
    length: 4,
    hits: 1,
    sunk: false,
  });
});

let mockValue = testMod.Ship(4);
// hit the ship 4 times
for (let i = 0; i < 4; i++) {
  mockValue = testMod.hit(mockValue);
}

test("calculates it based on their length and the number of hits", () => {
  expect(testMod.isSunk(mockValue)).toEqual(true);
});

let board = [];
for (let i = 0; i < 10; i += 1) {
  board.push([]);
  for (let j = 0; j < 10; j += 1) {
    board[i].push([i, j]);
  }
}

const Gameboards = testMod.Gameboard();

test("Gameboards should be able to place ships at specific coordinates", () => {
  // ship length 4
  expect(Gameboards.ships[0][1]).toHaveLength(4);
  expect(Gameboards.ships[0][1][0]).toHaveLength(2);
  expect(Gameboards.ships[0][1][1]).toHaveLength(2);
  expect(Gameboards.ships[0][1][2]).toHaveLength(2);
  expect(Gameboards.ships[0][1][3]).toHaveLength(2);
  // ship length 3
  expect(Gameboards.ships[1][1]).toHaveLength(3);
  expect(Gameboards.ships[1][1][0]).toHaveLength(2);
  expect(Gameboards.ships[1][1][1]).toHaveLength(2);
  expect(Gameboards.ships[1][1][2]).toHaveLength(2);

  expect(Gameboards.ships[2][1]).toHaveLength(3);
  expect(Gameboards.ships[2][1][0]).toHaveLength(2);
  expect(Gameboards.ships[2][1][1]).toHaveLength(2);
  expect(Gameboards.ships[2][1][2]).toHaveLength(2);

  // ship length 2
  expect(Gameboards.ships[3][1]).toHaveLength(2);
  expect(Gameboards.ships[3][1][0]).toHaveLength(2);
  expect(Gameboards.ships[3][1][1]).toHaveLength(2);

  expect(Gameboards.ships[4][1]).toHaveLength(2);
  expect(Gameboards.ships[4][1][0]).toHaveLength(2);
  expect(Gameboards.ships[4][1][1]).toHaveLength(2);

  expect(Gameboards.ships[5][1]).toHaveLength(2);
  expect(Gameboards.ships[5][1][0]).toHaveLength(2);
  expect(Gameboards.ships[5][1][1]).toHaveLength(2);

  // ship length 1
  expect(Gameboards.ships[6][1]).toHaveLength(1);
  expect(Gameboards.ships[6][1][0]).toHaveLength(2);

  expect(Gameboards.ships[7][1]).toHaveLength(1);
  expect(Gameboards.ships[7][1][0]).toHaveLength(2);

  expect(Gameboards.ships[8][1]).toHaveLength(1);
  expect(Gameboards.ships[8][1][0]).toHaveLength(2);

  expect(Gameboards.ships[9][1]).toHaveLength(1);
  expect(Gameboards.ships[9][1][0]).toHaveLength(2);
});

const mockBoard = {
  allShipsSunk: false,
  board: [
    [[0, 0], [], [], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9]],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
      [1, 8],
      [1, 9],
    ],
    [[], [], [], [], [2, 4], [2, 5], [2, 6], [], [2, 8], [2, 9]],
    [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [], [3, 6], [], [3, 8], [3, 9]],
    [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [], [4, 8], []],
    [[5, 0], [5, 1], [], [], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], []],
    [
      [6, 0],
      [6, 1],
      [6, 2],
      [6, 3],
      [6, 4],
      [6, 5],
      [6, 6],
      [6, 7],
      [6, 8],
      [],
    ],
    [
      [7, 0],
      [7, 1],
      [7, 2],
      [],
      [7, 4],
      [7, 5],
      [7, 6],
      [7, 7],
      [7, 8],
      [7, 9],
    ],
    [[8, 0], [], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [], [8, 8], [8, 9]],
    [[9, 0], [9, 1], [9, 2], [], [9, 4], [9, 5], [9, 6], [], [9, 8], [9, 9]],
  ],
  missedShot: [],
  ships: [
    [
      { hits: 0, length: 4, sunk: false },
      [
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
      ],
    ],
    [
      { hits: 0, length: 3, sunk: false },
      [
        [2, 7],
        [3, 7],
        [4, 7],
      ],
    ],
    [
      { hits: 0, length: 3, sunk: false },
      [
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    ],
    [
      { hits: 0, length: 2, sunk: false },
      [
        [0, 1],
        [0, 2],
      ],
    ],
    [
      { hits: 0, length: 2, sunk: false },
      [
        [8, 7],
        [9, 7],
      ],
    ],
    [
      { hits: 0, length: 2, sunk: false },
      [
        [5, 2],
        [5, 3],
      ],
    ],
    [{ hits: 0, length: 1, sunk: false }, [[8, 1]]],
    [{ hits: 0, length: 1, sunk: false }, [[7, 3]]],
    [{ hits: 0, length: 1, sunk: false }, [[3, 5]]],
    [{ hits: 0, length: 1, sunk: false }, [[9, 3]]],
  ],
};

test("receiveAttack function takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the hit function to the correct ship, or records the coordinates of the missed shot", () => {
  /* receiveAttack should be able to report whether or not all of their ships have been sunk. */

  let mockRa = testMod.receiveAttack([2, 0], mockBoard);
  expect(mockRa.allShipsSunk).toBeFalsy();
  mockRa = testMod.receiveAttack([2, 1], mockRa);
  mockRa = testMod.receiveAttack([2, 2], mockRa);
  mockRa = testMod.receiveAttack([2, 3], mockRa);

  mockRa = testMod.receiveAttack([2, 7], mockRa);
  mockRa = testMod.receiveAttack([3, 7], mockRa);
  mockRa = testMod.receiveAttack([4, 7], mockRa);

  mockRa = testMod.receiveAttack([4, 9], mockRa);
  mockRa = testMod.receiveAttack([5, 9], mockRa);
  mockRa = testMod.receiveAttack([6, 9], mockRa);

  mockRa = testMod.receiveAttack([0, 1], mockRa);
  mockRa = testMod.receiveAttack([0, 2], mockRa);

  mockRa = testMod.receiveAttack([8, 7], mockRa);
  mockRa = testMod.receiveAttack([9, 7], mockRa);

  mockRa = testMod.receiveAttack([5, 2], mockRa);
  mockRa = testMod.receiveAttack([5, 3], mockRa);

  mockRa = testMod.receiveAttack([8, 1], mockRa);
  mockRa = testMod.receiveAttack([7, 3], mockRa);
  mockRa = testMod.receiveAttack([3, 5], mockRa);
  mockRa = testMod.receiveAttack([9, 3], mockRa);
  expect(mockRa.allShipsSunk).toBeTruthy();

  // Register ships attacked
  expect(mockRa.ships[9][0].hits).toBe(1);
  // receiveAttack should keep track of missed attacks so they can display them properly
  const missedShot = [0, 0];
  mockRa = testMod.receiveAttack(missedShot, mockRa);
  expect(mockRa.missedShot[0]).toEqual(missedShot);
});
