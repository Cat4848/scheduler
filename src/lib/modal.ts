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
  const openModalButton = document.querySelector(".btn-open-modal");
  const closeModalButton = document.querySelector(".btn-close-modal");

  if (openModalButton !== null && closeModalButton !== null) {
    openModalButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
  }
}
