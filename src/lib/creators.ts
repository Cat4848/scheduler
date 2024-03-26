export function createInputGroup(name: string) {
  const wrapper = document.createElement("div");
  wrapper.className = name;
  return wrapper;
}

interface Label {
  id: number;
  name: string;
  text: string;
}
export function createLabel({ id, name, text }: Label) {
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
export function createInput({ id, name, type }: Input) {
  let input: HTMLInputElement | HTMLTextAreaElement;
  if (type === "textarea") {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = type;
  }
  input.required = true;
  input.id = `${name}-${id}`;
  input.name = `${name}-${id}`;
  return input;
}
