export function openModal() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  if (modal !== null && overlay !== null) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}

export function closeModal() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  if (modal !== null && overlay !== null) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}
