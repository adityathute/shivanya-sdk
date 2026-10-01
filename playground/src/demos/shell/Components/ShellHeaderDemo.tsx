import { useState } from "react";
import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { AppShell, ShellHeader } from "shivanya-shell";
import { branding, DemoButton } from "../_demo-utils";

export default function ShellHeaderDemo() {
  const [open, setOpen] = useState(false);
  return (
    <section className="demo">
      <DemoHeader
        title="ShellHeader"
        description="Reusable three-slot header with branding, menu behavior, positioning, and custom actions."
      />
      <DemoSection title="Basic">
        <div className="shell-demo-preview">
          <AppShell>
            <ShellHeader
              branding={branding}
              center={<span className="shell-demo-label">Dashboard</span>}
              end={<DemoButton>Account</DemoButton>}
            />
            <div className="shell-demo-content">Header preview content</div>
          </AppShell>
        </div>
      </DemoSection>
      <DemoSection title="Slots">
        <div className="shell-demo-card">
          <AppShell>
            <ShellHeader
              branding={branding}
              start={<span>Start slot</span>}
              center={<span>Center slot</span>}
              end={<span>End slot</span>}
            />
          </AppShell>
        </div>
      </DemoSection>
      <DemoSection title="Menu State">
        <div className="shell-demo-row">
          <DemoButton primary onClick={() => setOpen((v) => !v)}>
            {open ? "Menu enabled" : "Toggle state"}
          </DemoButton>
        </div>
      </DemoSection>
      <DemoDocumentation
        importCode={'import { ShellHeader } from "shivanya-shell";'}
        usageCode={
          "<ShellHeader\n  branding={branding}\n  start={<Start />}\n  center={<Center />}\n  end={<Actions />}\n/>"
        }
      />
    </section>
  );
}
