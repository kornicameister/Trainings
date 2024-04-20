import { SingleLinkedList } from "./linkedlist";
import { Node } from "./node";

// variation on linked list that appends faster without need
// to traverse entire structure to find the tail
export class SingleLinkedListFaster<T> extends SingleLinkedList<T> {
  tail: Node<T> | undefined;

  constructor() {
    super();
    this.tail = undefined;
  }

  append(value: T) {
    if (this.tail) {
      const node = new Node<T>(value);
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = new Node(value);
    }
    this.size++;
  }
}
