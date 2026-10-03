"use client";

import React, { forwardRef, memo } from "react";
import { cn, mergeProps } from "../../../utils";
const SidebarItem = forwardRef<HTMLElement, any>(
  function SidebarItem(props, ref) {
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
          "sidebarItem",
          active && "sidebarItemActive",
          disabled && "sidebarItemDisabled",
          className,
        )}
        type={Component === "button" ? "button" : undefined}
        disabled={Component === "button" ? disabled : undefined}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled || undefined}
        onClick={handle}
        {...rest}
      >
        {icon && <span className="sidebarIcon">{icon}</span>}
        <span className="sidebarLabel">{children}</span>
        {rightSection && (
          <span className="sidebarRightSection">{rightSection}</span>
        )}
      </Component>
    );
  },
);
SidebarItem.displayName = "SidebarItem";
export default memo(SidebarItem);
