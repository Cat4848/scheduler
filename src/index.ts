import schedules from "./database/schedules.js";
import {
  displaySchedulesNames,
  displayScheduleInEditor
} from "./lib/display.js";
import { initModal } from "./lib/modal.js";
import { initScheduleForm } from "./lib/sheduleForm.js";

window.onload = () => {
  displaySchedulesNames(schedules);
  attachEventHandlerOnViewScheduleNames();
  initModal();
  initScheduleForm();
};

export function attachEventHandlerOnViewScheduleNames() {
  const schedulesList = document.querySelectorAll(
    ".schedule-name"
  ) as NodeListOf<HTMLParagraphElement>;

  schedulesList.forEach((schedule) => {
    schedule.addEventListener("click", () => {
      displayScheduleInEditor({ id: schedule.id, schedules: schedules });
    });
  });
}
