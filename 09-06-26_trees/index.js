const { createBSNode, insertNode, findNode, findCommonParent } = require("./bsNode");

const insertArrayIntoNode = (arr, tree) => {
  for (const value of arr) {
    insertNode(tree, value);
  }
};

// Ex1
const tree1 = createBSNode();
insertArrayIntoNode(["H", "E", "S", "G", "L", "Y", "I"], tree1);

findNode(tree1, "H"); // should print true
findNode(tree1, "G"); // should print true
findNode(tree1, "Z"); // should print false
findNode(tree1, "F"); // should print false
findNode(tree1, "y"); // should print false - we didn't make the tree case sensitive!

// Ex2
const tree2 = createBSNode();
insertArrayIntoNode(["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"], tree2);

findCommonParent(tree2, "B", "I"); //should return "H"
findCommonParent(tree2, "B", "G"); //should return "E"
findCommonParent(tree2, "B", "L"); //should return "J"
findCommonParent(tree2, "L", "Y"); //should return "R"

// in the assignment it says this next one should return "J"
// but unless I send the parent it wouldn't make sense so I assume it's supposed to be H
findCommonParent(tree2, "E", "H");
