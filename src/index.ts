import schedules from "./database/schedules.js";
import {
  displaySchedulesNames,
  displayScheduleInEditor,
  displayScheduleSelector
} from "./lib/display.js";
import { initModal } from "./lib/modal.js";
import { initScheduleForm } from "./features/addSchedule.js";

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
    schedule.addEventListener("click", (e) => {
      displayScheduleInEditor({ id: schedule.id, schedules: schedules });
      displayScheduleSelector(e);
    });
  });
}
