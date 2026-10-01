import type {
  CommandPaletteRadius,
  CommandPaletteSize,
  CommandPaletteState,
  CommandPaletteVariant,
} from "./CommandPalette.types";
import { COMMAND_PALETTE_DEFAULTS } from "./config";

export function getCommandPaletteProps(
  props: Partial<import("./CommandPalette.types").CommandPaletteProps> = {},
) {
  return {
    ...COMMAND_PALETTE_DEFAULTS,
    ...props,
  };
}

export function isCommandPaletteOpen(
  open: boolean | undefined,
  state: CommandPaletteState,
) {
  return Boolean(open || state === "open");
}

export function isCommandPaletteDisabled(
  disabled: boolean | undefined,
  state: CommandPaletteState,
) {
  return Boolean(disabled || state === "disabled");
}

export function shouldCloseOnOverlayClick(value: boolean | undefined) {
  return value !== false;
}

export function shouldCloseOnEscape(value: boolean | undefined) {
  return value !== false;
}

export function getCommandPaletteSize(size: CommandPaletteSize) {
  return {
    sm: "shivanya-command-palette-sm",
    md: "shivanya-command-palette-md",
    lg: "shivanya-command-palette-lg",
  }[size] ?? "shivanya-command-palette-md";
}

export function getCommandPaletteVariant(variant: CommandPaletteVariant) {
  return {
    default: "shivanya-command-palette-default",
    filled: "shivanya-command-palette-filled",
    outlined: "shivanya-command-palette-outlined",
  }[variant] ?? "shivanya-command-palette-default";
}

export function getCommandPaletteRadius(radius: CommandPaletteRadius) {
  return {
    none: "shivanya-command-palette-radius-none",
    sm: "shivanya-command-palette-radius-sm",
    md: "shivanya-command-palette-radius-md",
    lg: "shivanya-command-palette-radius-lg",
  }[radius] ?? "shivanya-command-palette-radius-md";
}

export function getCommandPaletteState(state: CommandPaletteState) {
  return {
    default: "shivanya-command-palette-state-default",
    open: "shivanya-command-palette-open",
    disabled: "shivanya-command-palette-disabled",
  }[state] ?? "shivanya-command-palette-state-default";
}

export function getCommandPaletteAriaProps(open: boolean) {
  return {
    role: "dialog" as const,
    "aria-modal": true,
    "aria-hidden": !open,
  };
}
