import { expect, test } from "@jest/globals";
import { setup } from "./setup";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

test("Schedule Viewer and Schedule Editor appear on screen", () => {
  setup();
  expect(screen.getByText("Schedule Viewer")).toBeDefined();
  expect(screen.getByText("Schedule Editor")).toBeDefined();
  // const container = displaySchedulesNames(schedules);
  // const header = document.querySelector(
  //   "#schedule-viewer-header"
  // ) as HTMLHeadingElement;
  // const text = header.innerHTML;
  // expect(text).toBe("Schedule Viewer");
});
