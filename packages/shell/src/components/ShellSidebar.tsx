"use client";

import type { CSSProperties, ElementType } from "react";
import type {
  ShellNavItem,
  ShellSidebarProps,
} from "../types/shell.js";

import {
  Sidebar,
  SidebarItem,
} from "shivanya-ui";

import {
  getShellItemKey,
  isShellItemActive,
} from "../utils/navigation.js";

import { ShellBrand } from "./ShellBrand.js";

export function ShellSidebar({
  navigation = [],
  pathname,
  linkComponent: Link,
  branding,
  footer,
  collapsed = false,
  width = 240,
  position = "left",
  variant = "fixed",
  isActive = isShellItemActive,
  onNavigate,
  className = "",
  children,
}: ShellSidebarProps) {
  return (
    <aside
      className={[
        "shivanya-shell-sidebar",
        `shivanya-shell-sidebar-${position}`,
        `shivanya-shell-sidebar-${variant}`,
        collapsed
          ? "shivanya-shell-sidebar-collapsed"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--shivanya-shell-sidebar-width":
            typeof width === "number"
              ? `${width}px`
              : width,
        } as CSSProperties
      }
    >
      {branding && (
        <div className="shivanya-shell-sidebar-brand">
          <ShellBrand
            branding={branding}
            compact={collapsed}
          />
        </div>
      )}

      {children || (
        <Sidebar
          className="shivanya-shell-nav"
          variant="ghost"
          size="md"
          radius="md"
          itemPosition="start"
        >
          {navigation.map((item, index) => (
            <ShellNavItemView
              key={getShellItemKey(item, index)}
              item={item}
              active={isActive(item, pathname)}
              Link={Link}
              collapsed={collapsed}
              onNavigate={onNavigate}
            />
          ))}
        </Sidebar>
      )}

      {footer && (
        <div className="shivanya-shell-sidebar-footer">
          {footer}
        </div>
      )}
    </aside>
  );
}

function ShellNavItemView({
  item,
  active,
  Link,
  collapsed,
  onNavigate,
}: {
  item: ShellNavItem;
  active: boolean;
  Link?: ElementType;
  collapsed: boolean;
  onNavigate?: (item: ShellNavItem) => void;
}) {
  if (item.divider) {
    return (
      <div
        className="shivanya-shell-nav-divider"
        role="separator"
      />
    );
  }

  const handleClick = () => {
    if (item.disabled) {
      return;
    }

    item.onClick?.();
    onNavigate?.(item);
  };

  const rightSection = (
    <>
      {!collapsed && item.badge ? (
        <span className="shivanya-shell-nav-badge">
          {item.badge}
        </span>
      ) : null}

      {!collapsed && item.endIcon ? (
        <span className="shivanya-shell-nav-end">
          {item.endIcon}
        </span>
      ) : null}
    </>
  );

  return (
    <SidebarItem
      component={Link && item.href && !item.disabled ? Link : "button"}
      href={
        Link && item.href && !item.disabled
          ? item.href
          : undefined
      }
      icon={item.icon}
      rightSection={rightSection}
      active={active}
      disabled={item.disabled}
      onClick={handleClick}
      className={[
        "shivanya-shell-nav-item",
        active ? "is-active" : "",
        item.disabled ? "is-disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      title={
        collapsed
          ? String(item.label ?? "")
          : undefined
      }
    >
      {item.label}
    </SidebarItem>
  );
}