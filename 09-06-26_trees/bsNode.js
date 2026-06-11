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

const findCommonParent = (node, num1, num2) => {
  if (node.value === num1 || node.value === num2) {
    console.log(node.value);
    return node.value;
  }
  if ((num1 > node.value && num2 < node.value) || (num1 < node.value && num2 > node.value)) {
    console.log(node.value);
    return node.value;
  }
  if (num1 > node.value && num2 > node.value) {
    findCommonParent(node.rightChild, num1, num2);
  }
  if (num1 < node.value && num2 < node.value) {
    findCommonParent(node.leftChild, num1, num2);
  }
};

module.exports = {
  createBSNode,
  insertNode,
  findNode,
  findCommonParent,
};
