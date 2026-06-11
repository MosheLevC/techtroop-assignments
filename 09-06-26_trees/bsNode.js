const createBSNode = (value) => ({
  value: value,
  leftChild: null,
  rightChild: null,
});

const insertNode = (node, newVal) => {
  if (node.value === undefined || node.value === null) {
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

const findNode = (node, searchedValue) => {
  if (node.value === undefined || node.value === null) {
    console.log(false);
    return false;
  }
  if (node.value === searchedValue) {
    console.log(true);
    return true;
  } else if (searchedValue > node.value && node.rightChild) {
    return findNode(node.rightChild, searchedValue);
  } else if (searchedValue <= node.value && node.leftChild) {
    return findNode(node.leftChild, searchedValue);
  }
  console.log(false);
  return false;
};

module.exports = {
  createBSNode,
  insertNode,
  findNode,
};
