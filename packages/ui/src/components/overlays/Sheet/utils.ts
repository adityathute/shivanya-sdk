import type {
  SheetPosition,
  SheetRadius,
  SheetSize,
  SheetState,
  SheetVariant,
} from "./Sheet.types";
import { SHEET_DEFAULTS } from "./config";

export function getSheetProps(
  props: Partial<import("./Sheet.types").SheetProps> = {},
) {
  return {
    ...SHEET_DEFAULTS,
    ...props,
  };
}

export function isSheetOpen(
  open: boolean | undefined,
  state: SheetState,
) {
  return Boolean(open || state === "open");
}

export function isSheetDisabled(
  disabled: boolean | undefined,
  state: SheetState,
) {
  return Boolean(disabled || state === "disabled");
}

export function shouldCloseOnOverlayClick(value: boolean | undefined) {
  return value !== false;
}

export function shouldCloseOnEscape(value: boolean | undefined) {
  return value !== false;
}

export function getSheetPosition(position: SheetPosition) {
  return {
    left: "shivanya-sheet-left",
    right: "shivanya-sheet-right",
    top: "shivanya-sheet-top",
    bottom: "shivanya-sheet-bottom",
  }[position] ?? "shivanya-sheet-right";
}

export function getSheetSize(size: SheetSize) {
  return {
    xs: "shivanya-sheet-xs",
    sm: "shivanya-sheet-sm",
    md: "shivanya-sheet-md",
    lg: "shivanya-sheet-lg",
    xl: "shivanya-sheet-xl",
    full: "shivanya-sheet-full",
  }[size] ?? "shivanya-sheet-md";
}

export function getSheetVariant(variant: SheetVariant) {
  return {
    default: "shivanya-sheet-default",
    filled: "shivanya-sheet-filled",
    outlined: "shivanya-sheet-outlined",
  }[variant] ?? "shivanya-sheet-default";
}

export function getSheetRadius(radius: SheetRadius) {
  return {
    none: "shivanya-sheet-radius-none",
    sm: "shivanya-sheet-radius-sm",
    md: "shivanya-sheet-radius-md",
    lg: "shivanya-sheet-radius-lg",
  }[radius] ?? "shivanya-sheet-radius-md";
}

export function getSheetState(state: SheetState) {
  return {
    default: "shivanya-sheet-state-default",
    open: "shivanya-sheet-open",
    disabled: "shivanya-sheet-disabled",
  }[state] ?? "shivanya-sheet-state-default";
}

export function getSheetAriaProps(open: boolean) {
  return {
    role: "dialog" as const,
    "aria-modal": true,
    "aria-hidden": !open,
  };
}
