export function isPositiveNumber(value: string) {
  return /(\.)?\d+(\.\d*)?/g.test(value);
}
