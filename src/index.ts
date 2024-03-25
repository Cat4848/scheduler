import schedules from "./database/schedules.js";
import { ISchedule, IOperation } from "./lib/definitions";

window.onload = () => {
  displaySchedulesNames(schedules);
  attachEventHandlerOnViewScheduleNames();
};

function displaySchedulesNames(schedules: ISchedule<IOperation>[]) {
  const schedulesList = document.querySelector(".viewer-schedule-list");

  if (schedulesList !== null) {
    const list = schedules.map((schedule) => {
      const scheduleName = document.createElement("p");
      scheduleName.setAttribute("class", "schedule-name");
      scheduleName.setAttribute("id", schedule.id);
      scheduleName.innerText = schedule.name;
      return scheduleName;
    });
    schedulesList.append(...list);
  }
}

function attachEventHandlerOnViewScheduleNames() {
  const schedulesList = document.querySelectorAll(".schedule-name");

  if (schedulesList !== null) {
    schedulesList.forEach((schedule) => {
      schedule.addEventListener("click", () =>
      );
    });
  }
}
