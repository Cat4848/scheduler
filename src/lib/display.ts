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
    const wrapper = document.createElement("div");
    const operationTitle = document.createElement("span");
    operationTitle.textContent = `${operation.name}:`;
    operationTitle.className = "operation-title";
    const operationDescription = document.createElement("span");
    operationDescription.textContent = operation.description;
    wrapper.append(operationTitle, operationDescription);
    return wrapper;
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

export function displaySchNamesAfterDelete(schedules: HTMLParagraphElement[]) {
  const schedulesList = document.querySelector(
    ".viewer-schedule-list"
  ) as HTMLDivElement;
  schedulesList.innerHTML = "";

  const list = schedules.map((schedule) => {
    const scheduleName = document.createElement("p");
    scheduleName.className = "schedule-name";
    scheduleName.id = schedule.id;
    scheduleName.innerText = `${schedule.innerText}`;
    return scheduleName;
  });
  schedulesList.append(...list);
}
