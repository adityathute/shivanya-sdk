import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { DemoButton } from "../_demo-utils";

export default function CenteredShellDemo() {
  const openPreview = () => {
    window.open(
      "/shell-preview/centered-shell",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="CenteredShell"
        description="Centered content shell for focused pages such as forms, setup flows, and lightweight screens."
      />

      <DemoSection title="Preview">
        <div className="shell-demo-row">
          <DemoButton onClick={openPreview}>
            Open Full Preview
          </DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Max Width">
        <div className="shell-demo-row">
          <DemoButton>maxWidth: 480</DemoButton>
          <DemoButton>maxWidth: 640</DemoButton>
          <DemoButton>maxWidth: 960</DemoButton>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { CenteredShell } from "shivanya-shell";'}
        usageCode={`<CenteredShell maxWidth={640}>
  <Content />
</CenteredShell>`}
      />
    </section>
  );
}