import {
  DEFAULT_LANGUAGE,
  type Language,
} from "./languages.js";

import { commonTranslations } from "./translations/common.js";

export {
  LANGUAGES,
  DEFAULT_LANGUAGE,
  type Language,
} from "./languages.js";

export { commonTranslations } from "./translations/common.js";

export type { CommonTranslationKey } from "./translations/common.js";

export function translate(
  language: Language,
  key: string,
): string {
  const translations =
    commonTranslations as unknown as Record<
      Language,
      Record<string, string>
    >;

  return (
    translations[language]?.[key] ??
    translations[DEFAULT_LANGUAGE]?.[key] ??
    key
  );
}