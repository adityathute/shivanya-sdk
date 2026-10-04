"use client";

import type { ReactNode } from "react";
import { AuthBrand } from "./AuthBrand";

export function AuthShell({ children, title, subtitle, footer }: { children: ReactNode; title?: string; subtitle?: string; footer?: ReactNode }) {
  return (
    <div className="shivanya-auth-shell">
      <AuthBrand subtitle="One account across ShivanyaMS" />
      {(title || subtitle) && (
        <div className="shivanya-auth-heading">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      {children}
      {footer && <div className="shivanya-auth-footer">{footer}</div>}
    </div>
  );
}
