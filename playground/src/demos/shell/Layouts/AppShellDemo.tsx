import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { AppShell, ShellHeader, ShellMain } from "shivanya-shell";
import { branding, DemoButton } from "../_demo-utils";

export default function AppShellDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title="AppShell"
        description="Base provider and root shell used by reusable shell layouts."
      />
      <DemoSection title="Basic">
        <div className="shell-demo-preview">
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
        </div>
      </DemoSection>
      <DemoSection title="Initial State">
        <div className="shell-demo-row">
          <DemoButton>defaultSidebarOpen: true</DemoButton>
          <DemoButton>defaultSidebarCollapsed: true</DemoButton>
          <DemoButton>defaultMobileOpen: true</DemoButton>
        </div>
      </DemoSection>
      <DemoDocumentation
        importCode={'import { AppShell } from "shivanya-shell";'}
        usageCode={"<AppShell>\n  {children}\n</AppShell>"}
      />
    </section>
  );
}
