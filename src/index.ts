import schedules from "./database/schedules.js";
import {
  displaySchedulesNames,
  displayScheduleInEditor
} from "./lib/display.js";
import { initModal } from "./lib/modal.js";
import { initScheduleForm } from "./lib/addScheduleForm.js";

window.onload = () => {
  displaySchedulesNames(schedules);
  attachEventHandlerOnViewScheduleNames();
  initModal();
  initScheduleForm();
};

function attachEventHandlerOnViewScheduleNames() {
  const schedulesList = document.querySelectorAll(".schedule-name");

  if (schedulesList !== null) {
    schedulesList.forEach((schedule) => {
      schedule.addEventListener("click", () => {
        displayScheduleInEditor({ id: schedule.id, schedules: schedules });
      });
    });
  }
}
