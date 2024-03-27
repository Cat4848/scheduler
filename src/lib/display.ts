import { ISchedule, IOperation } from "./definitions";

export function displaySchedulesNames(schedules: ISchedule<IOperation>[]) {
  const schedulesList = document.querySelector(
    ".viewer-schedule-list"
  ) as HTMLDivElement;
  schedulesList.innerHTML = "";

  const list = schedules.map((schedule) => {
    const scheduleName = document.createElement("p");
    scheduleName.className = "schedule-name";
    scheduleName.id = schedule.id;
    scheduleName.innerText = `• ${schedule.name}`;
    return scheduleName;
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

export function displayScheduleSelector(e: Event) {
  const schedulesName = document.querySelectorAll(
    ".schedule-name"
  ) as NodeListOf<HTMLParagraphElement>;

  schedulesName.forEach((schedule) => {
    schedule.classList.remove("schedule-name-selected");
  });

  const clickedSchedule = e.target as HTMLParagraphElement;
  clickedSchedule.classList.add("schedule-name-selected");
}
