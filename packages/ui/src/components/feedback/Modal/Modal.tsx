import type { ModalProps } from "./Modal.types";
import { useEffect } from "react";
import { forwardRef } from "react";

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { open=false, title, footer, closable=true, centered=true, closeOnOverlayClick=true, closeOnEscape=true, size="md", radius="md", onClose, children, className, ...props }, ref,
) {
  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handle = (event: KeyboardEvent) => { if (event.key === "Escape") onClose?.(); };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open, closeOnEscape, onClose]);
  if (!open) return null;
  const classes = ["shivanya-modal", `shivanya-modal-${size}`, `shivanya-modal-radius-${radius}`, centered ? "is-centered" : "", className].filter(Boolean).join(" ");
  return <div className="shivanya-modal-overlay" onMouseDown={(event) => { if (closeOnOverlayClick && event.target === event.currentTarget) onClose?.(); }}>
    <div ref={ref} {...props} className={classes} role="dialog" aria-modal="true">
      {(title || closable) && <div className="shivanya-modal-header">{title && <h2 className="shivanya-modal-title">{title}</h2>}{closable && <button type="button" className="shivanya-modal-close" onClick={() => onClose?.()} aria-label="Close modal">×</button>}</div>}
      <div className="shivanya-modal-body">{children}</div>
      {footer && <div className="shivanya-modal-footer">{footer}</div>}
    </div>
  </div>;
});
Modal.displayName = "Modal";
