class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  insertAtEnd(data) {
    if (this.head === null) {
      this.insertAtBeginning(data);
      return;
    }

    const node = new Node(data);

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = node;
  }

  insertAt(data, index) {
    if (this.head === null || index === 1) {
      this.insertAtBeginning(data);
      return;
    }

    const node = new Node(data);
    let temp = this.head;
    let counter = 0;
    while (counter < index - 2) {
      if (temp.next === null) return;
      temp = temp.next;
      counter++;
    }
    node.next = temp.next;
    temp.next = node;
  }

  deleteAtBeginning() {
    if (this.head === null) return;

    this.head = this.head.next;
  }

  deleteAtEnd() {
    let temp = this.head;
    let counter = 0;
    while (temp.next) {
      temp = temp.next;
      counter++;
    }

    temp = this.head;
    for (let i = 0; i < counter - 1; i++) {
      temp = temp.next;
    }

    temp.next = null;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  reverseRecursion(node = this.head) {
    if (node.next === null) {
      this.head = node;
      return;
    }

    this.reverseRecursion(node.next);

    let temp = node.next;
    temp.next = node;
    node.next = null;
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const l = new LinkedList();
l.insertAtBeginning(1);
l.insertAtEnd(2);
l.insertAtBeginning(3);
l.insertAtEnd(4);
l.insertAt(5, 2);
l.deleteAtBeginning();
l.deleteAtEnd();
l.print();
console.log("\n");
l.reverse();
l.print();
console.log("\n");
l.reverseRecursion();
l.print();
