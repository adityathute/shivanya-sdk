import type {
  ContextMenuRadius,
  ContextMenuSize,
  ContextMenuState,
  ContextMenuVariant,
} from "./ContextMenu.types";
import { CONTEXT_MENU_DEFAULTS } from "./config";

export function getContextMenuProps(
  props: Partial<import("./ContextMenu.types").ContextMenuProps> = {},
) {
  return {
    ...CONTEXT_MENU_DEFAULTS,
    ...props,
  };
}

export function isContextMenuOpen(
  open: boolean | undefined,
  state: ContextMenuState,
) {
  return Boolean(open || state === "open");
}

export function isContextMenuDisabled(
  disabled: boolean | undefined,
  state: ContextMenuState,
) {
  return Boolean(disabled || state === "disabled");
}

export function shouldCloseOnClick(value: boolean | undefined) {
  return value !== false;
}

export function shouldCloseOnEscape(value: boolean | undefined) {
  return value !== false;
}

export function getContextMenuSize(size: ContextMenuSize) {
  return {
    sm: "shivanya-context-menu-sm",
    md: "shivanya-context-menu-md",
    lg: "shivanya-context-menu-lg",
  }[size] ?? "shivanya-context-menu-md";
}

export function getContextMenuVariant(variant: ContextMenuVariant) {
  return {
    default: "shivanya-context-menu-default",
    filled: "shivanya-context-menu-filled",
    outlined: "shivanya-context-menu-outlined",
  }[variant] ?? "shivanya-context-menu-default";
}

export function getContextMenuRadius(radius: ContextMenuRadius) {
  return {
    none: "shivanya-context-menu-radius-none",
    sm: "shivanya-context-menu-radius-sm",
    md: "shivanya-context-menu-radius-md",
    lg: "shivanya-context-menu-radius-lg",
  }[radius] ?? "shivanya-context-menu-radius-md";
}

export function getContextMenuState(state: ContextMenuState) {
  return {
    default: "shivanya-context-menu-state-default",
    open: "shivanya-context-menu-open",
    disabled: "shivanya-context-menu-disabled",
  }[state] ?? "shivanya-context-menu-state-default";
}

export function getContextMenuAriaProps(open: boolean) {
  return {
    role: "menu" as const,
    "aria-hidden": !open,
  };
}
