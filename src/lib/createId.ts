export default function createId() {
  const random = Math.floor(Math.random() * 999999);
  return random.toString();
}
