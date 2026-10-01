import type { AlertProps } from "./Alert.types";
import { forwardRef, useState } from "react";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { title, icon, closable=false, onClose, size="md", variant="default", radius="md", color="default", state="default", disabled=false, children, className, ...props },
  ref,
) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  const isDisabled = disabled || state === "disabled";
  const classes = ["shivanya-alert", `shivanya-alert-${size}`, `shivanya-alert-${variant}`, `shivanya-alert-radius-${radius}`, `shivanya-alert-${color}`, state !== "default" ? `shivanya-alert-${state}` : "", isDisabled ? "is-disabled" : "", className].filter(Boolean).join(" ");
  const close = () => { if (isDisabled) return; setOpen(false); onClose?.(); };
  return <div ref={ref} {...props} className={classes} role="alert" aria-busy={state === "loading" || undefined} aria-disabled={isDisabled || undefined}>
    {icon && <div className="shivanya-alert-icon" aria-hidden="true">{icon}</div>}
    <div className="shivanya-alert-content">
      {title && <div className="shivanya-alert-title">{title}</div>}
      <div className="shivanya-alert-description">{children}</div>
    </div>
    {closable && <button type="button" className="shivanya-alert-close" onClick={close} disabled={isDisabled} aria-label="Close alert">×</button>}
  </div>;
});
Alert.displayName = "Alert";
