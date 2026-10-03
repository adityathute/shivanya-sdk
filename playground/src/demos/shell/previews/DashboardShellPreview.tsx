"use client";

import { useEffect, useState } from "react";
import { DashboardShell } from "shivanya-shell";

import {
  branding,
  navigation,
  DemoButton,
  DemoContent,
} from "../_demo-utils";

export default function DashboardShellPreview() {
  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search,
    );

    setSidebarCollapsed(
      params.get("sidebarCollapsed") === "true",
    );

    setShowSidebar(
      params.get("showSidebar") !== "false",
    );
  }, []);

  return (
    <DashboardShell
      branding={branding}
      navigation={navigation}
      pathname="/projects"
      sidebarCollapsed={sidebarCollapsed}
      showSidebar={showSidebar}
      headerEnd={
        <DemoButton>
          Profile
        </DemoButton>
      }
    >
      <DemoContent title="Dashboard page" />
    </DashboardShell>
  );
}