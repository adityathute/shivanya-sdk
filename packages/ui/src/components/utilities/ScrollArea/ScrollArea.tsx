import {
  forwardRef,
  type CSSProperties,
} from "react";
import type { ScrollAreaProps } from "./ScrollArea.types";

export const ScrollArea = forwardRef<
  HTMLDivElement,
  ScrollAreaProps
>(function ScrollArea(
  {
    children,
    className,
    style,
    size = "md",
    variant = "default",
    radius = "md",
    state = "default",
    disabled = false,
    type = "both",
    scrollbar = "auto",
    maxHeight = 300,
    maxWidth = "100%",
    ...props
  },
  ref,
) {
  const isDisabled =
    disabled || state === "disabled";

  const mergedStyle: CSSProperties = {
    maxHeight,
    maxWidth,
    ...style,
  };

  return (
    <div
      {...props}
      ref={ref}
      style={mergedStyle}
      className={[
        "shivanya-scroll-area",
        `shivanya-scroll-area-${size}`,
        `shivanya-scroll-area-${variant}`,
        `shivanya-scroll-area-radius-${radius}`,
        `shivanya-scroll-area-${type}`,
        `shivanya-scroll-area-scrollbar-${scrollbar}`,
        isDisabled
          ? "shivanya-scroll-area-disabled"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-disabled={isDisabled || undefined}
      role={props.role ?? "region"}
    >
      {children}
    </div>
  );
});

ScrollArea.displayName = "ScrollArea";
