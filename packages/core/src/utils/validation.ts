export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function isLengthBetween(
  value: string,
  min: number,
  max: number,
): boolean {
  const length = value.trim().length;
  return length >= min && length <= max;
}

export function isValidUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export function isValidUsername(value: string): boolean {
  const username = value.trim().toLowerCase();

  return (
    username.length >= 3 &&
    username.length <= 30 &&
    /^[a-z0-9_]+$/.test(username)
  );
}