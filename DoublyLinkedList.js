class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      return;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  insertAtEnd(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.insertAtBeginning(data);
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    node.prev = temp;
    temp.next = node;
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  printReverse() {
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    while (temp) {
      console.log(temp.data);
      temp = temp.prev;
    }
  }
}

const dll = new DoublyLinkedList();
dll.insertAtBeginning(1);
dll.insertAtBeginning(2);
dll.insertAtEnd(3);
dll.insertAtBeginning(4);
dll.insertAtEnd(5);
dll.print();
console.log("\n");
dll.printReverse();
