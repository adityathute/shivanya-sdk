"use client";

import type { PopoverProps } from "./Popover.types";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export function Popover({
  trigger,
  content,
  header,
  footer,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  size = "md",
  variant = "default",
  radius = "md",
  placement = "bottom",
  disabled = false,
  closeOnOutsideClick = true,
  className,
  ...props
}: PopoverProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = (next: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(next);
    }

    onOpenChange?.(next);
  };

  useEffect(() => {
    if (!open || !closeOnOutsideClick) return;

    const handler = (event: MouseEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [open, closeOnOutsideClick]);

  useLayoutEffect(() => {
    if (!open) return;

    const updatePosition = () => {
      const trigger = triggerRef.current;
      const content = contentRef.current;

      if (!trigger || !content) return;

      const triggerRect = trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();

      const gap = 8;
      const padding = 16;

      let top = 0;
      let left = 0;

      switch (placement) {
        case "top":
          top = triggerRect.top - contentRect.height - gap;
          left =
            triggerRect.left +
            (triggerRect.width - contentRect.width) / 2;
          break;

        case "right":
          top =
            triggerRect.top +
            (triggerRect.height - contentRect.height) / 2;
          left = triggerRect.right + gap;
          break;

        case "left":
          top =
            triggerRect.top +
            (triggerRect.height - contentRect.height) / 2;
          left = triggerRect.left - contentRect.width - gap;
          break;

        case "bottom":
        default:
          top = triggerRect.bottom + gap;
          left =
            triggerRect.left +
            (triggerRect.width - contentRect.width) / 2;
          break;
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      left = Math.max(
        padding,
        Math.min(
          left,
          viewportWidth - contentRect.width - padding,
        ),
      );

      top = Math.max(
        padding,
        Math.min(
          top,
          viewportHeight - contentRect.height - padding,
        ),
      );

      setPosition({
        top,
        left,
      });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, placement, content, header, footer]);

  const classes = [
    "shivanya-popover",
    `shivanya-popover-${size}`,
    `shivanya-popover-${variant}`,
    `shivanya-popover-radius-${radius}`,
    `shivanya-popover-${placement}`,
    open ? "is-open" : "",
    disabled ? "is-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={rootRef}
      {...props}
      className={classes}
    >
      <button
        ref={triggerRef}
        type="button"
        className="shivanya-popover-trigger"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
      >
        {trigger}
      </button>

      {open && (
        <div
          ref={contentRef}
          className="shivanya-popover-content"
          role="dialog"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          {header && (
            <div className="shivanya-popover-header">
              {header}
            </div>
          )}

          <div className="shivanya-popover-body">
            {content}
          </div>

          {footer && (
            <div className="shivanya-popover-footer">
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
}