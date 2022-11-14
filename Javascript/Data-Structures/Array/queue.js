/*
Description: A queue stores a list of items.

Common operations
  Queue.enqueue(): Inserts element at the end of the queue
  - Time Complexity: O(1)
  Queue.dequeue(): Removes an element from the start of the queue
  - Time Complexity: O(1)
  Queue.peek(): Gets the first element in the queue
  - Time Complexity: O(1)

Notes
  - First in first out (FIFO)
*/

export class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.elements[this.head];
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}
