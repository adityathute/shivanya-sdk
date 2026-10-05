"use client";

import type { ConfirmDialogProps } from "./ConfirmDialog.types";
import { useEffect } from "react";
import { forwardRef } from "react";
import { Button } from "../../foundation";

export const ConfirmDialog = forwardRef<HTMLDivElement, ConfirmDialogProps>(
  function ConfirmDialog(
    {
      open = false,
      title,
      message,
      confirmText = "Confirm",
      cancelText = "Cancel",
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      fullWidth = false,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      onConfirm,
      onCancel,
      className,
      ...props
    },
    ref,
  ) {
    useEffect(() => {
      if (!open) return;

      const previousOverflow = document.body.style.overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }, [open]);

    useEffect(() => {
      if (!open || !closeOnEscape || disabled || loading) return;

      const handle = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onCancel?.();
        }
      };

      document.addEventListener("keydown", handle);

      return () => {
        document.removeEventListener("keydown", handle);
      };
    }, [open, closeOnEscape, disabled, loading, onCancel]);

    if (!open) return null;

    const classes = [
      "shivanya-confirm-dialog",
      `shivanya-confirm-dialog-${size}`,
      `shivanya-confirm-dialog-${variant}`,
      fullWidth ? "is-full" : "",
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
            event.target === event.currentTarget &&
            !disabled &&
            !loading
          ) {
            onCancel?.();
          }
        }}
      >
        <div
          ref={ref}
          {...props}
          className={classes}
          role="dialog"
          aria-modal="true"
          aria-busy={loading || undefined}
          aria-disabled={disabled || undefined}
        >
          {(title || message) && (
            <div className="shivanya-confirm-dialog-header">
              {title && (
                <h2 className="shivanya-confirm-dialog-title">
                  {title}
                </h2>
              )}

              {message && (
                <div className="shivanya-confirm-dialog-message">
                  {message}
                </div>
              )}
            </div>
          )}

          <div className="shivanya-confirm-dialog-footer">
            <Button
              variant="outline"
              disabled={disabled || loading}
              onClick={onCancel}
            >
              {cancelText}
            </Button>

            <Button
              variant={variant}
              loading={loading}
              disabled={disabled}
              onClick={onConfirm}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

ConfirmDialog.displayName = "ConfirmDialog";