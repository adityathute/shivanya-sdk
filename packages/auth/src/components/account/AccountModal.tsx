"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  Modal,
  Sidebar,
  SidebarItem,
} from "shivanya-ui";
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
  const { user, logout } = useAuth();
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
    `${user?.first_name ?? ""} ${user?.last_name ?? ""}`.trim() ||
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
          <button
            type="button"
            onClick={() => navigate("profile")}
          >
            <strong>Profile</strong>
            <span>Personal information</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("sessions")}
          >
            <strong>Sessions</strong>
            <span>Devices and active sessions</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("security")}
          >
            <strong>Security</strong>
            <span>Password and account protection</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("connections")}
          >
            <strong>Connections</strong>
            <span>Connected services</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("settings")}
          >
            <strong>Settings</strong>
            <span>Account preferences</span>
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
            >
              Overview
            </SidebarItem>

            <SidebarItem
              active={view === "profile"}
              onClick={() => navigate("profile")}
            >
              Profile
            </SidebarItem>

            <SidebarItem
              active={view === "sessions"}
              onClick={() => navigate("sessions")}
            >
              Sessions
            </SidebarItem>

            <SidebarItem
              active={view === "security"}
              onClick={() => navigate("security")}
            >
              Security
            </SidebarItem>

            <SidebarItem
              active={view === "connections"}
              onClick={() => navigate("connections")}
            >
              Connections
            </SidebarItem>

            <SidebarItem
              active={view === "settings"}
              onClick={() => navigate("settings")}
            >
              Settings
            </SidebarItem>

            <SidebarItem
              onClick={() => {
                void logout().then(onClose);
              }}
            >
              Logout
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