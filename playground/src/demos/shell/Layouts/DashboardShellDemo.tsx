"use client";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import { DemoButton } from "../_demo-utils";

export default function DashboardShellDemo() {
  const openPreview = (query = "") => {
    window.open(
      `/shell-preview/dashboard-shell${query}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="demo">
      <DemoHeader
        title="DashboardShell"
        description="Reusable application shell with header, sidebar, mobile navigation, and main content."
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
              Standard dashboard layout with sidebar and header.
            </p>

            <DemoButton onClick={() => openPreview()}>
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>Collapsed Sidebar</strong>

            <p className="shell-demo-muted">
              Starts with the desktop sidebar collapsed.
            </p>

            <DemoButton
              onClick={() =>
                openPreview("?sidebarCollapsed=true")
              }
            >
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>Without Sidebar</strong>

            <p className="shell-demo-muted">
              Dashboard layout without desktop navigation.
            </p>

            <DemoButton
              onClick={() =>
                openPreview("?showSidebar=false")
              }
            >
              Preview
            </DemoButton>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Page Content">
        <div className="shell-demo-card">
          <div className="shell-demo-sidebar-toolbar">
            <div>
              <strong>Projects</strong>

              <span className="shell-demo-muted">
                Manage reusable project resources.
              </span>
            </div>

            <DemoButton primary>
              Create project
            </DemoButton>
          </div>

          <div className="shell-demo-grid">
            <div className="shell-demo-card">
              <strong>24</strong>

              <p className="shell-demo-muted">
                Active projects
              </p>
            </div>

            <div className="shell-demo-card">
              <strong>8</strong>

              <p className="shell-demo-muted">
                Team members
              </p>
            </div>

            <div className="shell-demo-card">
              <strong>12</strong>

              <p className="shell-demo-muted">
                Pending tasks
              </p>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Responsive">
        <div className="shell-demo-card">
          <strong>Mobile navigation</strong>

          <p className="shell-demo-muted">
            Resize the browser below 768px to switch from the
            desktop sidebar to mobile navigation.
          </p>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={'import { DashboardShell } from "shivanya-shell";'}
        usageCode={`<DashboardShell
  branding={branding}
  navigation={navigation}
  pathname="/projects"
  headerEnd={<Profile />}
>
  <Page />
</DashboardShell>`}
      />
    </section>
  );
}