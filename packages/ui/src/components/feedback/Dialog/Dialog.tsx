import type { DialogProps } from "./Dialog.types";
import { useEffect, forwardRef } from "react";
import { IconButton } from "../../foundation/IconButton/IconButton";
import { CloseIcon } from "../../../icons/icons/CloseIcon";

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  function Dialog(
    {
      open = false,
      title,
      footer,
      closable = true,
      onClose,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      size = "md",
      variant = "default",
      radius = "md",
      state = "default",
      disabled = false,
      children,
      className,
      ...props
    },
    ref,
  ) {
    const isDisabled =
      disabled || state === "disabled";

    useEffect(() => {
      if (
        !open ||
        !closeOnEscape ||
        isDisabled
      ) {
        return;
      }

      const handle = (
        event: KeyboardEvent,
      ) => {
        if (event.key === "Escape") {
          onClose?.();
        }
      };

      document.addEventListener(
        "keydown",
        handle,
      );

      return () =>
        document.removeEventListener(
          "keydown",
          handle,
        );
    }, [
      open,
      closeOnEscape,
      isDisabled,
      onClose,
    ]);

    if (!open) return null;

    const classes = [
      "shivanya-dialog",
      `shivanya-dialog-${size}`,
      `shivanya-dialog-${variant}`,
      `shivanya-dialog-radius-${radius}`,
      state !== "default"
        ? `shivanya-dialog-${state}`
        : "",
      isDisabled
        ? "is-disabled"
        : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className="shivanya-dialog-overlay"
        onMouseDown={(event) => {
          if (
            closeOnOverlayClick &&
            event.target ===
              event.currentTarget &&
            !isDisabled
          ) {
            onClose?.();
          }
        }}
      >
        <div
          ref={ref}
          {...props}
          className={classes}
          role="dialog"
          aria-modal="true"
          aria-busy={
            state === "loading" ||
            undefined
          }
          aria-disabled={
            isDisabled ||
            undefined
          }
        >
          {(title || closable) && (
            <div className="shivanya-dialog-header">
              {title && (
                <h2 className="shivanya-dialog-title">
                  {title}
                </h2>
              )}

              {closable && (
                <IconButton
                  size="md"
                  variant="ghost"
                  iconRotateOnHover
                  iconHoverColor="var(--shivanya-color-danger)"
                  className="shivanya-dialog-close"
                  onClick={() => onClose?.()}
                  disabled={isDisabled}
                  aria-label="Close dialog"
                >
                  <CloseIcon />
                </IconButton>
              )}
            </div>
          )}

          <div className="shivanya-dialog-body">
            {children}
          </div>

          {footer && (
            <div className="shivanya-dialog-footer">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Dialog.displayName = "Dialog";