class ListNode<T> {
  constructor(
    public value: T,
    public next: ListNode<T> | undefined = undefined,
  ) {
    this.value = value;
  }
}

export class SingleLinkedList<T> {
  head: ListNode<T> | undefined;
  size: number;

  constructor() {
    this.head = undefined;
    this.size = 0;
  }

  append(value: T) {
    if (this.head === undefined) {
      this.head = new ListNode(value);
    } else {
      let tail: ListNode<T> | undefined = this.head;
      while (tail?.next !== undefined) {
        tail = tail.next;
      }
      const next = new ListNode(value);
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

export class SingleLinkedListFaster<T> extends SingleLinkedList<T> {
  tail: ListNode<T> | undefined;

  constructor() {
    super();
    this.tail = undefined;
  }

  append(value: T) {
    if (this.tail) {
      const node = new ListNode<T>(value);
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = new ListNode(value);
    }
    this.size++;
  }
}
