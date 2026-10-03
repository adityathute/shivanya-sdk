"use client";

import { forwardRef, memo } from "react";
import type { SheetProps } from "./Sheet.types";
import { SHEET_DEFAULTS } from "./config";
import {
  getSheetAriaProps,
  getSheetPosition,
  getSheetRadius,
  getSheetSize,
  getSheetState,
  getSheetVariant,
  isSheetDisabled,
  isSheetOpen,
  shouldCloseOnEscape,
  shouldCloseOnOverlayClick,
} from "./utils";

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(function Sheet(
  {
    id,
    className = "",
    style,
    open = SHEET_DEFAULTS.open,
    position = SHEET_DEFAULTS.position,
    size = SHEET_DEFAULTS.size,
    variant = SHEET_DEFAULTS.variant,
    radius = SHEET_DEFAULTS.radius,
    state = SHEET_DEFAULTS.state,
    disabled = SHEET_DEFAULTS.disabled,
    overlay = SHEET_DEFAULTS.overlay,
    title = SHEET_DEFAULTS.title,
    closeOnOverlayClick = SHEET_DEFAULTS.closeOnOverlayClick,
    closeOnEscape = SHEET_DEFAULTS.closeOnEscape,
    onClose,
    children,
    ...rest
  },
  ref,
) {
  const opened = isSheetOpen(open, state);
  const isDisabled = isSheetDisabled(disabled, state);

  if (!opened) return null;

  const classes = [
    "shivanya-sheet",
    getSheetPosition(position),
    getSheetSize(size),
    getSheetVariant(variant),
    getSheetRadius(radius),
    getSheetState(state),
    isDisabled ? "shivanya-sheet-disabled" : "",
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
          className="shivanya-sheet-overlay"
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
        {...getSheetAriaProps(opened)}
        {...rest}
      >
        {title && <div className="shivanya-sheet-header">{title}</div>}

        <div className="shivanya-sheet-content">{children}</div>
      </div>
    </>
  );
});

Sheet.displayName = "Sheet";
export default memo(Sheet);
