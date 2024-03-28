import { displaySchNames } from "../lib/display.js";
import { attachEventHandlerOnViewScheduleNames } from "../index.js";
import { displayMessage } from "../lib/message.js";

export function initDeleteSchedule() {
  const deleteButton = document.querySelector(
    ".btn-delete-schedule"
  ) as HTMLButtonElement;
  deleteButton.addEventListener("click", findSelectedSchedule);
}

function findSelectedSchedule() {
  const selectedSchedule = document.querySelector(
    ".schedule-name-selected"
  ) as HTMLParagraphElement;
  if (!selectedSchedule) {
    const errorMessage = "Please select a schedule to delete";
    displayMessage("error", errorMessage);
  } else {
    const selectedScheduleId = selectedSchedule.getAttribute("id");
    const displayedSchedules = Array.from(
      document.querySelectorAll(
        ".schedule-name"
      ) as NodeListOf<HTMLParagraphElement>
    );
    const updatedSchedules = displayedSchedules.filter(
      (schedule) => schedule.id !== selectedScheduleId
    );

    displaySchNames(updatedSchedules);
    attachEventHandlerOnViewScheduleNames();
    const scheduleEditor = document.querySelector(
      ".editor-schedule"
    ) as HTMLDivElement;
    scheduleEditor.innerText = "";
    const successMessage = "Schedule Deleted";
    displayMessage("success", successMessage);
  }
}
