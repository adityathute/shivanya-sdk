"use client";

import React, { forwardRef, memo } from "react";
import { cn, mergeProps } from "../../../utils";
const MenuItem = forwardRef<HTMLElement, any>(function MenuItem(props, ref) {
  const {
    className,
    style,
    children,
    icon,
    rightSection,
    active = false,
    disabled = false,
    component: Component = "button",
    onClick,
    ...rest
  } = mergeProps({}, props);
  const handle = (e: any) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };
  return (
    <Component
      ref={ref}
      style={style}
      className={cn(
        "menuItem",
        active && "menuItemActive",
        disabled && "menuItemDisabled",
        className,
      )}
      type={Component === "button" ? "button" : undefined}
      disabled={Component === "button" ? disabled : undefined}
      aria-current={active ? "page" : undefined}
      aria-disabled={disabled || undefined}
      onClick={handle}
      {...rest}
    >
      {icon && <span className="menuIcon">{icon}</span>}
      <span className="menuLabel">{children}</span>
      {rightSection && <span className="menuRightSection">{rightSection}</span>}
    </Component>
  );
});
MenuItem.displayName = "MenuItem";
export default memo(MenuItem);
