export default function generateRandomNumber(): number {
  let value = null;

  do {
    value = Math.floor(Math.random() * 20);
  } while (value === 0);

  return value;
}
