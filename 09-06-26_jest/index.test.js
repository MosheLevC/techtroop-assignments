const { isEven } = require(".");

test("should return boolean of if it's even", () => {
  const odd = isEven(3);
  const even = isEven(8);
  expect(odd).toBeFalsy();
  expect(even).toBeTruthy();
});
