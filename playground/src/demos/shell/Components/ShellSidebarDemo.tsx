"use client";

import { useState } from "react";

import {
  Button,
  IconButton,
} from "shivanya-ui";

import {
  DashboardIcon,
  FolderIcon,
  ReportsIcon,
  SettingsIcon,
  PanelLeftIcon,
  PanelRightIcon,
  MenuIcon,
  ChevronRightIcon,
} from "shivanya-ui/icons";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";

import {
  ShellProvider,
  ShellSidebar,
} from "shivanya-shell";

export const branding = {
  name: "Shivanya",
  subtitle: "Shell Demo",
  href: "/",
  src: "/logo.png",
  alt: "Shivanya",
};

const navigation = [
  {
    id: "overview",
    label: "Overview",
    href: "/",
    icon: <DashboardIcon />,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon />,
    badge: "4",
  },
  {
    id: "reports",
    label: "Reports",
    href: "/reports",
    icon: <ReportsIcon />,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
  },
  {
    id: "divider",
    label: "",
    divider: true,
  },
  {
    id: "disabled",
    label: "Disabled",
    icon: <MenuIcon />,
    disabled: true,
  },
];

function SidebarPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shell-demo-preview shell-demo-sidebar-preview">
      {children}
    </div>
  );
}

export default function ShellSidebarDemo() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="demo">
      <DemoHeader
        title="ShellSidebar"
        description="Reusable navigation sidebar with active routes, real icons, collapsed mode, badges, dividers, positions, variants, and custom content."
      />

      <DemoSection title="Basic">
        <SidebarPreview>
          <ShellProvider>
            <div className="shell-demo-sidebar-layout">
              <ShellSidebar
                navigation={navigation}
                pathname="/projects"
                branding={branding}
                footer={
                  <div className="shell-demo-sidebar-footer-demo">
                    <strong>Shivanya SDK</strong>
                    <span className="shell-demo-muted">
                      v1.0.0
                    </span>
                  </div>
                }
              />

              <div className="shell-demo-sidebar-content">
                <div className="shell-demo-sidebar-toolbar">
                  <div>
                    <strong>Projects</strong>
                    <span className="shell-demo-muted">
                      Active navigation item
                    </span>
                  </div>

                  <IconButton
                    size="sm"
                    variant="outline"
                    aria-label="Settings"
                  >
                    <SettingsIcon />
                  </IconButton>
                </div>

                <div className="shell-demo-card">
                  <div className="shell-demo-label">
                    Main Content
                  </div>

                  <p className="shell-demo-muted">
                    The Projects item is active and displays its
                    badge.
                  </p>
                </div>
              </div>
            </div>
          </ShellProvider>
        </SidebarPreview>
      </DemoSection>

      <DemoSection title="Collapsed">
        <SidebarPreview>
          <ShellProvider>
            <div className="shell-demo-sidebar-layout">
              <ShellSidebar
                navigation={navigation}
                pathname="/projects"
                branding={branding}
                collapsed={collapsed}
                footer={
                  <IconButton
                    size="sm"
                    variant="outline"
                    aria-label={
                      collapsed
                        ? "Expand sidebar"
                        : "Collapse sidebar"
                    }
                    onClick={() =>
                      setCollapsed((value) => !value)
                    }
                  >
                    {collapsed ? (
                      <PanelRightIcon />
                    ) : (
                      <PanelLeftIcon />
                    )}
                  </IconButton>
                }
              />

              <div className="shell-demo-sidebar-content">
                <div className="shell-demo-sidebar-toolbar">
                  <div>
                    <strong>
                      {collapsed
                        ? "Collapsed"
                        : "Expanded"}
                    </strong>

                    <span className="shell-demo-muted">
                      Sidebar state demonstration
                    </span>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    startIcon={
                      collapsed ? (
                        <PanelRightIcon />
                      ) : (
                        <PanelLeftIcon />
                      )
                    }
                    onClick={() =>
                      setCollapsed((value) => !value)
                    }
                  >
                    {collapsed
                      ? "Expand"
                      : "Collapse"}
                  </Button>
                </div>

                <div className="shell-demo-card">
                  <div className="shell-demo-label">
                    Sidebar State
                  </div>

                  <p className="shell-demo-muted">
                    {collapsed
                      ? "The sidebar is 72px wide and navigation labels are hidden."
                      : "The sidebar is expanded and navigation labels are visible."}
                  </p>
                </div>
              </div>
            </div>
          </ShellProvider>
        </SidebarPreview>
      </DemoSection>

      <DemoSection title="Custom Width">
        <SidebarPreview>
          <div className="shell-demo-sidebar-layout">
            <ShellSidebar
              navigation={navigation}
              pathname="/projects"
              branding={branding}
              width={300}
              variant="static"
            />

            <div className="shell-demo-sidebar-content">
              <div className="shell-demo-card">
                <div className="shell-demo-label">
                  300px Sidebar
                </div>

                <p className="shell-demo-muted">
                  Sidebar width can be configured independently.
                </p>
              </div>
            </div>
          </div>
        </SidebarPreview>
      </DemoSection>

      <DemoSection title="Right Sidebar">
        <SidebarPreview>
          <div className="shell-demo-sidebar-layout shell-demo-sidebar-layout-right">
            <div className="shell-demo-sidebar-content">
              <div className="shell-demo-card">
                <div className="shell-demo-label">
                  Main Content
                </div>

                <p className="shell-demo-muted">
                  The sidebar can be positioned on the right.
                </p>
              </div>
            </div>

            <ShellSidebar
              navigation={navigation.slice(0, 4)}
              pathname="/reports"
              branding={branding}
              position="right"
              variant="static"
            />
          </div>
        </SidebarPreview>
      </DemoSection>

      <DemoSection title="Custom Content">
        <SidebarPreview>
          <div className="shell-demo-sidebar-layout">
            <ShellSidebar
              branding={branding}
              variant="static"
            >
              <div className="shell-demo-sidebar-custom">
                <Button
                  variant="ghost"
                  fullWidth
                  startIcon={<MenuIcon />}
                  endIcon={<ChevronRightIcon />}
                >
                  Custom Navigation
                </Button>

                <Button
                  variant="ghost"
                  fullWidth
                  startIcon={<SettingsIcon />}
                >
                  Settings
                </Button>
              </div>
            </ShellSidebar>

            <div className="shell-demo-sidebar-content">
              <div className="shell-demo-card">
                Custom sidebar content can be supplied through
                children.
              </div>
            </div>
          </div>
        </SidebarPreview>
      </DemoSection>

      <DemoSection title="Static Variants">
        <div className="shell-demo-grid">
          <div className="shell-demo-card">
            <ShellSidebar
              navigation={navigation.slice(0, 4)}
              pathname="/"
              width={220}
              position="left"
              variant="static"
            />
          </div>

          <div className="shell-demo-card">
            <ShellSidebar
              navigation={navigation.slice(0, 4)}
              pathname="/"
              width={220}
              position="right"
              variant="static"
            />
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={`import { ShellSidebar } from "shivanya-shell";
import {
  DashboardIcon,
  FolderIcon,
  ReportsIcon,
  SettingsIcon,
} from "shivanya-ui/icons";`}
        usageCode={`const navigation = [
  {
    label: "Overview",
    href: "/",
    icon: <DashboardIcon />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon />,
    badge: "4",
  },
  {
    label: "Reports",
    href: "/reports",
    icon: <ReportsIcon />,
  },
];

<ShellSidebar
  navigation={navigation}
  pathname="/projects"
  branding={{
    name: "Shivanya",
    subtitle: "SDK",
    src: "/logo.png",
  }}
/>`}
      />
    </section>
  );
}