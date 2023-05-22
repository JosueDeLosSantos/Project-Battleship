# Project-Battleship

1- Begin your app by creating the Ship factory function.

    1. Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.

    2. REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.

    3. Ships should have a hit() function that increases the number of ‘hits’ in your ship.

    4. isSunk() should be a function that calculates it based on their length and the number of ‘hits’.

2- Create Gameboard factory.

    1. Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.

    2. Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

    3. Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

    4. Gameboards should keep track of missed attacks so they can display them properly.

    5. Gameboards should be able to report whether or not all of their ships have been sunk.

3. Create Player.

   1. Players can take turns playing the game by attacking the enemy Gameboard.

   2. The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).
