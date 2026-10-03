import type { ReactNode } from "react";

export interface PageHeaderProps {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  actions,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <header
      className={[
        "shivanya-page-header",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="shivanya-page-header-content">
        {title && (
          <h1 className="shivanya-page-header-title">
            {title}
          </h1>
        )}

        {description && (
          <p className="shivanya-page-header-description">
            {description}
          </p>
        )}

        {children && (
          <div className="shivanya-page-header-extra">
            {children}
          </div>
        )}
      </div>

      {actions && (
        <div className="shivanya-page-header-actions">
          {actions}
        </div>
      )}
    </header>
  );
}