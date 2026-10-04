export function createAuthRedirectUrl(authUrl: string, next?: string) {
  const url = new URL(authUrl);
  if (next) url.searchParams.set("next", next);
  return url.toString();
}
