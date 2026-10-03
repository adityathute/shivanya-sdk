"use client";

import { forwardRef, memo } from "react";
import type { CommandPaletteProps } from "./CommandPalette.types";
import { COMMAND_PALETTE_DEFAULTS } from "./config";
import {
  getCommandPaletteAriaProps,
  getCommandPaletteRadius,
  getCommandPaletteSize,
  getCommandPaletteState,
  getCommandPaletteVariant,
  isCommandPaletteDisabled,
  isCommandPaletteOpen,
  shouldCloseOnEscape,
  shouldCloseOnOverlayClick,
} from "./utils";

export const CommandPalette = forwardRef<HTMLDivElement, CommandPaletteProps>(
  function CommandPalette(
    {
      id,
      className = "",
      style,
      open = COMMAND_PALETTE_DEFAULTS.open,
      size = COMMAND_PALETTE_DEFAULTS.size,
      variant = COMMAND_PALETTE_DEFAULTS.variant,
      radius = COMMAND_PALETTE_DEFAULTS.radius,
      state = COMMAND_PALETTE_DEFAULTS.state,
      disabled = COMMAND_PALETTE_DEFAULTS.disabled,
      placeholder = COMMAND_PALETTE_DEFAULTS.placeholder,
      overlay = COMMAND_PALETTE_DEFAULTS.overlay,
      closeOnEscape = COMMAND_PALETTE_DEFAULTS.closeOnEscape,
      closeOnOverlayClick = COMMAND_PALETTE_DEFAULTS.closeOnOverlayClick,
      onClose,
      children,
      ...rest
    },
    ref,
  ) {
    const opened = isCommandPaletteOpen(open, state);
    const isDisabled = isCommandPaletteDisabled(disabled, state);

    if (!opened) return null;

    const classes = [
      "shivanya-command-palette",
      getCommandPaletteSize(size),
      getCommandPaletteVariant(variant),
      getCommandPaletteRadius(radius),
      getCommandPaletteState(state),
      isDisabled ? "shivanya-command-palette-disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleOverlayClick = () => {
      if (shouldCloseOnOverlayClick(closeOnOverlayClick) && !isDisabled) {
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
      <>
        {overlay && (
          <div
            className="shivanya-command-palette-overlay"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
        )}

        <div
          ref={ref}
          id={id}
          style={style}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          className={classes}
          data-open={opened || undefined}
          data-disabled={isDisabled || undefined}
          {...getCommandPaletteAriaProps(opened)}
          {...rest}
        >
          <input
            type="text"
            placeholder={placeholder}
            className="shivanya-command-palette-search"
            disabled={isDisabled}
          />

          <div className="shivanya-command-palette-content">{children}</div>
        </div>
      </>
    );
  },
);

CommandPalette.displayName = "CommandPalette";
export default memo(CommandPalette);
