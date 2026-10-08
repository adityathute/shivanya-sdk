"use client";

import { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  HistoryIcon,
  ShieldCheckIcon,
  LinkIcon,
  SettingsIcon,
  Modal,
  Sidebar,
  SidebarItem,
} from "shivanya-ui";
import { Profile } from "../profile/Profile";
import { Sessions } from "../sessions/Sessions";
import { Security } from "../security/Security";
import { Connections } from "../connections/Connections";
import { Settings } from "../settings/Settings";
import { AccountOverview } from "./AccountOverview";

export type AccountView =
  | "overview"
  | "profile"
  | "sessions"
  | "security"
  | "connections"
  | "settings";

export interface AccountModalProps {
  open: boolean;
  onClose: () => void;
  initialView?: AccountView;
  onThemeChange?: (theme: string) => void;
}

export function AccountModal({
  open,
  onClose,
  initialView = "overview",
  onThemeChange,
}: AccountModalProps) {
  const [view, setView] = useState<AccountView>(initialView);

  useEffect(() => {
    if (open) {
      setView(initialView);
    }
  }, [open, initialView]);

  const navigate = (next: AccountView) => {
    setView(next);
  };

  const content = {
    overview: <AccountOverview onNavigate={navigate} />,
    profile: <Profile />,
    sessions: <Sessions />,
    security: <Security />,
    connections: <Connections />,
    settings: <Settings onThemeChange={onThemeChange} />,
  }[view];

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Account"
      size="xl"
      radius="md"
      closeOnOverlayClick
      className="shivanya-account-modal"
    >
      <div className="shivanya-account-layout">
        <aside className="shivanya-account-sidebar">
          <Sidebar variant="default" size="md">
            <SidebarItem
              active={view === "overview"}
              onClick={() => navigate("overview")}
              icon={<HomeIcon size="sm" />}
            >
              Overview
            </SidebarItem>

            <SidebarItem
              active={view === "profile"}
              onClick={() => navigate("profile")}
              icon={<UserIcon size="sm" />}
            >
              Profile
            </SidebarItem>

            <SidebarItem
              active={view === "sessions"}
              onClick={() => navigate("sessions")}
              icon={<HistoryIcon size="sm" />}
            >
              Sessions
            </SidebarItem>

            <SidebarItem
              active={view === "security"}
              onClick={() => navigate("security")}
              icon={<ShieldCheckIcon size="sm" />}
            >
              Security
            </SidebarItem>

            <SidebarItem
              active={view === "connections"}
              onClick={() => navigate("connections")}
              icon={<LinkIcon size="sm" />}
            >
              Connections
            </SidebarItem>

            <SidebarItem
              active={view === "settings"}
              onClick={() => navigate("settings")}
              icon={<SettingsIcon size="sm" />}
            >
              Settings
            </SidebarItem>
          </Sidebar>
        </aside>

        <main className="shivanya-account-content">
          {content}
        </main>
      </div>
    </Modal>
  );
}