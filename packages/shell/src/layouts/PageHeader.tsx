import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  actions,
  children,
  className = "",
}: {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={`shivanya-page-header ${className}`.trim()}>
      <div className="shivanya-page-header-content">
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
        {children}
      </div>
      {actions && <div className="shivanya-page-header-actions">{actions}</div>}
    </header>
  );
}
