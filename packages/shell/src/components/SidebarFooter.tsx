import type { ReactNode } from "react";

export function SidebarFooter({
  appName,
  version,
  children,
}: {
  appName?: ReactNode;
  version?: ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="shivanya-shell-sidebar-footer-content">
      {appName && <strong>{appName}</strong>}
      {version && <small>{version}</small>}
      {children}
    </div>
  );
}
