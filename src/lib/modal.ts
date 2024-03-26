import customQuerySelector from "./querySelector.js";

function openModal() {
  const attributes = ".modal,.overlay";
  const hiddenElements = customQuerySelector(attributes);
  hiddenElements.forEach((element) => {
    if (element) element.classList.remove("hidden");
  });
}

function closeModal() {
  const attributes = ".modal,.overlay";
  const visibleElements = customQuerySelector(attributes);
  visibleElements.forEach((element) => {
    if (element) element.classList.add("hidden");
  });
}

export function initModal() {
  const attributes = ".btn-open-modal,.btn-close-modal,.overlay";
  const modalButtons = customQuerySelector(attributes);
  modalButtons.forEach((element) => {
    if (element) {
      const classes = element.classList.value;
      if (classes.includes("open")) {
        element.addEventListener("click", openModal);
      } else {
        element.addEventListener("click", closeModal);
      }
    }
  });
}
