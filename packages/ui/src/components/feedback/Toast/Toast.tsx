import type { ToastProps } from "./Toast.types";
import { forwardRef, useEffect, useState } from "react";

export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { title, icon, closable=false, onClose, size="md", variant="default", radius="md", color="default", state="default", disabled=false, duration, children, className, ...props }, ref,
) {
  const [open, setOpen] = useState(true);
  const isDisabled=disabled||state==="disabled";
  const close=()=>{if(isDisabled)return;setOpen(false);onClose?.();};
  if (!open) return null;
  const classes=["shivanya-toast", `shivanya-toast-${size}`, `shivanya-toast-${variant}`, `shivanya-toast-radius-${radius}`, `shivanya-toast-${color}`, state!=="default"?`shivanya-toast-${state}`:"", isDisabled?"is-disabled":"", className].filter(Boolean).join(" ");
  return <div ref={ref} {...props} className={classes} role="status" aria-busy={state==="loading"||undefined} aria-disabled={isDisabled||undefined}>
    {icon&&<div className="shivanya-toast-icon" aria-hidden="true">{icon}</div>}
    <div className="shivanya-toast-content">{title&&<div className="shivanya-toast-title">{title}</div>}<div className="shivanya-toast-description">{children}</div></div>
    {duration!==undefined&&<ToastTimer duration={duration} onComplete={close}/>} 
    {closable&&<button type="button" className="shivanya-toast-close" onClick={close} disabled={isDisabled} aria-label="Close toast">×</button>}
  </div>;
});
Toast.displayName="Toast";
function ToastTimer({duration,onComplete}:{duration:number;onComplete:()=>void}){useEffect(()=>{if(duration<=0)return;const id=window.setTimeout(onComplete,duration);return()=>window.clearTimeout(id);},[duration,onComplete]);return null;}
