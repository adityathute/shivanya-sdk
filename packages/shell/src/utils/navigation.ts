import type { ShellNavItem } from "../types/shell.js";

export function isShellItemActive(item: ShellNavItem, pathname?: string) {
  if (item.active !== undefined) return item.active;
  if (!pathname || !item.href) return false;
  if (item.exact || item.href === "/") return pathname === item.href;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function getShellItemKey(item: ShellNavItem, index: number) {
  return item.id || item.href || `shell-item-${index}`;
}
