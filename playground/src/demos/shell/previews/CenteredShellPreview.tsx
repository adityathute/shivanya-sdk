"use client";

import { CenteredShell } from "shivanya-shell";
import { branding, DemoButton } from "../_demo-utils";

export default function CenteredShellPreview() {
  const params = new URLSearchParams(window.location.search);
  const maxWidthValue = params.get("maxWidth");

  const maxWidth = maxWidthValue
    ? Number(maxWidthValue)
    : 640;

  return (
    <CenteredShell
      branding={branding}
      headerEnd={<DemoButton>Help</DemoButton>}
      maxWidth={Number.isFinite(maxWidth) ? maxWidth : 640}
    >
      <div className="shell-demo-card">
        <strong>Centered content</strong>

        <p className="shell-demo-muted">
          The content area is centered with a configurable
          maximum width.
        </p>

        <p className="shell-demo-muted">
          Current max width: {Number.isFinite(maxWidth) ? maxWidth : 640}px
        </p>
      </div>
    </CenteredShell>
  );
}