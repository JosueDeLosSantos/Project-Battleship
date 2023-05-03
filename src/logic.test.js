import * as testMod from "./logic.js";

test("adds 1 + 2 to equal 3", () => {
  expect(testMod.sum(1, 2)).toBe(3);
});
