export function stripUrlProtocol(value: string): string {
  return value.replace(/^https?:\/\//i, "");
}

export function normalizeUrl(value: string): string {
  const url = value.trim();

  if (!url) {
    return "";
  }

  return `https://${stripUrlProtocol(url)}`;
}