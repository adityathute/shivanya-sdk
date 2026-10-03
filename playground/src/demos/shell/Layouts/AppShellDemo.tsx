import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { DemoButton } from "../_demo-utils";

export default function AppShellDemo() {
  const openPreview = () => {
    window.open("/shell-preview/app-shell", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="demo">
      <DemoHeader
        title="AppShell"
        description="Base provider and root shell used by reusable shell layouts."
      />

      <DemoSection title="Preview">
        <div className="shell-demo-row">
          <DemoButton onClick={openPreview}>Open Full Preview</DemoButton>
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
        usageCode={`<AppShell>
  {children}
</AppShell>`}
      />
    </section>
  );
}
