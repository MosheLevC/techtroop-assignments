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

module.exports = { isEven, removeAtLeastOne, simplify };
