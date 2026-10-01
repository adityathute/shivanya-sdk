import { useEffect, useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./feedback-demo.css";

import { Button, LoadingOverlay, loadingOverlayDocs } from "shivanya-ui";

export default function LoadingOverlayDemo() {
  const [open, setOpen] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (!fullscreen) {
      return;
    }

    const timer = window.setTimeout(() => {
      setFullscreen(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [fullscreen]);

  return (
    <section className="demo">
      <DemoHeader title={loadingOverlayDocs.name} description={loadingOverlayDocs.description} />

      <DemoSection title="Basic">
        <div className="feedback-demo-loading-box">
          <LoadingOverlay open={open} label="Loading data…" />
          <div className="feedback-demo-loading-content">
            <strong>Content area</strong>
            <span>The overlay covers this content while loading.</span>
          </div>
        </div>

        <div className="feedback-demo-actions">
          <Button onClick={() => setOpen((value) => !value)}>
            {open ? "Hide overlay" : "Show overlay"}
          </Button>
        </div>
      </DemoSection>

      <DemoSection title="Transparent">
        <div className="feedback-demo-loading-box">
          <LoadingOverlay open transparent label="Refreshing…" />
          <div className="feedback-demo-loading-content">
            <strong>Transparent loading</strong>
            <span>The transparent backdrop keeps the content visible.</span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Custom Label">
        <div className="feedback-demo-loading-box">
          <LoadingOverlay open label="Saving your changes…" />
          <div className="feedback-demo-loading-content">
            <strong>Saving</strong>
            <span>A custom ReactNode can be used as the loading label.</span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Fullscreen">
        <div className="feedback-demo-actions">
          <Button onClick={() => setFullscreen(true)}>
            Show fullscreen overlay
          </Button>
        </div>

        {fullscreen && (
          <LoadingOverlay
            open
            fullscreen
            label="Loading application…"
          />
        )}

        <p className="feedback-demo-note">
          The fullscreen example closes automatically after a short delay so the playground remains usable.
        </p>
      </DemoSection>

      <DemoSection title="Closed">
        <div className="feedback-demo-loading-box">
          <LoadingOverlay open={false} label="Hidden" />
          <div className="feedback-demo-loading-content">
            <strong>No overlay</strong>
            <span>When open is false, the loading layer is hidden.</span>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={loadingOverlayDocs.importCode}
        usageCode={loadingOverlayDocs.usageCode}
        props={loadingOverlayDocs.props}
      />
    </section>
  );
}
