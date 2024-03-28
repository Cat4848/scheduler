import { setup } from "./setup";
import userEvent from "@testing-library/user-event";
import { expect, test } from "@jest/globals";
import { screen } from "@testing-library/dom";

test("if the modal is rendered", async () => {
  setup();
  const user = userEvent.setup();

  const addScheduleButton = document.querySelector(
    "#btn-open-modal"
  ) as HTMLButtonElement;
  await user.click(addScheduleButton);

  const scheduleNameLabel = screen.getByLabelText("Schedule Name");
  expect(scheduleNameLabel).toBeDefined();
});
