const { isEven, removeAtLeastOne, simplify } = require(".");

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

//Ex3
test(`should remove special charachters: "!", "#", ".", ",", "'"`, () => {
  const complexString = "hey! how you doing? that's nice, you know what they say. #can'twinthemall";
  expect(simplify(complexString)).toMatch(/^[^!#.,']*$/);
  expect(simplify(complexString)).toMatch("hey how you doing? thats nice you know what they say cantwinthemall");
  expect(simplify(complexString)).not.toContain("!");
  expect(simplify(complexString)).not.toContain("#");
  expect(simplify(complexString)).not.toContain(".");
  expect(simplify(complexString)).not.toContain(",");
  expect(simplify(complexString)).not.toContain("'");
});
