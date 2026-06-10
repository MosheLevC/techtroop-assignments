//Ex1

//should return true if n is even, false otherwise
const isEven = (n) => {
  return n % 2 == 0 ? true : false;
};

//Ex2
//should remove at least one element from the array `arr`
const removeAtLeastOne = (arr) => {
  let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
};

//Ex3
//should return a clean string without these symbols: "!", "#", ".", ",", "'"
const simplify = (str) => {
  let symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) == -1)
    .join("");
};

//Ex4
const validate = (arr) => {
  let trueBooleanCount = 0;
  let falseBooleanCount = 0;

  arr.forEach((element) => {
    if (element === true) trueBooleanCount++;
    if (element === false) falseBooleanCount++;
  });
  if (trueBooleanCount === 0 && falseBooleanCount === 0) {
    return { error: "Need at least one boolean" };
  } else if (trueBooleanCount > falseBooleanCount) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isEven, removeAtLeastOne, simplify, validate };
