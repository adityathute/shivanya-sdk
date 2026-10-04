import type { AuthFeature } from "../../client/types";

export const defaultAuthFeatures: AuthFeature[] = [
  "login",
  "register",
  "forgot",
  "reset",
  "verify",
  "google",
  "account",
];

export function resolveAuthFeatures(features?: AuthFeature[]) {
  return new Set(features?.length ? features : defaultAuthFeatures);
}
