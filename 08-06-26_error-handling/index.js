//Ex 1
const safeJsonParse = (stringifiedJson) => {
  try {
    return JSON.parse(stringifiedJson);
  } catch (error) {
    return "Invalid JSON format";
  }
};
console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse("invalid json"));
// Output: "Invalid JSON format"
