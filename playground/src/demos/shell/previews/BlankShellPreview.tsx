"use client";

import { BlankShell } from "shivanya-shell";

export default function BlankShellPreview() {
  return (
    <BlankShell>
      <div className="shell-demo-content">
        <div className="shell-demo-card">
          <strong>Blank Shell</strong>

          <p className="shell-demo-muted">
            BlankShell provides the shared shell context without
            imposing a predefined header, sidebar, or footer.
          </p>
        </div>
      </div>
    </BlankShell>
  );
}