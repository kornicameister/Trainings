import { Node } from "./node";

export class SingleLinkedList<T> {
  head: Node<T> | undefined;
  size: number;

  constructor() {
    this.head = undefined;
    this.size = 0;
  }

  append(value: T) {
    if (this.head === undefined) {
      this.head = new Node(value);
    } else {
      let tail: Node<T> | undefined = this.head;
      while (tail?.next !== undefined) {
        tail = tail.next;
      }
      const next = new Node(value);
      if (tail) {
        tail.next = next;
      }
    }
    this.size++;
  }

  isEmpty() {
    return this.head === undefined;
  }

  forEach(fn: (v: T) => void) {
    let tail = this.head;
    while (tail !== undefined) {
      fn(tail.value);
      tail = tail.next;
    }
  }
}
