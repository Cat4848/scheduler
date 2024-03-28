import "@testing-library/jest-dom";
import { expect, test } from "@jest/globals";
import { screen } from "@testing-library/dom";
import { setupWithSchedules } from "./setup";

test("if schedules names appear on screen", async () => {
  const user = setupWithSchedules();

  const scheduleNames = screen.getAllByTestId("schedule-name-test-id");
  const firstSchedule = scheduleNames[0];
  await user.click(firstSchedule);

  const scheduleNameInEditor = document.querySelector(
    ".editor-schedule-name"
  ) as HTMLSpanElement;
  expect(scheduleNameInEditor.textContent).toBe("Blood Test Schedule");
});
