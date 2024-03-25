import { ISchedule, IOperation } from "../../definitions";

interface DisplayScheduleInEditor {
  id: string;
  schedules: ISchedule<IOperation>[];
}

export function displayScheduleInEditor({
  id = "",
  schedules = []
}: DisplayScheduleInEditor) {
  const editor = document.querySelector(".editor-schedule");

  if (editor !== null) {
    editor.textContent = "";
    const [schedule] = schedules.filter((schedule) => schedule.id === id);
    const { operations } = schedule;

    const scheduleName = document.querySelector(".editor-schedule-name");
    if (scheduleName !== null) {
      scheduleName.textContent = schedule.name;
    }

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
