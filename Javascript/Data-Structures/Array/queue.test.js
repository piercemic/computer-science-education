import { Queue } from "./queue.js";

it("Inserts an element at the end of the queue", () => {
  const element = { key: "value" };
  const actual = new Queue();
  actual.enqueue(element);
  const expected = { elements: { 0: { key: "value" } }, head: 0, tail: 1 };

  expect(actual).toMatchObject(expected);
});
