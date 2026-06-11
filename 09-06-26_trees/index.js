const { createBSNode, insertNode, findNode } = require("./bsNode");

const myTree = createBSNode();
const nodeValues = ["H", "E", "S", "G", "L", "Y", "I"];

for (const value of nodeValues) {
  insertNode(myTree, value);
}

// Ex1
findNode(myTree, "H"); // should print true
findNode(myTree, "G"); // should print true
findNode(myTree, "Z"); // should print false
findNode(myTree, "F"); // should print false
findNode(myTree, "y"); // should print false - we didn't make the tree case sensitive!
