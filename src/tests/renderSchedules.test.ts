import "@testing-library/jest-dom";
import { expect, test } from "@jest/globals";
import { screen } from "@testing-library/dom";
import { setup } from "./setup";
import { displaySchedulesNames } from "../lib/display";
import schedules from "../database/schedules";

test("if schedules names appear on screen", () => {
  setup();
  displaySchedulesNames(schedules);

  const scheduleNames = screen.getAllByTestId("schedule-name-test-id");
  const firstSchedule = scheduleNames[0].innerText;
  const secondSchedule = scheduleNames[1].innerText;
  expect(firstSchedule).toBe("• Blood Test Schedule");
  expect(secondSchedule).toBe("• Elephant Toothpaste");
});
