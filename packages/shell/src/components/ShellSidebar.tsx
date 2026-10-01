import type { CSSProperties, ElementType } from "react";
import type { ShellNavItem, ShellSidebarProps } from "../types/shell.js";
import { getShellItemKey, isShellItemActive } from "../utils/navigation.js";
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
      className={`shivanya-shell-sidebar shivanya-shell-sidebar-${position} shivanya-shell-sidebar-${variant} ${collapsed ? "shivanya-shell-sidebar-collapsed" : ""} ${className}`.trim()}
      style={
        {
          "--shivanya-shell-sidebar-width":
            typeof width === "number" ? `${width}px` : width,
        } as CSSProperties
      }
    >
      {branding && (
        <div className="shivanya-shell-sidebar-brand">
          <ShellBrand branding={branding} compact={collapsed} />
        </div>
      )}
      {children || (
        <nav className="shivanya-shell-nav" aria-label="Primary navigation">
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
        </nav>
      )}
      {footer && <div className="shivanya-shell-sidebar-footer">{footer}</div>}
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
  if (item.divider)
    return <div className="shivanya-shell-nav-divider" role="separator" />;
  const className =
    `shivanya-shell-nav-item ${active ? "is-active" : ""} ${item.disabled ? "is-disabled" : ""}`.trim();
  const content = (
    <>
      <span className="shivanya-shell-nav-icon">{item.icon}</span>
      <span className="shivanya-shell-nav-label">{item.label}</span>
      {!collapsed && item.badge ? (
        <span className="shivanya-shell-nav-badge">{item.badge}</span>
      ) : null}
      {!collapsed && item.endIcon ? (
        <span className="shivanya-shell-nav-end">{item.endIcon}</span>
      ) : null}
    </>
  );
  const handleClick = () => {
    if (!item.disabled) {
      item.onClick?.();
      onNavigate?.(item);
    }
  };
  if (Link && item.href && !item.disabled)
    return (
      <Link
        className={className}
        href={item.href}
        onClick={handleClick}
        title={collapsed ? String(item.label ?? "") : undefined}
      >
        {content}
      </Link>
    );
  return (
    <button
      type="button"
      className={className}
      disabled={item.disabled}
      onClick={handleClick}
      title={collapsed ? String(item.label ?? "") : undefined}
    >
      {content}
    </button>
  );
}
