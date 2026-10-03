import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { DemoButton } from "../_demo-utils";

export default function WebsiteShellDemo() {
  const openPreview = () => {
    window.open(
      "/shell-preview/website-shell",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="WebsiteShell"
        description="Simple public-facing shell with a header, main content area, and footer."
      />

      <DemoSection title="Preview">
        <div className="shell-demo-row">
          <DemoButton onClick={openPreview}>
            Open Full Preview
          </DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Content Padding">
        <div className="shell-demo-grid">
          <div className="shell-demo-card">
            Default content padding
          </div>

          <div className="shell-demo-card">
            Custom padding can be supplied with{" "}
            <code>contentPadding</code>.
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { WebsiteShell } from "shivanya-shell";'}
        usageCode={`<WebsiteShell branding={branding}>
  <Page />
</WebsiteShell>`}
      />
    </section>
  );
}