export default function customQuerySelector(attributes: string) {
  const attributesArray = attributes.split(",");
  const elements = attributesArray.map((attribute) => {
    const element = document.querySelector(attribute);
    if (element !== null) return element;
    else return null;
  });
  return elements;
}
