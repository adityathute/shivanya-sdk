import {
  DEFAULT_LANGUAGE,
  type Language,
} from "./languages.js";

export {
  LANGUAGES,
  DEFAULT_LANGUAGE,
  type Language,
} from "./languages.js";

export type TranslationDictionary = Readonly<
  Record<Language, Readonly<Record<string, string>>>
>;

export function translate(
  language: Language,
  dictionary: TranslationDictionary,
  key: string,
): string {
  return (
    dictionary[language]?.[key] ??
    dictionary[DEFAULT_LANGUAGE]?.[key] ??
    key
  );
}
