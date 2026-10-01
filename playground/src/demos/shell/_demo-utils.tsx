import type { ReactNode } from "react";

export const branding = {
  name: "Shivanya",
  subtitle: "Shell Demo",
  href: "/",
};

export const navigation = [
  { id: "overview", label: "Overview", href: "/", icon: "⌂" },
  { id: "projects", label: "Projects", href: "/projects", icon: "▣", badge: "4" },
  { id: "reports", label: "Reports", href: "/reports", icon: "◫" },
  { id: "settings", label: "Settings", href: "/settings", icon: "⚙" },
  { divider: true, label: "" },
  { id: "disabled", label: "Disabled", href: "/disabled", icon: "○", disabled: true },
];

export function DemoButton({ children, primary = false, onClick }: { children: ReactNode; primary?: boolean; onClick?: () => void }) {
  return <button type="button" className={`shell-demo-control${primary ? " shell-demo-control-primary" : ""}`} onClick={onClick}>{children}</button>;
}

export function DemoContent({ title = "Shell content" }: { title?: string }) {
  return <div className="shell-demo-content shell-demo-dashboard-page"><div className="shell-demo-card"><div className="shell-demo-label">{title}</div><p className="shell-demo-muted">Reusable application content goes here. The shell controls the surrounding layout, navigation, responsive behavior, and shared structure.</p></div><div className="shell-demo-stat-grid"><div className="shell-demo-stat"><div className="shell-demo-label">Users</div><strong>1,248</strong></div><div className="shell-demo-stat"><div className="shell-demo-label">Projects</div><strong>36</strong></div><div className="shell-demo-stat"><div className="shell-demo-label">Status</div><strong>Active</strong></div></div></div>;
}
