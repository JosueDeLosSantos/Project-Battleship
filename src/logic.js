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
  if (v.length === v.hits) {
    return { length: v.length, hits: v.hits, sunk: true };
  }

  if (v.length !== v.hits) {
    return { length: v.length, hits: v.hits, sunk: false };
  }
}
