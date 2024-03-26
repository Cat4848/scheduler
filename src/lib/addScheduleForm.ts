import createId from "./createId.js";
import { createInputGroup, createInput, createLabel } from "./creators.js";
import {
  getOperationName,
  getOperationDescription,
  getOperationDuration
} from "./getters.js";
import { Schedule, Operation } from "./classes.js";
import { IOperation } from "./definitions.js";
import schedules from "../database/schedules.js";
import { displaySchedulesNames } from "./display.js";
import { attachEventHandlerOnViewScheduleNames } from "../index.js";

export function initScheduleForm() {
  const select = document.querySelector(
    ".select-nr-operations"
  ) as HTMLSelectElement;
  select.addEventListener("change", buildOperationsForm);
  const opForm = document.querySelector(".operations-form") as HTMLFormElement;
  opForm.onsubmit = submitForm;
}

function buildOperationsForm(e: Event) {
  const operationsValue = (e.target as HTMLSelectElement).value;
  const nrOperations = Number(operationsValue);
  const operationName = "operation-name";
  const operationDescription = "operation-description";
  const operationDuration = "operation-duration";
  const form = document.querySelector(
    ".operations-form-dynamic-content"
  ) as HTMLFormElement;
  form.innerHTML = "";

  for (let i = 1; i <= nrOperations; i++) {
    const inputGroup = createInputGroup("input-group");
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
    const operationName = getOperationName({ id: i, form });
    const operationDescription = getOperationDescription({ id: i, form });
    const operationDuration = getOperationDuration({ id: i, form });
    const operation = new Operation({
      id: createId(),
      name: operationName,
      description: operationDescription,
      duration: operationDuration
    });

    operations.push(operation);
  }
  const schedule = new Schedule({
    id: createId(),
    name: scheduleName,
    operations: operations
  });
  schedules.push(schedule);
  displaySchedulesNames(schedules);
  attachEventHandlerOnViewScheduleNames();
}
