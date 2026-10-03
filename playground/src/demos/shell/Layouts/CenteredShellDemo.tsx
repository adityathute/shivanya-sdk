"use client";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import { CenteredShell } from "shivanya-shell";
import { DemoButton, branding } from "../_demo-utils";

export default function CenteredShellDemo() {
  const openPreview = (maxWidth?: number) => {
    const query = maxWidth
      ? `?maxWidth=${maxWidth}`
      : "";

    window.open(
      `/shell-preview/centered-shell${query}`,
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
          <DemoButton onClick={() => openPreview()}>
            Open Full Preview
          </DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Max Width">
        <div className="shell-demo-grid">
          <div className="shell-demo-card">
            <strong>480px</strong>

            <p className="shell-demo-muted">
              Compact width for forms and focused content.
            </p>

            <DemoButton onClick={() => openPreview(480)}>
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>640px</strong>

            <p className="shell-demo-muted">
              Balanced width for most focused pages.
            </p>

            <DemoButton onClick={() => openPreview(640)}>
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>960px</strong>

            <p className="shell-demo-muted">
              Wider layout for content-heavy screens.
            </p>

            <DemoButton onClick={() => openPreview(960)}>
              Preview
            </DemoButton>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Composition">
        <div className="shell-demo-preview shell-demo-centered-preview">
          <CenteredShell
            branding={branding}
            headerEnd={<DemoButton>Help</DemoButton>}
            maxWidth={640}
          >
            <div className="shell-demo-card">
              <strong>Centered content</strong>

              <p className="shell-demo-muted">
                The content area is centered with a configurable
                maximum width.
              </p>
            </div>
          </CenteredShell>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import { CenteredShell } from "shivanya-shell";`}
        usageCode={`<CenteredShell
  branding={branding}
  headerEnd={<HelpButton />}
  maxWidth={640}
>
  <Content />
</CenteredShell>`}
      />
    </section>
  );
}