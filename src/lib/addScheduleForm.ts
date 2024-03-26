export function addScheduleForm() {
  const select = document.querySelector(
    ".select-nr-operations"
  ) as HTMLSelectElement;
  select.addEventListener("change", (e) => {
    const nrOfSchedules = (e.target as HTMLSelectElement).value;
  });
}
