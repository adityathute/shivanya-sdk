"use client";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import { BlankShell } from "shivanya-shell";

import { DemoButton } from "../_demo-utils";

export default function BlankShellDemo() {
  const openPreview = () => {
    window.open(
      "/shell-preview/blank-shell",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="BlankShell"
        description="Minimal shell base for screens that need shell context without a predefined header, sidebar, or footer."
      />

      <DemoSection title="Preview">
        <div className="shell-demo-row">
          <DemoButton onClick={openPreview}>
            Open Full Preview
          </DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Basic">
        <div className="shell-demo-preview shell-demo-main-preview">
          <BlankShell>
            <div className="shell-demo-content">
              <strong>Blank Shell Content</strong>

              <p className="shell-demo-muted">
                BlankShell provides the AppShell context without
                adding a predefined application layout.
              </p>
            </div>
          </BlankShell>
        </div>
      </DemoSection>

      <DemoSection title="Use Cases">
        <div className="shell-demo-grid">
          <div className="shell-demo-card">
            <strong>Custom Application Composition</strong>

            <p className="shell-demo-muted">
              Build your own header, navigation, content, and
              footer structure.
            </p>
          </div>

          <div className="shell-demo-card">
            <strong>Special Layouts</strong>

            <p className="shell-demo-muted">
              Useful for embedded screens and layouts that do not
              need the standard shell structure.
            </p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Custom Class">
        <div className="shell-demo-preview shell-demo-main-preview">
          <BlankShell className="shell-demo-blank-custom">
            <div className="shell-demo-content">
              <strong>Custom Blank Shell</strong>

              <p className="shell-demo-muted">
                BlankShell accepts a custom class for additional
                application-level styling.
              </p>
            </div>
          </BlankShell>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import { BlankShell } from "shivanya-shell";`}
        usageCode={`<BlankShell>
  <CustomLayout />
</BlankShell>

<BlankShell className="custom-shell">
  <CustomLayout />
</BlankShell>`}
      />
    </section>
  );
}