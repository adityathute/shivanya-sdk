import type {
  DrawerPosition,
  DrawerRadius,
  DrawerSize,
  DrawerState,
  DrawerVariant,
} from "./Drawer.types";
import { DRAWER_DEFAULTS } from "./config";

export function getDrawerProps(
  props: Partial<import("./Drawer.types").DrawerProps> = {},
) {
  return {
    ...DRAWER_DEFAULTS,
    ...props,
  };
}

export function isDrawerOpen(
  open: boolean | undefined,
  state: DrawerState,
) {
  return Boolean(open || state === "open");
}

export function isDrawerDisabled(
  disabled: boolean | undefined,
  state: DrawerState,
) {
  return Boolean(disabled || state === "disabled");
}

export function shouldCloseOnOverlayClick(value: boolean | undefined) {
  return value !== false;
}

export function shouldCloseOnEscape(value: boolean | undefined) {
  return value !== false;
}

export function getDrawerPosition(position: DrawerPosition) {
  return {
    left: "shivanya-drawer-left",
    right: "shivanya-drawer-right",
    top: "shivanya-drawer-top",
    bottom: "shivanya-drawer-bottom",
  }[position] ?? "shivanya-drawer-right";
}

export function getDrawerSize(size: DrawerSize) {
  return {
    xs: "shivanya-drawer-xs",
    sm: "shivanya-drawer-sm",
    md: "shivanya-drawer-md",
    lg: "shivanya-drawer-lg",
    xl: "shivanya-drawer-xl",
    full: "shivanya-drawer-full",
  }[size] ?? "shivanya-drawer-md";
}

export function getDrawerVariant(variant: DrawerVariant) {
  return {
    default: "shivanya-drawer-default",
    filled: "shivanya-drawer-filled",
    outlined: "shivanya-drawer-outlined",
  }[variant] ?? "shivanya-drawer-default";
}

export function getDrawerRadius(radius: DrawerRadius) {
  return {
    none: "shivanya-drawer-radius-none",
    sm: "shivanya-drawer-radius-sm",
    md: "shivanya-drawer-radius-md",
    lg: "shivanya-drawer-radius-lg",
  }[radius] ?? "shivanya-drawer-radius-md";
}

export function getDrawerState(state: DrawerState) {
  return {
    default: "shivanya-drawer-state-default",
    open: "shivanya-drawer-open",
    disabled: "shivanya-drawer-disabled",
  }[state] ?? "shivanya-drawer-state-default";
}

export function getDrawerAriaProps({
  open,
  id,
  title,
}: {
  open: boolean;
  id?: string;
  title?: unknown;
}) {
  return {
    role: "dialog" as const,
    "aria-modal": open,
    "aria-labelledby": title && id ? `${id}-title` : undefined,
  };
}
