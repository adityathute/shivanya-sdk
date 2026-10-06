export const MAX_FILE_SIZE = 1 * 1024 * 1024;

export function isImageFile(file: File): boolean {
  return file.type.startsWith("image/");
}

export function isFileSizeAllowed(
  file: File,
  maxSize = MAX_FILE_SIZE,
): boolean {
  return file.size <= maxSize;
}

export function getFileSizeError(
  file: File,
  maxSize = MAX_FILE_SIZE,
): string | null {
  if (isFileSizeAllowed(file, maxSize)) {
    return null;
  }

  const maxSizeMb = maxSize / (1024 * 1024);

  return `File must be smaller than ${maxSizeMb} MB.`;
}