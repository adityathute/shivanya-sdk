"use client";

import { Typography } from "shivanya-ui";

export function AuthBrand({ title = "ShivanyaMS", subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="shivanya-auth-brand">
      <div className="shivanya-auth-brand-mark">S</div>
      <div>
        <Typography as="div" variant="h5" weight="semibold">{title}</Typography>
        {subtitle && <Typography as="div" variant="body" size="sm" color="secondary">{subtitle}</Typography>}
      </div>
    </div>
  );
}
