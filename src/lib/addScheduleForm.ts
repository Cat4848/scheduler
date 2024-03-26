export function addScheduleForm() {
  const select = document.querySelector(
    ".select-nr-operations"
  ) as HTMLSelectElement;
  select.addEventListener("change", getNrOperations);
}

function getNrOperations(e: Event) {
  const operationsValue = (e.target as HTMLSelectElement).value;
  const nrOperations = Number(operationsValue);

  for (let i = 1; i < nrOperations; i++) {
    const wrapper = document.createElement('div');
    wrapper.className
  }
}

function createOperationsInput(nrOperations: number) {}
