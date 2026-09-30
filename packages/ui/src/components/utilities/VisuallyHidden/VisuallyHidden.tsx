import {
  forwardRef,
  type ElementType,
} from "react";
import type { VisuallyHiddenProps } from "./VisuallyHidden.types";

export const VisuallyHidden = forwardRef<
  HTMLElement,
  VisuallyHiddenProps
>(function VisuallyHidden(
  {
    as = "span",
    children,
    className,
    state = "default",
    disabled = false,
    ...props
  },
  ref,
) {
  const Component =
    as as ElementType;

  const isDisabled =
    disabled || state === "disabled";

  return (
    <Component
      {...props}
      ref={ref}
      className={[
        "shivanya-visually-hidden",
        state === "visible"
          ? "shivanya-visually-hidden-visible"
          : "",
        isDisabled
          ? "shivanya-visually-hidden-disabled"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-disabled={isDisabled || undefined}
    >
      {children}
    </Component>
  );
});

VisuallyHidden.displayName = "VisuallyHidden";

export default VisuallyHidden;
