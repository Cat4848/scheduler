import createId from "../lib/createId.js";
import {
  createInputGroup,
  createHeading,
  createInput,
  createLabel
} from "../lib/creators.js";
import {
  getOperationName,
  getOperationDescription,
  getOperationDuration
} from "../lib/getters.js";
import { Schedule, Operation } from "../lib/classes.js";
import { IOperation, ISchedule } from "../lib/definitions.js";
import schedules from "../database/schedules.js";
import { displaySchedulesNames } from "../lib/display.js";
import { attachEventHandlerOnViewScheduleNames } from "../index.js";

const operationName = "operation-name";
const operationDescription = "operation-description";
const operationDuration = "operation-duration";

export function initScheduleForm() {
  const select = document.querySelector(
    ".select-nr-operations"
  ) as HTMLSelectElement;
  select.addEventListener("change", buildOperationsForm);
  const scheduleForm = document.querySelector(
    ".schedule-form"
  ) as HTMLFormElement;
  scheduleForm.onsubmit = submitForm;
}

function buildOperationsForm(e: Event) {
  const operationsValue = (e.target as HTMLSelectElement).value;
  const nrOperations = Number(operationsValue);
  const form = document.querySelector(
    ".schedule-form-dynamic-content"
  ) as HTMLFormElement;
  form.innerHTML = "";

  for (let i = 1; i <= nrOperations; i++) {
    const inputGroup = createInputGroup("input-group");
    const operationHeading = createHeading(i);
    const operationNameLabel = createLabel({
      id: i,
      name: operationName,
      text: "Name"
    });
    const operationNameInput = createInput({
      id: i,
      name: operationName,
      type: "text"
    });

    const operationDescriptionLabel = createLabel({
      id: i,
      name: operationDescription,
      text: "Description"
    });
    const operationDescriptionInput = createInput({
      id: i,
      name: operationDescription,
      type: "textarea"
    });

    const operationDurationLabel = createLabel({
      id: i,
      name: operationDuration,
      text: "Duration in seconds"
    });
    const operationDurationInput = createInput({
      id: i,
      name: operationDuration,
      type: "number"
    });

    inputGroup.append(
      operationHeading,
      operationNameLabel,
      operationNameInput,
      operationDescriptionLabel,
      operationDescriptionInput,
      operationDurationLabel,
      operationDurationInput
    );
    form.append(inputGroup);
  }
}

function submitForm(e: Event) {
  e.preventDefault();
  e.stopPropagation();
  const form = e.target as HTMLFormElement;

  const nrOperations = (
    form.querySelector("[name=nr-operations]") as HTMLInputElement
  ).value;
  const scheduleName = (
    form.querySelector(`[name=schedule-name]`) as HTMLInputElement
  ).value;
  const operations: IOperation[] = [];

  for (let i = 1; i <= Number(nrOperations); i++) {
    const operationNameValue = getOperationName({
      id: i,
      name: operationName,
      form
    });
    const operationDescriptionValue = getOperationDescription({
      id: i,
      name: operationDescription,
      form
    });
    const operationDurationValue = getOperationDuration({
      id: i,
      name: operationDuration,
      form
    });
    const operation = new Operation({
      id: createId(),
      name: operationNameValue,
      description: operationDescriptionValue,
      duration: operationDurationValue
    });

    operations.push(operation);
  }
  const schedule = new Schedule({
    id: createId(),
    name: scheduleName,
    operations: operations
  });
  schedules.push(schedule);
  updateSchedules(schedules);
}

function updateSchedules(schedules: ISchedule<IOperation>[]) {
  displaySchedulesNames(schedules);
  attachEventHandlerOnViewScheduleNames();
}
