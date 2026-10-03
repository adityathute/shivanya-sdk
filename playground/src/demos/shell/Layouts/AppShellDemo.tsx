"use client";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import {
  AppShell,
  ShellHeader,
  ShellSidebar,
  ShellMobileNav,
  ShellMain,
} from "shivanya-shell";

import { DemoButton, branding, navigation } from "../_demo-utils";

export default function AppShellDemo() {
  const openPreview = () => {
    window.open("/shell-preview/app-shell", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="demo">
      <DemoHeader
        title="AppShell"
        description="Base provider and root shell used by reusable shell layouts."
      />

      <DemoSection title="Preview">
        <div className="shell-demo-row">
          <DemoButton onClick={openPreview}>Open Full Preview</DemoButton>
        </div>
      </DemoSection>

      <DemoSection title="Default State Options">
        <div className="shell-demo-grid">
          <div className="shell-demo-card">
            <strong>Sidebar Open</strong>

            <p className="shell-demo-muted">
              Starts the shell with the sidebar open.
            </p>

            <DemoButton
              onClick={() =>
                window.open(
                  "/shell-preview/app-shell?sidebarOpen=true",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>Sidebar Collapsed</strong>

            <p className="shell-demo-muted">
              Starts the shell with the sidebar collapsed.
            </p>

            <DemoButton
              onClick={() =>
                window.open(
                  "/shell-preview/app-shell?sidebarCollapsed=true",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Preview
            </DemoButton>
          </div>

          <div className="shell-demo-card">
            <strong>Mobile Open</strong>

            <p className="shell-demo-muted">
              Starts the shell with mobile navigation open.
            </p>

            <DemoButton
              onClick={() =>
                window.open(
                  "/shell-preview/app-shell?mobileOpen=true",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Preview
            </DemoButton>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Composition">
        <div className="shell-demo-preview shell-demo-main-preview">
          <AppShell defaultSidebarOpen defaultSidebarCollapsed={false}>
            <ShellHeader branding={branding} />

            <ShellMobileNav
              navigation={navigation}
              pathname="/dashboard"
              branding={branding}
            />

            <div className="shell-demo-app-layout">
              <ShellSidebar
                navigation={navigation}
                pathname="/dashboard"
                variant="static"
              />

              <ShellMain>
                <div className="shell-demo-content">
                  <strong>Application Content</strong>

                  <p className="shell-demo-muted">
                    AppShell provides the shell context and root container while
                    the individual shell components define the layout.
                  </p>
                </div>
              </ShellMain>
            </div>
          </AppShell>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import {
  AppShell,
  ShellHeader,
  ShellSidebar,
  ShellMain,
} from "shivanya-shell";`}
        usageCode={`<AppShell>
  <ShellHeader branding={branding} />

  <div className="app-layout">
    <ShellSidebar
      navigation={navigation}
      pathname="/dashboard"
      variant="static"
    />

    <ShellMain>
      {children}
    </ShellMain>
  </div>
</AppShell>`}
      />
    </section>
  );
}
