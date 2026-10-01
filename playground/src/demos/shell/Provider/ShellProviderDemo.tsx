import { useState } from "react";
import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { ShellProvider, useShell } from "shivanya-shell";
import { DemoButton } from "../_demo-utils";

function Controls() {
  const shell = useShell();
  return (
    <div className="shell-demo-row">
      <DemoButton onClick={shell.toggleSidebar}>
        Sidebar: {String(shell.sidebarOpen)}
      </DemoButton>
      <DemoButton onClick={shell.toggleSidebarCollapsed}>
        Collapsed: {String(shell.sidebarCollapsed)}
      </DemoButton>
      <DemoButton onClick={shell.toggleMobile}>
        Mobile: {String(shell.mobileOpen)}
      </DemoButton>
    </div>
  );
}
export default function ShellProviderDemo() {
  const [mounted, setMounted] = useState(true);
  return (
    <section className="demo">
      <DemoHeader
        title="ShellProvider and Shell Context"
        description="Shared shell state for sidebar, collapsed mode, and mobile navigation."
      />
      <DemoSection title="State">
        <ShellProvider>{mounted && <Controls />}</ShellProvider>
      </DemoSection>
      <DemoSection title="Provider Defaults">
        <div className="shell-demo-row">
          <DemoButton onClick={() => setMounted((v) => !v)}>
            {mounted ? "Unmount controls" : "Mount controls"}
          </DemoButton>
        </div>
      </DemoSection>
      <DemoDocumentation
        importCode={'import { ShellProvider, useShell } from "shivanya-shell";'}
        usageCode={"<ShellProvider>\n  <AppShell />\n</ShellProvider>"}
      />
    </section>
  );
}
