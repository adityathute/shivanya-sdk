import {
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import type { ReactElement } from "react";
import type { FocusTrapProps } from "./FocusTrap.types";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export const FocusTrap = forwardRef<
  HTMLElement,
  FocusTrapProps
>(function FocusTrap(
  {
    children,
    className,
    state = "default",
    disabled = false,
    autoFocus = true,
    restoreFocus = true,
    onActivate,
    onDeactivate,
  },
  ref,
) {
  const nodeRef = useRef<HTMLElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (
      disabled ||
      state === "disabled" ||
      state === "inactive"
    ) {
      return;
    }

    previousFocusRef.current =
      document.activeElement as HTMLElement | null;

    const node = nodeRef.current;

    if (autoFocus && node) {
      const focusable =
        node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

      focusable[0]?.focus();
    }

    onActivate?.();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !node) {
        return;
      }

      const focusable = Array.from(
        node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      if (restoreFocus) {
        previousFocusRef.current?.focus();
      }

      onDeactivate?.();
    };
  }, [
    state,
    disabled,
    autoFocus,
    restoreFocus,
    onActivate,
    onDeactivate,
  ]);

  if (!isValidElement(children)) {
    return null;
  }

  const child = children as ReactElement<{
    className?: string;
    ref?: (node: HTMLElement | null) => void;
  }>;

  return cloneElement(child, {
    ref: (element: HTMLElement | null) => {
      nodeRef.current = element;

      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }

      const childRef = child.props.ref;

      if (typeof childRef === "function") {
        childRef(element);
      }
    },
    className: [
      "shivanya-focus-trap",
      state === "disabled" || disabled
        ? "shivanya-focus-trap-disabled"
        : "",
      className,
      child.props.className,
    ]
      .filter(Boolean)
      .join(" "),
  });
});

FocusTrap.displayName = "FocusTrap";
