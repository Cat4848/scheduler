import { describe, expect, test } from "@jest/globals";
import { sum, product } from "./example";

test("adds numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("multiply numbers", () => {
  expect(product(1, 2)).toBe(2);
});
