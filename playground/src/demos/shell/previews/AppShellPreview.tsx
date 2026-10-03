import {
  AppShell,
  ShellHeader,
  ShellMain,
} from "shivanya-shell";

import { branding, DemoButton } from "../_demo-utils";

export default function AppShellPreview() {
  return (
    <AppShell>
      <ShellHeader
        branding={branding}
        end={<DemoButton>Profile</DemoButton>}
      />

      <ShellMain>
        <div className="shell-demo-content">
          <strong>AppShell content</strong>

          <p className="shell-demo-muted">
            AppShell supplies the shared shell context and root container.
          </p>
        </div>
      </ShellMain>
    </AppShell>
  );
}