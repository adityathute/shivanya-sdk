import type { ShellBranding } from "../types/shell.js";

interface ShellBrandProps {
  branding: ShellBranding;
  compact?: boolean;
}

export function ShellBrand({
  branding,
  compact = false,
}: ShellBrandProps) {
  const content = (
    <span className="shivanya-shell-brand-content">
      {branding.src ? (
        <img
          src={branding.src}
          alt={branding.alt || ""}
          className="shivanya-shell-brand-image"
        />
      ) : null}

      <span className="shivanya-shell-brand-text">
        {branding.name && <strong>{branding.name}</strong>}
        {!compact && branding.subtitle && <small>{branding.subtitle}</small>}
      </span>
    </span>
  );

  if (branding.href) {
    return (
      <a className="shivanya-shell-brand" href={branding.href}>
        {content}
      </a>
    );
  }

  return <span className="shivanya-shell-brand">{content}</span>;
}