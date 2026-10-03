import { CenteredShell } from "shivanya-shell";
import { branding, DemoButton } from "../_demo-utils";

export default function CenteredShellPreview() {
  return (
    <CenteredShell
      branding={branding}
      headerEnd={<DemoButton>Help</DemoButton>}
    >
      <div className="shell-demo-card">
        <strong>Centered content</strong>

        <p className="shell-demo-muted">
          The content area is centered with a configurable maximum width.
        </p>
      </div>
    </CenteredShell>
  );
}