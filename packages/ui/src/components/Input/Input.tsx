import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix"
> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  success?: ReactNode;
  warning?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helperText,
    error,
    success,
    warning,
    leftIcon,
    rightIcon,
    prefix,
    suffix,
    loading = false,
    fullWidth = false,
    rounded = false,
    size = "md",
    disabled,
    className = "",
    id,
    ...props
  },
  ref,
) {
  const classes = [
    "shivanya-input",
    `shivanya-input-${size}`,
    rounded ? "shivanya-input-rounded" : "",
    fullWidth ? "shivanya-input-full" : "",
    error ? "shivanya-input-error" : "",
    success ? "shivanya-input-success" : "",
    warning ? "shivanya-input-warning" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="shivanya-input-wrapper">
      {label && <label htmlFor={id}>{label}</label>}

      <div className={classes}>
        {leftIcon}
        {prefix}

        <input {...props} ref={ref} id={id} disabled={disabled || loading} />

        {suffix}
        {rightIcon}
      </div>

      {error && <p>{error}</p>}
      {!error && success && <p>{success}</p>}
      {!error && !success && warning && <p>{warning}</p>}
      {!error && !success && !warning && helperText && <p>{helperText}</p>}
    </div>
  );
});

Input.displayName = "Input";
