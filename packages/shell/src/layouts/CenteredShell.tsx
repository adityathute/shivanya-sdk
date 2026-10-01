import type { ShellBranding, CenteredShellProps } from "../types/shell.js";
import { AppShell } from "./AppShell.js";
import { ShellHeader } from "../components/ShellHeader.js";
import { ShellMain } from "../components/ShellMain.js";

export function CenteredShell({
  children,
  branding,
  headerEnd,
  maxWidth = 640,
  className = "",
}: CenteredShellProps) {
  return (
    <AppShell className={`shivanya-centered-shell ${className}`.trim()}>
      <ShellHeader branding={branding} showMenu={false} end={headerEnd} />
      <ShellMain>
        <div
          className="shivanya-shell-centered-content"
          style={{
            maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
          }}
        >
          {children}
        </div>
      </ShellMain>
    </AppShell>
  );
}
