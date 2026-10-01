import type { PopoverProps } from "./Popover.types";
import { useEffect, useRef, useState } from "react";

export function Popover({ trigger, content, header, footer, open: controlledOpen, defaultOpen=false, onOpenChange, size="md", variant="default", radius="md", placement="bottom", disabled=false, closeOnOutsideClick=true, className, ...props }: PopoverProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const rootRef = useRef<HTMLDivElement>(null);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = (next: boolean) => { if (controlledOpen === undefined) setUncontrolledOpen(next); onOpenChange?.(next); };
  useEffect(() => { if (!open || !closeOnOutsideClick) return; const handler=(event: MouseEvent)=>{ if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false); }; document.addEventListener("mousedown", handler); return ()=>document.removeEventListener("mousedown", handler); }, [open, closeOnOutsideClick]);
  const classes=["shivanya-popover", `shivanya-popover-${size}`, `shivanya-popover-${variant}`, `shivanya-popover-radius-${radius}`, `shivanya-popover-${placement}`, open?"is-open":"", disabled?"is-disabled":"", className].filter(Boolean).join(" ");
  return <div ref={rootRef} {...props} className={classes}>
    <button type="button" className="shivanya-popover-trigger" onClick={()=>!disabled && setOpen(!open)} disabled={disabled}>{trigger}</button>
    {open && <div className="shivanya-popover-content" role="dialog">{header && <div className="shivanya-popover-header">{header}</div>}<div className="shivanya-popover-body">{content}</div>{footer && <div className="shivanya-popover-footer">{footer}</div>}</div>}
  </div>;
}
