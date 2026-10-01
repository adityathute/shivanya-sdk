"use client";
import type { NotificationProps } from "./Notification.types";
import { forwardRef, useEffect, useState } from "react";
import { IconButton } from "../../foundation/IconButton/IconButton";
import { CloseIcon } from "../../../icons/icons/CloseIcon";

export const Notification = forwardRef<
  HTMLDivElement,
  NotificationProps
>(function Notification(
  {
    title,
    icon,
    closable = true,
    onClose,
    variant = "default",
    size = "md",
    duration,
    children,
    className,
    ...props
  },
  ref,
) {
  const [open, setOpen] = useState(true);

  const close = () => {
    setOpen(false);
    onClose?.();
  };

  if (!open) return null;

  const classes = [
    "shivanya-notification",
    `shivanya-notification-${variant}`,
    `shivanya-notification-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      {...props}
      className={classes}
      role="status"
    >
      {icon && (
        <div
          className="shivanya-notification-icon"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      <div className="shivanya-notification-content">
        {title && (
          <div className="shivanya-notification-title">
            {title}
          </div>
        )}

        <div className="shivanya-notification-description">
          {children}
        </div>
      </div>

      {duration !== undefined && (
        <NotificationTimer
          duration={duration}
          onComplete={close}
        />
      )}

      {closable && (
        <IconButton
          size="md"
          variant="ghost"
          iconRotateOnHover
          iconHoverColor="var(--shivanya-color-danger)"
          className="shivanya-notification-close"
          onClick={close}
          aria-label="Close notification"
        >
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
});

Notification.displayName = "Notification";

function NotificationTimer({
  duration,
  onComplete,
}: {
  duration: number;
  onComplete: () => void;
}) {
  useEffect(() => {
    if (duration <= 0) return;

    const id = window.setTimeout(
      onComplete,
      duration,
    );

    return () =>
      window.clearTimeout(id);
  }, [duration, onComplete]);

  return null;
}
