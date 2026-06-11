const createBSNode = (value) => ({
  value: value,
  leftChild: null,
  rightChild: null,
});

const insertNode = (node, newVal) => {
  if (!node.value) {
    node.value = newVal;
  } else if (newVal > node.value && node.rightChild) {
    insertNode(node.rightChild, newVal);
  } else if (newVal <= node.value && node.leftChild) {
    insertNode(node.leftChild, newVal);
  } else if (newVal <= node.value) {
    node.leftChild = createBSNode(newVal);
  } else {
    node.rightChild = createBSNode(newVal);
  }
};

module.exports = {
  createBSNode,
  insertNode,
  findNode,
};
