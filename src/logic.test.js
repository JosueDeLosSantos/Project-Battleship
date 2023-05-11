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

let mockValue = jest.fn(testMod.Ship(4));

for (let i = 0; i < 3; i++) {
  mockValue = jest.fn(testMod.hit(mockValue));
}

test("calculates it based on their length and the number of hits", () => {
  expect(testMod.isSunk(mockValue)).toEqual(testMod.isSunk(mockValue));
});

test("Receives a number and an array and returns a different array which length is the same as the number parameter", () => {
  expect().toEqual();
});
