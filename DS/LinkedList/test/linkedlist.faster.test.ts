import { describe, expect, it } from "vitest";

import { SingleLinkedListFaster as SingleLinkedList } from "../src";

describe("LinkedList", () => {
  describe("SingleLinkedList", () => {
    it("should be empty", () => {
      const list = new SingleLinkedList<number>();
      expect(list.isEmpty()).toBe(true);
    });
    it("should append single value to linked list", () => {
      const list = new SingleLinkedList<number>();

      list.append(1);

      expect(list.isEmpty()).toBe(false);
      expect(list.head?.value).toStrictEqual(1);
      expect(list.head?.next).toBeUndefined();

      expect(list.size).toStrictEqual(1);
    });
    it("should append two values to linked list", () => {
      const list = new SingleLinkedList<number>();

      list.append(1);
      list.append(2);

      expect(list.isEmpty()).toBe(false);
      expect(list.head?.value).toStrictEqual(1);

      expect(list.head?.next).toBeDefined();
      expect(list.head?.next?.value).toStrictEqual(2);

      expect(list.size).toStrictEqual(2);
    });
    it("should append three values to linked list", () => {
      const list = new SingleLinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.isEmpty()).toBe(false);
      expect(list.head?.value).toStrictEqual(1);

      expect(list.head?.next).toBeDefined();
      expect(list.head?.next?.value).toStrictEqual(2);

      expect(list.head?.next?.next).toBeDefined();
      expect(list.head?.next?.next?.value).toStrictEqual(3);

      expect(list.size).toStrictEqual(3);
    });
    it("should append multiple values to linked list", () => {
      const list = new SingleLinkedList();

      for (let x = 0; x < 100; x++) {
        list.append(x);
      }
      expect(list.isEmpty()).toBe(false);
      expect(list.size).toStrictEqual(100);
    });
    it("should iterate over the list", () => {
      const list = new SingleLinkedList();
      list.append("test");
      list.append("me");
      list.append("please");
      list.forEach(console.log);
    });
  });
});
