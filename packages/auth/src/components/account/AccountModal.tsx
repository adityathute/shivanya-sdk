"use client";

import { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  HistoryIcon,
  ShieldCheckIcon,
  LinkIcon,
  SettingsIcon,
  Avatar,
  Modal,
  Sidebar,
  SidebarItem,
} from "shivanya-ui";
import { capitalizeWords } from "shivanya-core";
import { useAuth } from "../../hooks/useAuth";
import { Profile } from "../profile/Profile";
import { Sessions } from "../sessions/Sessions";
import { Security } from "../security/Security";
import { Connections } from "../connections/Connections";
import { Settings } from "../settings/Settings";

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
  const { user } = useAuth();
  const [view, setView] = useState<AccountView>(initialView);

  useEffect(() => {
    if (open) {
      setView(initialView);
    }
  }, [open, initialView]);

  const navigate = (next: AccountView) => {
    setView(next);
  };

  const fullName =
    capitalizeWords(`${user?.first_name ?? ""} ${user?.last_name ?? ""}`) ||
    user?.email ||
    "Account";

  const content = {
    overview: (
      <div className="shivanya-account-section">
        <div className="shivanya-account-hero">
          <Avatar
            src={user?.avatar ?? undefined}
            name={fullName}
            size="xl"
          />

          <div className="shivanya-account-hero-info">
            <h3>{fullName}</h3>
            <p>{user?.email}</p>

            {user?.email_verified && (
              <span className="shivanya-account-verified">
                Email verified
              </span>
            )}
          </div>
        </div>

        <div className="shivanya-account-overview-grid">
          <button type="button" onClick={() => navigate("profile")}>
            <span className="shivanya-account-overview-icon">
              <UserIcon size="md" />
            </span>

            <span className="shivanya-account-overview-content">
              <strong>Profile</strong>
              <span>Personal information</span>
            </span>
          </button>

          <button type="button" onClick={() => navigate("sessions")}>
            <span className="shivanya-account-overview-icon">
              <HistoryIcon size="md" />
            </span>

            <span className="shivanya-account-overview-content">
              <strong>Sessions</strong>
              <span>Devices and active sessions</span>
            </span>
          </button>

          <button type="button" onClick={() => navigate("security")}>
            <span className="shivanya-account-overview-icon">
              <ShieldCheckIcon size="md" />
            </span>

            <span className="shivanya-account-overview-content">
              <strong>Security</strong>
              <span>Password and account protection</span>
            </span>
          </button>

          <button type="button" onClick={() => navigate("connections")}>
            <span className="shivanya-account-overview-icon">
              <LinkIcon size="md" />
            </span>

            <span className="shivanya-account-overview-content">
              <strong>Connections</strong>
              <span>Connected services</span>
            </span>
          </button>

          <button type="button" onClick={() => navigate("settings")}>
            <span className="shivanya-account-overview-icon">
              <SettingsIcon size="md" />
            </span>

            <span className="shivanya-account-overview-content">
              <strong>Settings</strong>
              <span>Account preferences</span>
            </span>
          </button>
        </div>
      </div>
    ),

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