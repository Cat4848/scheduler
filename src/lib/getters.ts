interface FormGetter {
  id: number;
  name: string;
  form: HTMLFormElement;
}

export function getOperationName({ id, name, form }: FormGetter) {
  const operationNameValue = (
    form.querySelector(`[name=${name}-${id}]`) as HTMLInputElement
  ).value;
  return operationNameValue;
}

export function getOperationDescription({ id, name, form }: FormGetter) {
  const operationDescriptionValue = (
    form.querySelector(`[name=${name}-${id}]`) as HTMLTextAreaElement
  ).value;
  return operationDescriptionValue;
}

export function getOperationDuration({ id, name, form }: FormGetter) {
  const operationDurationValue = (
    form.querySelector(`[name=${name}-${id}]`) as HTMLInputElement
  ).value;
  return Number(operationDurationValue) * 1000;
}
