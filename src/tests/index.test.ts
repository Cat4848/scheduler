import { expect, test } from "@jest/globals";
import { setup } from "./setup";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

test("Schedule Viewer and Schedule Editor appear on screen", () => {
  setup();
  expect(screen.getByText("Schedule Viewer")).toBeDefined();
  expect(screen.getByText("Schedule Editor")).toBeDefined();
});
