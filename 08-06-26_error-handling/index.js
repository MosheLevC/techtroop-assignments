import { readFile } from "fs";

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

//Ex 2

const readFileWithErrorHandling = (filePath, func) => {
  readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") return func(`File not found: ${filePath}`);
      if (err.code === "EISDIR") return func(`Expected a file, but found a directory: ${filePath}`);
      return func(`An error occurred: ${err.message}`);
    }

    // Success path
    func(`File read successfully. Size: ${data.length} bytes`);
  });
};
readFileWithErrorHandling("existing.txt", (result) => {
  console.log(result);
});
readFileWithErrorHandling("08-06-26_error-handling/existing.txt", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
