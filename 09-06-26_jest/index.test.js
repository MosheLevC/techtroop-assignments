const { isEven, removeAtLeastOne } = require(".");

//Ex1
test("should return boolean of if it's even", () => {
  const odd = isEven(3);
  const even = isEven(8);
  expect(odd).toBeFalsy();
  expect(even).toBeTruthy();
});

//Ex2
test("should contain less items than original array", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(removeAtLeastOne([...arr]).length).toBeLessThan(arr.length);
});
