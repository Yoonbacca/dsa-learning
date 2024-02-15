class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(val) {
    if (this.root === null) {
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return current;
      else if (val > current.value) {
        if (current.right === null) {
          return undefined;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          return undefined;
        }
        current = current.left;
      }
    }
  }
  bfs() {
    if (this.root === null) return undefined;
    let queue = [],
      allValues = [],
      current = this.root;
    queue.push(current);
    while (queue.length) {
      allValues.push(queue[0].value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      queue.shift();
      current = queue[0];
    }
    return allValues;
  }
  preorder() {
    if (this.root === null) return undefined;
    let allValues = [];
    function traverse(node) {
      allValues.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return allValues;
  }
  postorder() {
    if (this.root === null) return undefined;
    let allValues = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      allValues.push(node.value);
    }
    traverse(this.root);
    return allValues;
  }
  inorder() {
    if (this.root === null) return undefined;
    let allValues = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      allValues.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return allValues;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

//              10
//          5      13
//       2     7  11   16
console.log(tree.bfs());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
