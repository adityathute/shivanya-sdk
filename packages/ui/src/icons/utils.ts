import { ICON_SIZES } from "./config";
import type { IconColor, IconSize } from "./types";

export function getIconSize(size: IconSize): string | number {
  if (typeof size === "number") {
    return size;
  }

  return ICON_SIZES[size];
}

export function getIconColor(color: IconColor): string {
  if (color === "current") {
    return "currentColor";
  }

  if (color === "primary") {
    return "var(--shivanya-color-primary)";
  }

  if (color === "secondary") {
    return "var(--shivanya-color-secondary)";
  }

  if (color === "success") {
    return "var(--shivanya-color-success)";
  }

  if (color === "warning") {
    return "var(--shivanya-color-warning)";
  }

  if (color === "danger") {
    return "var(--shivanya-color-danger)";
  }

  if (color === "info") {
    return "var(--shivanya-color-info)";
  }

  if (color === "muted") {
    return "var(--shivanya-color-text-muted)";
  }

  if (color === "white") {
    return "var(--shivanya-color-white)";
  }

  if (color === "black") {
    return "var(--shivanya-color-black)";
  }

  return color;
}