"use client";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import { DemoButton } from "../_demo-utils";

export default function WebsiteShellDemo() {
  const openPreview = (query = "") => {
    window.open(
      `/shell-preview/website-shell${query}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="WebsiteShell"
        description="Public-facing shell for websites, landing pages, documentation, and content-focused screens."
      />

      <DemoSection title="Preview">
        <div className="shell-demo-row">
          <DemoButton onClick={() => openPreview()}>
            Open Full Preview
          </DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Layout Options">
        <div className="shell-demo-grid">
          <div className="shell-demo-card">
            <strong>Default</strong>

            <p className="shell-demo-muted">
              Standard website layout with header and centered footer content.
            </p>

            <DemoButton onClick={() => openPreview()}>
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>Without Footer</strong>

            <p className="shell-demo-muted">
              Useful for landing pages and focused public screens.
            </p>

            <DemoButton
              onClick={() =>
                openPreview("?showFooter=false")
              }
            >
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>Without Header</strong>

            <p className="shell-demo-muted">
              Removes the predefined website header.
            </p>

            <DemoButton
              onClick={() =>
                openPreview("?showHeader=false")
              }
            >
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>Compact Padding</strong>

            <p className="shell-demo-muted">
              Uses a smaller content spacing of 16px.
            </p>

            <DemoButton
              onClick={() =>
                openPreview("?contentPadding=16")
              }
            >
              Preview
            </DemoButton>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Content Padding">
        <div className="shell-demo-grid">
          <div className="shell-demo-card">
            <strong>16px</strong>

            <p className="shell-demo-muted">
              Compact spacing for smaller content areas.
            </p>

            <DemoButton
              onClick={() =>
                openPreview("?contentPadding=16")
              }
            >
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>24px</strong>

            <p className="shell-demo-muted">
              Default balanced content spacing.
            </p>

            <DemoButton
              onClick={() =>
                openPreview("?contentPadding=24")
              }
            >
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>40px</strong>

            <p className="shell-demo-muted">
              More spacious layout for larger screens.
            </p>

            <DemoButton
              onClick={() =>
                openPreview("?contentPadding=40")
              }
            >
              Preview
            </DemoButton>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Composition">
        <div className="shell-demo-card">
          <div className="shell-demo-sidebar-toolbar">
            <div>
              <strong>Public website content</strong>

              <span className="shell-demo-muted">
                WebsiteShell provides the shared public layout while
                the page controls its own content.
              </span>
            </div>

            <DemoButton primary>
              Get Started
            </DemoButton>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { WebsiteShell } from "shivanya-shell";'}
        usageCode={`<WebsiteShell
  branding={branding}
  headerEnd={<Actions />}
  footer={
    <>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy</a>
    </>
  }
>
  <Page />
</WebsiteShell>`}
      />
    </section>
  );
}