import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { DemoButton } from "../_demo-utils";

export default function DashboardShellDemo() {
  const openPreview = () => {
    window.open(
      "/shell-preview/dashboard-shell",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="DashboardShell"
        description="Reusable application layout with header, sidebar, mobile navigation, main content, and optional footer."
      />

      <DemoSection title="Preview">
        <div className="shell-demo-row">
          <DemoButton onClick={openPreview}>
            Open Full Preview
          </DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Page Header">
        <div className="shell-demo-card">
          <strong>Projects</strong>

          <p className="shell-demo-muted">
            Manage reusable project resources.
          </p>

          <DemoButton primary>
            Create project
          </DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Responsive">
        <p className="shell-demo-muted shell-demo-mobile-hint">
          Resize the browser below 768px to test the mobile navigation.
        </p>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { DashboardShell } from "shivanya-shell";'}
        usageCode={`<DashboardShell
  branding={branding}
  navigation={navigation}
  pathname="/projects"
>
  <Page />
</DashboardShell>`}
      />
    </section>
  );
}