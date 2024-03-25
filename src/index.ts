import schedules from "./database/schedules.js";
import { ISchedule, IOperation } from "./lib/definitions";

window.onload = () => {
  displaySchedulesNames(schedules);
};

function displaySchedulesNames(schedules: ISchedule<IOperation>[]) {
  const schedulesList = document.querySelector(".viewer-schedule-list");

  if (schedulesList !== null) {
    const list = schedules.map((schedule) => {
      const scheduleName = document.createElement("p");
      scheduleName.innerText = schedule.name;
      return scheduleName;
    });
    schedulesList.append(...list);
  }
}
