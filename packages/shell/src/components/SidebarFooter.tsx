import type { ReactNode } from "react";

export interface ShellSidebarFooterProps {
  appName?: ReactNode;
  version?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function SidebarFooter({
  appName,
  version,
  children,
  className = "",
}: ShellSidebarFooterProps) {
  return (
    <div
      className={`shivanya-shell-sidebar-footer-content ${className}`.trim()}
    >
      {appName && (
        <strong className="shivanya-shell-sidebar-footer-name">
          {appName}
        </strong>
      )}

      {version && (
        <small className="shivanya-shell-sidebar-footer-version">
          {version}
        </small>
      )}

      {children && (
        <div className="shivanya-shell-sidebar-footer-actions">
          {children}
        </div>
      )}
    </div>
  );
}