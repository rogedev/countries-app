export function isEmptyArray(value: unknown): boolean {
  if (!Array.isArray(value)) return false;

  if (value.length > 0) return false;

  return true;
}
