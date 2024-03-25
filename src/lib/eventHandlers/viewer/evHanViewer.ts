import { ISchedule, IOperation } from "../../definitions";
import schedules from "../../../database/schedules.js";

export function displayScheduleInEditor(
  id: string,
  schedules: ISchedule<IOperation>[]
) {
  const editor = document.querySelector(".viewer-schedule-list");

  if (editor !== null) {
    const [{ operations }] = schedules.filter((schedule) => schedule.id === id);
    
    const operationsElements = operations.map((operation) => {
      const operationDescription = document.createElement("p");
      operationDescription.setAttribute("class", "operation-description");
      operationDescription.setAttribute("id", operation.id);
      operationDescription.innerText = `${operation.name} ${operation.description}`;
      return operationDescription;
    });

    editor.append(...operationsElements);
  }
}
