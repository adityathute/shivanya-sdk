export const LANGUAGES = {
  en: "English",
  mr: "मराठी",
  hi: "हिन्दी",
} as const;

export type Language = keyof typeof LANGUAGES;

export const DEFAULT_LANGUAGE: Language = "en";