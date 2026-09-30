import { forwardRef } from "react";
import type { FormGroupProps } from "./FormGroup.types";

export const FormGroup = forwardRef<
  HTMLFieldSetElement,
  FormGroupProps
>(function FormGroup(
  {
    spacing = "md",
    label,
    description,
    children,
    className,
    ...props
  },
  ref,
) {
  const classes = [
    "shivanya-form-group",
    `shivanya-form-group-${spacing}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <fieldset
      {...props}
      ref={ref}
      className={classes}
    >
      {(label || description) && (
        <div>
          {label && <legend>{label}</legend>}

          {description && (
            <p>{description}</p>
          )}
        </div>
      )}

      {children}
    </fieldset>
  );
});

FormGroup.displayName = "FormGroup";