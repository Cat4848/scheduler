export function displayMessage(type: string, message: string) {
  switch (type) {
    case "success":
      const successMessage = document.querySelector(
        ".message-success"
      ) as HTMLDivElement;
      successMessage.innerText = message;
      setTimeout(() => clearMessageArea("success"), 3000);
      break;

    case "error":
      const errorMessage = document.querySelector(
        ".message-error"
      ) as HTMLDivElement;
      errorMessage.innerText = message;
      setTimeout(() => clearMessageArea("error"), 3000);
      break;
    default:
      const warningMessage = document.querySelector(
        ".message-warning"
      ) as HTMLDivElement;
      warningMessage.innerText = "Unknown error type";
      setTimeout(() => clearMessageArea("warning"), 3000);
      break;
  }
}

function clearMessageArea(type: string) {
  const messageWrapper = document.querySelector(
    `.message-${type}`
  ) as HTMLDivElement;
  messageWrapper.innerText = "";
}
