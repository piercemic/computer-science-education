/*
Description: A stack takes an array of items.

Common operations
  Push: Inserts an element at the top
  Pop: Returns the top element after removing it from the stack

Notes
- Last in last out (LILO)
*/

class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(newValue) {
    this.stack.push(newValue);
    this.top++;
  }

  pop() {
    if (this.top !== 0) {
      this.top--;
      return this.stack.pop();
    }
    throw new Error("Stack Underflow");
  }

  get length() {
    return this.top;
  }

  get isEmpty() {
    return this.top === 0;
  }

  get last() {
    if (this.top !== 0) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }
}
