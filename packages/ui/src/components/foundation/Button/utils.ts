import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./config";

import type {
  ButtonSize,
  ButtonVariant,
} from "./Button";

interface GetButtonClassesOptions {
  variant: ButtonVariant;
  size: ButtonSize;
  rounded: boolean;
  fullWidth: boolean;
  loading: boolean;
  disabled: boolean;
}

export function getButtonClasses({
  variant,
  size,
  rounded,
  fullWidth,
  loading,
  disabled,
}: GetButtonClassesOptions): string[] {
  return [
    "shivanya-button",
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    rounded ? "shivanya-button-rounded" : "",
    fullWidth ? "shivanya-button-full" : "",
    loading ? "shivanya-button-loading" : "",
    disabled ? "shivanya-button-disabled" : "",
  ].filter(Boolean);
}