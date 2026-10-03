import { BlankShell } from "shivanya-shell";

export default function BlankShellPreview() {
  return (
    <BlankShell>
      <div className="shell-demo-content">
        <div className="shell-demo-card">
          <strong>Blank shell</strong>

          <p className="shell-demo-muted">
            Add only the shell primitives required by the page.
          </p>
        </div>
      </div>
    </BlankShell>
  );
}