interface FormGetter {
  id: number;
  form: HTMLFormElement;
}

export function getOperationName({ id, form }: FormGetter) {
  const operationName = "operation-name";
  const operationNameValue = (
    form.querySelector(`[name=${operationName}-${id}]`) as HTMLInputElement
  ).value;
  return operationNameValue;
}

export function getOperationDescription({ id, form }: FormGetter) {
  const operationDescription = "operation-description";
  const operationDescriptionValue = (
    form.querySelector(
      `[name=${operationDescription}-${id}]`
    ) as HTMLTextAreaElement
  ).value;
  return operationDescriptionValue;
}

export function getOperationDuration({ id, form }: FormGetter) {
  const operationDuration = "operation-duration";
  const operationDurationValue = (
    form.querySelector(`[name=${operationDuration}-${id}]`) as HTMLInputElement
  ).value;
  return Number(operationDurationValue) * 1000;
}
