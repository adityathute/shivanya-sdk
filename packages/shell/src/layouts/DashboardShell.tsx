"use client";

import type { CSSProperties } from "react";
import type { ShellLayoutProps } from "../types/shell.js";

import { AppShell } from "./AppShell.js";
import { ShellHeader } from "../components/ShellHeader.js";
import { ShellSidebar } from "../components/ShellSidebar.js";
import { ShellMobileNav } from "../components/ShellMobileNav.js";
import { ShellMain } from "../components/ShellMain.js";
import { useShell } from "../hooks/useShell.js";

export function DashboardShell(props: ShellLayoutProps) {
  return (
    <AppShell
      className={[
        "shivanya-dashboard-shell",
        props.className,
      ]
        .filter(Boolean)
        .join(" ")}
      defaultSidebarCollapsed={props.sidebarCollapsed}
    >
      <DashboardShellInner {...props} />
    </AppShell>
  );
}

function DashboardShellInner({
  children,
  branding,
  navigation = [],
  pathname,
  linkComponent,
  headerStart,
  headerCenter,
  headerEnd,
  header,
  sidebarFooter,
  showHeader = true,
  showSidebar = true,
  sidebarCollapsed,
  sidebarWidth = 240,
  contentPadding = 24,
  isActive,
  onNavigate,
}: ShellLayoutProps) {
  const shell = useShell();

  const collapsed =
    sidebarCollapsed ?? shell.sidebarCollapsed;

  const bodyStyle = {
    "--shivanya-shell-content-padding":
      typeof contentPadding === "number"
        ? `${contentPadding}px`
        : contentPadding,
    "--shivanya-shell-sidebar-width":
      typeof sidebarWidth === "number"
        ? `${sidebarWidth}px`
        : sidebarWidth,
  } as CSSProperties;

  return (
    <>
      {showHeader &&
        (header ?? (
          <ShellHeader
            branding={branding}
            start={headerStart}
            center={headerCenter}
            end={headerEnd}
          />
        ))}

      <div
        className={[
          "shivanya-shell-body",
          showSidebar ? "has-sidebar" : "no-sidebar",
          collapsed ? "is-collapsed" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={bodyStyle}
      >
        {showSidebar && (
          <div className="shivanya-shell-desktop-sidebar">
            <ShellSidebar
              navigation={navigation}
              pathname={pathname}
              linkComponent={linkComponent}
              footer={sidebarFooter}
              collapsed={collapsed}
              width={sidebarWidth}
              isActive={isActive}
              onNavigate={onNavigate}
            />
          </div>
        )}

        <ShellMobileNav
          navigation={navigation}
          pathname={pathname}
          linkComponent={linkComponent}
          branding={branding}
          footer={sidebarFooter}
          size={sidebarWidth}
          isActive={isActive}
          onNavigate={onNavigate}
        />

        <ShellMain>{children}</ShellMain>
      </div>
    </>
  );
}