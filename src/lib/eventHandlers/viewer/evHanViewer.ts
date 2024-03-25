import { ISchedule, IOperation } from "../../definitions";
import schedules from "../../../database/schedules.js";

export function displayScheduleInEditor(
  id: string,
  schedules: ISchedule<IOperation>[]
) {
  const editor = document.querySelector(".viewer-schedule-list");

  if (editor !== null) {
    const [{ operations }] = schedules.filter((schedule) => schedule.id === id);
    operations.forEach((operation) => {
      const operationDescription = document.createElement("p");
      operationDescription.setAttribute('class', 'operation-description');
    });
  }
}
