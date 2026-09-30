import { forwardRef } from "react";
import type { HelperTextProps } from "./HelperText.types";

export const HelperText = forwardRef<
  HTMLParagraphElement,
  HelperTextProps
>(function HelperText(
  {
    size = "md",
    variant = "default",
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <p
      {...props}
      ref={ref}
      className={[
        "shivanya-helpertext",
        `shivanya-helpertext-${size}`,
        `shivanya-helpertext-${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
});

HelperText.displayName = "HelperText";