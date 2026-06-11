const { createBSNode, insertNode } = require("./bsNode");

const myTree = createBSNode();
const nodeValues = ["H", "E", "S", "G", "L", "Y", "I"];
for (const value of nodeValues) {
  insertNode(myTree, value);
}
console.log(myTree);
