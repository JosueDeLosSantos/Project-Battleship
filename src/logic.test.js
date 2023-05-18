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

test("receiveAttack function takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the hit function to the correct ship, or records the coordinates of the missed shot", () => {
  const mockRa = testMod.receiveAttack([0, 0], Gameboards);
  const mockRa1 = testMod.receiveAttack([0, 1], Gameboards);
  const mockRa2 = testMod.receiveAttack([0, 2], Gameboards);
  const mockRa3 = testMod.receiveAttack([0, 3], Gameboards);
  const mockRa4 = testMod.receiveAttack([0, 4], Gameboards);
  const mockRa5 = testMod.receiveAttack([0, 5], Gameboards);
  const mockRa6 = testMod.receiveAttack([0, 6], Gameboards);
  const mockRa7 = testMod.receiveAttack([0, 7], Gameboards);
  const mockRa8 = testMod.receiveAttack([0, 8], Gameboards);
  const mockRa9 = testMod.receiveAttack([0, 9], Gameboards);

  expect(mockRa).toEqual(false);
  expect(mockRa1).toEqual(false);
  expect(mockRa2).toEqual(false);
  expect(mockRa3).toEqual(false);
  expect(mockRa4).toEqual(false);
  expect(mockRa5).toEqual(false);
  expect(mockRa6).toEqual(false);
  expect(mockRa7).toEqual(false);
  expect(mockRa8).toEqual(false);
  expect(mockRa9).toEqual(false);

  /* if (mockRa === true) {
    expect(mockRa).toEqual(true);
  } else {
    expect(mockRa).toEqual(false);
  } */
});
