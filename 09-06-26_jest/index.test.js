const { isEven, removeAtLeastOne, simplify, validate } = require(".");

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

//Ex4
test("should receive an array and verify it contains booleans and return true if most are true else false", () => {
  const arrayWithoutBoolean = ["I", "have", "no", "boolean", 2];
  const mostlyTrueArr = [true, false, false, true, true];
  const mostlyFalseArr = [false, false, false, true];
  const mixedTrueArray = ["I", true, "have", "no", "boolean", 2, true, false];
  const mixedFalseArray = ["I", true, "have", "no", "boolean", 2, false];

  expect(validate(arrayWithoutBoolean)).toEqual({ error: "Need at least one boolean" });
  expect(validate(mostlyTrueArr)).toBeTruthy();
  expect(validate(mostlyFalseArr)).toBeFalsy();
  expect(validate(mixedTrueArray)).toBeTruthy();
  expect(validate(mixedFalseArray)).toBeFalsy();
});
