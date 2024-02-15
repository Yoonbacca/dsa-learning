class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, pri) {
    let newNode = new Node(val, pri);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    const elementPri = element.priority;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      let parentPri = parent.priority;
      if (elementPri >= parentPri) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    let elementPri = element.priority;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild, leftChildPri, rightChildPri;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        leftChildPri = leftChild.priority;
        if (leftChildPri < elementPri) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        rightChildPri = rightChild.priority;
        if (
          (swap === null && rightChildPri < elementPri) ||
          (swap !== null && rightChildPri > leftChildPri)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let queue = new PriorityQueue();
queue.enqueue("C", 3);
queue.enqueue("A", 1);
queue.enqueue("B", 2);
queue.enqueue("D", 4);
queue.enqueue("F", 6);
queue.enqueue("S", 0);
queue.dequeue();
console.log(queue);
