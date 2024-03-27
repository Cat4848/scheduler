import { ISchedule, IOperation } from "./definitions";

export function displaySchedulesNames(schedules: ISchedule<IOperation>[]) {
  const schedulesList = document.querySelector(
    ".viewer-schedule-list"
  ) as HTMLDivElement;
  schedulesList.innerHTML = "";

  const list = schedules.map((schedule) => {
    const scheduleName = document.createElement("input");
    scheduleName.type = "checkbox";
    scheduleName.className = "schedule-name";
    scheduleName.id = schedule.id;

    const label = document.createElement("label");
    label.htmlFor = schedule.id;
    label.innerText = `• ${schedule.name}`;

    label.append(scheduleName);
    return label;
  });
  schedulesList.append(...list);
}

interface DisplayScheduleInEditor {
  id: string;
  schedules: ISchedule<IOperation>[];
}
export function displayScheduleInEditor({
  id = "",
  schedules = []
}: DisplayScheduleInEditor) {
  const editor = document.querySelector(".editor-schedule") as HTMLDivElement;

  editor.textContent = "";
  const [schedule] = schedules.filter((schedule) => schedule.id === id);
  const { operations } = schedule;

  const scheduleName = document.querySelector(
    ".editor-schedule-name"
  ) as HTMLSpanElement;
  scheduleName.textContent = schedule.name;

  const operationsElements = operations.map((operation) => {
    const operationDescription = document.createElement("p");
    operationDescription.setAttribute("class", "operation-description");
    operationDescription.setAttribute("id", operation.id);
    operationDescription.innerText = `${operation.name} ${operation.description}`;
    return operationDescription;
  });

  editor.append(...operationsElements);
}

function displayScheduleSelector(schedule: HTMLParagraphElement) {
  schedule.classList;
}
