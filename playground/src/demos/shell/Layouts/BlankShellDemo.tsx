import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { DemoButton } from "../_demo-utils";

export default function BlankShellDemo() {
  const openPreview = () => {
    window.open("/shell-preview/blank-shell", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="demo">
      <DemoHeader
        title="BlankShell"
        description="Minimal shell base for screens that need shell context without a predefined header, sidebar, or footer."
      />

      <DemoSection title="Preview">
        <div className="shell-demo-row">
          <DemoButton onClick={openPreview}>Open Full Preview</DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Use Cases">
        <div className="shell-demo-grid">
          <div className="shell-demo-card">Custom application composition</div>

          <div className="shell-demo-card">
            Special layouts and embedded screens
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { BlankShell } from "shivanya-shell";'}
        usageCode={`<BlankShell>
  <CustomLayout />
</BlankShell>`}
      />
    </section>
  );
}
