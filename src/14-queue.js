const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  get size() {
    return this.count;
  }

  enqueue(element) {
    const newNode = new ListNode(element);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.count++;
    return this;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
      this.count--;
    } else {
      this.head = null;
      this.tail = null;
      this.count--;
    }
    return deletedHead.value;
  }
}

module.exports = Queue;
