import { Queue } from "./queue.js";

describe("Queue", () => {
  it("inserts an element at the end of the queue", () => {
    const element = { key: "value" };
    const actual = new Queue();
    actual.enqueue(element);
    const expected = { elements: { 0: { key: "value" } }, head: 0, tail: 1 };

    expect(actual).toMatchObject(expected);
  });

  it("removes an element at the end of the queue", () => {
    const element = { key: "value" };
    const actual = new Queue();
    actual.enqueue(element);
    const dequeued = actual.dequeue();
    const expected = { elements: {}, head: 1, tail: 1 };

    expect(dequeued).toMatchObject(element);
    expect(actual).toMatchObject(expected);
  });

  it("get the first element in the queue", () => {
    const actual = new Queue();
    const firstPeek = actual.peek();
    expect(firstPeek).toEqual(undefined);

    const element = { key: "value" };
    actual.enqueue(element);
    const secondPeek = actual.peek();

    expect(secondPeek).toMatchObject(element);
  });

  it("get number in queue and check if its empty", () => {
    const actual = new Queue();
    let queueLength = actual.length;
    let emptyQueue = actual.isEmpty;

    expect(queueLength).toEqual(0);
    expect(emptyQueue).toEqual(true);

    const element = { key: "value" };
    actual.enqueue(element);
    queueLength = actual.length;
    emptyQueue = actual.isEmpty;

    expect(queueLength).toEqual(1);
    expect(emptyQueue).toEqual(false);
  });
});
