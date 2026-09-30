import { forwardRef } from "react";
import type { ErrorMessageProps } from "./ErrorMessage.types";
export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  function ErrorMessage(
    { size = "md", variant = "default", className, children, ...props },
    ref,
  ) {
    return (
      <p
        {...props}
        ref={ref}
        className={[
          "shivanya-errormessage",
          `shivanya-errormessage-${size}`,
          `shivanya-errormessage-${variant}`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </p>
    );
  },
);
ErrorMessage.displayName = "ErrorMessage";
