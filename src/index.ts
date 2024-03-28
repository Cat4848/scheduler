import schedules from "./database/schedules";
import {
  displaySchedulesNames,
  displayScheduleInEditor,
  displayScheduleSelector
} from "./lib/display";
import { initModal } from "./lib/modal";
import { initScheduleForm } from "./features/addSchedule/addSchedule";
import { initDeleteSchedule } from "./features/deleteSchedule";

window.onload = () => {
  displaySchedulesNames(schedules);
  attachEventHandlerOnViewScheduleNames();
  initModal();
  initScheduleForm();
  initDeleteSchedule();
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
