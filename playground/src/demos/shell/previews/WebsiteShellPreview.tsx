import { WebsiteShell, PageHeader } from "shivanya-shell";
import { branding, DemoButton } from "../_demo-utils";
import "../shell-demo.css";

export default function WebsiteShellPreview() {
  return (
    <WebsiteShell
      branding={branding}
      headerEnd={<DemoButton>Sign in</DemoButton>}
      footer={<div>© Shivanya Website</div>}
    >
      <PageHeader
        title="Public page"
        description="A reusable website layout without application navigation."
      />

      <div className="shell-demo-card">
        Website content
      </div>
    </WebsiteShell>
  );
}