export function addScheduleForm() {
  const select = document.querySelector(
    ".select-nr-operations"
  ) as HTMLSelectElement;
  select.addEventListener("change", getNrOperations);
}

function getNrOperations(e: Event) {
  const operationsValue = (e.target as HTMLSelectElement).value;
  const nrOperations = Number(operationsValue);

  for (let i = 1; i <= nrOperations; i++) {
    const form = document.querySelector(".operations-form") as HTMLFormElement;
    const wrapper = document.createElement("div");
    wrapper.className = "input-group";
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerText = "Name";
    label.htmlFor = `schedule-operation-${i}`;
    input.id = `schedule-operation-${i}`;
    input.name = `schedule-operation-${i}`;
    wrapper.append(label, input);
    form.append(wrapper);
  }
}

function inputGroup(name: string) {
  const wrapper = document.createElement("div");
  wrapper.className = name;
  return wrapper;
}

interface Label {
  id: number;
  name: string;
  text: string;
}
function label({ id, name, text }: Label) {
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
function input({ id, name, type }: Input) {
  const input = document.createElement("input");
  input.type = type;
  input.id = `${name}-${id}`;
  input.name = `${name}-${id}`;
}
