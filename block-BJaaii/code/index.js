class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
        return value;
    }
    pop() {
        this.stack.pop();
    }
    peek(index = this.stack.length - 1) {
        return this.stack[index];
    }
    reverse() {
        return this.stack.reverse();
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    displayStack() {
        return this.stack.toString();
    }
    get length() {
        return this.stack.length;
    }
}


class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue(item) {
        this.queue.shift(item);
    }
    peek(index = 0) {
        return this.queue[index];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    displayQueue() {
        return this.queue.toString();
    }
    get length() {
        return this.queue.length;
    }
}
