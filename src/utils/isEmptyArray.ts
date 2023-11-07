export function isEmptyArray(value: unknown): boolean {
  if (!Array.isArray(value)) return false;

  return value.length <= 0;
}
