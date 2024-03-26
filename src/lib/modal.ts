import customQuerySelector from "./querySelector.js";

export function openModal() {
  const attributes = ".modal,.overlay";
  const hiddenElements = customQuerySelector(attributes);
  hiddenElements.forEach((element) => {
    if (element) element.classList.remove("hidden");
  });
}

export function closeModal() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  if (modal !== null && overlay !== null) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}

function initModal() {
  const openModalButton = document.querySelector(".btn-open-modal");
  const closeModalButton = document.querySelector(".btn-close-modal");

  if (openModalButton !== null && closeModalButton !== null) {
    openModalButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
  }
}
