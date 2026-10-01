import { useState } from "react";
import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { DashboardShell, PageHeader } from "shivanya-shell";
import { branding, navigation, DemoButton, DemoContent } from "../_demo-utils";

export default function DashboardShellDemo() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section className="demo">
      <DemoHeader
        title="DashboardShell"
        description="Reusable application layout with header, sidebar, mobile navigation, main content, and optional footer."
      />
      <DemoSection title="Basic">
        <div className="shell-demo-preview shell-demo-preview-tall">
          <DashboardShell
            branding={branding}
            navigation={navigation}
            pathname="/projects"
            sidebarCollapsed={collapsed}
            headerEnd={
              <DemoButton onClick={() => setCollapsed((v) => !v)}>
                {collapsed ? "Expand" : "Collapse"}
              </DemoButton>
            }
            footer={<div className="shell-demo-content">Dashboard footer</div>}
            showFooter
          >
            <DemoContent title="Dashboard page" />
          </DashboardShell>
        </div>
      </DemoSection>
      <DemoSection title="Page Header">
        <div className="shell-demo-card">
          <PageHeader
            title="Projects"
            description="Manage reusable project resources."
            actions={<DemoButton primary>Create project</DemoButton>}
          />
        </div>
      </DemoSection>
      <DemoSection title="Responsive">
        <p className="shell-demo-muted shell-demo-mobile-hint">
          Resize the browser below 768px to test the mobile navigation.
        </p>
      </DemoSection>
      <DemoDocumentation
        importCode={'import { DashboardShell } from "shivanya-shell";'}
        usageCode={
          '<DashboardShell\n  branding={branding}\n  navigation={navigation}\n  pathname="/projects"\n>\n  <Page />\n</DashboardShell>'
        }
      />
    </section>
  );
}
