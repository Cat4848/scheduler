export function addScheduleForm() {
  const select = document.querySelector(
    ".select-nr-operations"
  ) as HTMLSelectElement;
  select.addEventListener("change", buildOperationsForm);
}

function createInputGroup(name: string) {
  const wrapper = document.createElement("div");
  wrapper.className = name;
  return wrapper;
}

interface Label {
  id: number;
  name: string;
  text: string;
}
function createLabel({ id, name, text }: Label) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = `${name}-${id}`;
  return label;
}

interface Input {
  id: number;
  name: string;
  type: string;
}
function createInput({ id, name, type }: Input) {
  let input: HTMLInputElement | HTMLTextAreaElement;
  if (type === "textarea") {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = type;
  }
  input.id = `${name}-${id}`;
  input.name = `${name}-${id}`;
  return input;
}

function buildOperationsForm(e: Event) {
  const operationsValue = (e.target as HTMLSelectElement).value;
  const nrOperations = Number(operationsValue);
  const operationName = "operation-name";
  const operationDescription = "operation-description";
  const operationDuration = "operation-duration";

  for (let i = 1; i <= nrOperations; i++) {
    const form = document.querySelector(".operations-form") as HTMLFormElement;
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
      text: "Duration"
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
