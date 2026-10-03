"use client";

import { forwardRef, memo } from "react";
import type { ContextMenuProps } from "./ContextMenu.types";
import { CONTEXT_MENU_DEFAULTS } from "./config";
import {
  getContextMenuAriaProps,
  getContextMenuRadius,
  getContextMenuSize,
  getContextMenuState,
  getContextMenuVariant,
  isContextMenuDisabled,
  isContextMenuOpen,
  shouldCloseOnClick,
  shouldCloseOnEscape,
} from "./utils";

export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  function ContextMenu(
    {
      id,
      className = "",
      style,
      open = CONTEXT_MENU_DEFAULTS.open,
      size = CONTEXT_MENU_DEFAULTS.size,
      variant = CONTEXT_MENU_DEFAULTS.variant,
      radius = CONTEXT_MENU_DEFAULTS.radius,
      state = CONTEXT_MENU_DEFAULTS.state,
      disabled = CONTEXT_MENU_DEFAULTS.disabled,
      closeOnClick = CONTEXT_MENU_DEFAULTS.closeOnClick,
      closeOnEscape = CONTEXT_MENU_DEFAULTS.closeOnEscape,
      onClose,
      children,
      ...rest
    },
    ref,
  ) {
    const opened = isContextMenuOpen(open, state);
    const isDisabled = isContextMenuDisabled(disabled, state);

    if (!opened) return null;

    const classes = [
      "shivanya-context-menu",
      getContextMenuSize(size),
      getContextMenuVariant(variant),
      getContextMenuRadius(radius),
      getContextMenuState(state),
      isDisabled ? "shivanya-context-menu-disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleClick = () => {
      if (shouldCloseOnClick(closeOnClick) && !isDisabled) {
        onClose?.();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        event.key === "Escape" &&
        shouldCloseOnEscape(closeOnEscape) &&
        !isDisabled
      ) {
        event.preventDefault();
        onClose?.();
      }
    };

    return (
      <div
        ref={ref}
        id={id}
        style={style}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        className={classes}
        data-open={opened || undefined}
        data-disabled={isDisabled || undefined}
        {...getContextMenuAriaProps(opened)}
        {...rest}
      >
        <div className="shivanya-context-menu-content">{children}</div>
      </div>
    );
  },
);

ContextMenu.displayName = "ContextMenu";
export default memo(ContextMenu);
