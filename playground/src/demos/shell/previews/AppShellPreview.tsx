"use client";

import {
  AppShell,
  ShellHeader,
  ShellSidebar,
  ShellMobileNav,
  ShellMain,
} from "shivanya-shell";

import { branding, navigation, DemoButton } from "../_demo-utils";

export default function AppShellPreview() {
  return (
    <AppShell defaultSidebarOpen defaultSidebarCollapsed={false}>
      <ShellHeader branding={branding} end={<DemoButton>Profile</DemoButton>} />

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
          <div className="shell-demo-card">
            <strong>AppShell Content</strong>

            <p className="shell-demo-muted">
              AppShell supplies the shared shell context and root container for
              the application layout.
            </p>
          </div>
        </ShellMain>
      </div>
    </AppShell>
  );
}
