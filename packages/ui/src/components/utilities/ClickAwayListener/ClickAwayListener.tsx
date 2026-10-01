"use client";
import {
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import type { ReactElement } from "react";
import type { ClickAwayListenerProps } from "./ClickAwayListener.types";

export const ClickAwayListener = forwardRef<
  HTMLElement,
  ClickAwayListenerProps
>(function ClickAwayListener(
  {
    children,
    className,
    state = "default",
    disabled = false,
    mouseEvent = "mousedown",
    touchEvent = "touchstart",
    onClickAway,
  },
  ref,
) {
  const nodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (
      disabled ||
      state === "disabled" ||
      state === "inactive" ||
      !onClickAway
    ) {
      return;
    }

    const handleEvent = (
      event: MouseEvent | TouchEvent,
    ) => {
      const node = nodeRef.current;

      if (node && !node.contains(event.target as Node)) {
        onClickAway(event as never);
      }
    };

    if (mouseEvent) {
      document.addEventListener(mouseEvent, handleEvent as EventListener);
    }

    if (touchEvent) {
      document.addEventListener(touchEvent, handleEvent as EventListener);
    }

    return () => {
      if (mouseEvent) {
        document.removeEventListener(
          mouseEvent,
          handleEvent as EventListener,
        );
      }

      if (touchEvent) {
        document.removeEventListener(
          touchEvent,
          handleEvent as EventListener,
        );
      }
    };
  }, [
    disabled,
    state,
    mouseEvent,
    touchEvent,
    onClickAway,
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
      "shivanya-click-away-listener",
      state === "disabled" || disabled
        ? "shivanya-click-away-listener-disabled"
        : "",
      className,
      child.props.className,
    ]
      .filter(Boolean)
      .join(" "),
  });
});

ClickAwayListener.displayName = "ClickAwayListener";

