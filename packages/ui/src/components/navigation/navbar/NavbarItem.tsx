"use client";

import React, { forwardRef, memo } from "react";
import { cn, mergeProps } from "../../../utils";
const NavbarItem = forwardRef<HTMLElement, any>(
  function NavbarItem(props, ref) {
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
          "navbarItem",
          active && "navbarItemActive",
          disabled && "navbarItemDisabled",
          className,
        )}
        type={Component === "button" ? "button" : undefined}
        disabled={Component === "button" ? disabled : undefined}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled || undefined}
        onClick={handle}
        {...rest}
      >
        {icon && <span className="navbarIcon">{icon}</span>}
        <span className="navbarLabel">{children}</span>
        {rightSection && (
          <span className="navbarRightSection">{rightSection}</span>
        )}
      </Component>
    );
  },
);
NavbarItem.displayName = "NavbarItem";
export default memo(NavbarItem);
