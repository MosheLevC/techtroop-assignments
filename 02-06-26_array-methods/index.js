//as discussed I am only doing exercises 1, 4, 8, 9 in this assignment

import { inventory, studentScores, users } from "./data.js";

// exercise 1 map data differently
const emailsAndName = () =>
  users.map((user) => {
    return { email: user?.email, companyName: user?.company?.name };
  });

console.log(emailsAndName());
//////////////////////////////

// exercise 4 only names starting with C
const onlyNamesStartingInC = users.reduce((filteredNames, user) => {
  if (user.name[0] === "C") {
    filteredNames.push({ name: user.name });
  }
  return filteredNames;
}, []);

// const onlyNamesStartingInC = () =>
//   users
//     .filter((user) => user.name[0] === "C")
//     .map((user) => {
//       return {
//         name: user.name,
//       };
//     });

console.log(onlyNamesStartingInC);
//////////////////////////////

// exercise 8 calculate inventory value
const calculateInventoryValue = inventory.reduce((sum, product) => sum + product.price * product.quantity, 0);

console.log(calculateInventoryValue);
//////////////////////////////

// exercise 9 calculate grade amounts
const letter = (score) => (score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F");
const gradeCount = studentScores.reduce(
  (grade, score) => {
    return { ...grade, [letter(score)]: grade[letter(score)] + 1 };
  },
  { A: 0, B: 0, C: 0, F: 0 },
);

console.log(gradeCount);
