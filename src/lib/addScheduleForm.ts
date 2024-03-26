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
  const input = document.createElement("input");
  input.type = type;
  input.id = `${name}-${id}`;
  input.name = `${name}-${id}`;
  return input;
}

function buildOperationsForm(e: Event) {
  const operationsValue = (e.target as HTMLSelectElement).value;
  const nrOperations = Number(operationsValue);
  const name = "schedule-operation";

  for (let i = 1; i <= nrOperations; i++) {
    const form = document.querySelector(".operations-form") as HTMLFormElement;
    const inputGroup = createInputGroup("input-group");
    const label = createLabel({
      id: i,
      name: name,
      text: "Name"
    });
    const description = createInput({
      id: i,
      name: name,
      type: "text"
    });
    const duration = createInput({
      id: i,
      name: name,
      type: "number"
    });
    inputGroup.append(label, description, duration);
    form.append(inputGroup);
  }
}
