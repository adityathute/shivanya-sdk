"use client";

import {
  UserIcon,
  HistoryIcon,
  ShieldCheckIcon,
  LinkIcon,
  SettingsIcon,
  Avatar,
} from "shivanya-ui";
import { capitalizeWords } from "shivanya-core";
import { useAuth } from "../../hooks/useAuth";

export type AccountOverviewView =
  | "profile"
  | "sessions"
  | "security"
  | "connections"
  | "settings";

interface AccountOverviewProps {
  onNavigate: (view: AccountOverviewView) => void;
}

export function AccountOverview({
  onNavigate,
}: AccountOverviewProps) {
  const { user } = useAuth();

  const fullName =
    capitalizeWords(`${user?.first_name ?? ""} ${user?.last_name ?? ""}`) ||
    user?.email ||
    "Account";

  return (
    <div className="shivanya-account-overview">
      <div className="shivanya-account-overview-hero">
        <Avatar
          src={user?.avatar ?? undefined}
          name={fullName}
          size="xl"
        />

        <div className="shivanya-account-overview-hero-info">
          <h3>{fullName}</h3>
          <p>{user?.email}</p>

          {user?.email_verified && (
            <span className="shivanya-account-overview-verified">
              Email verified
            </span>
          )}
        </div>
      </div>

      <div className="shivanya-account-overview-grid">
        <button type="button" onClick={() => onNavigate("profile")}>
          <span className="shivanya-account-overview-icon">
            <UserIcon size="md" />
          </span>

          <span className="shivanya-account-overview-content">
            <strong>Profile</strong>
            <span>Personal information</span>
          </span>
        </button>

        <button type="button" onClick={() => onNavigate("sessions")}>
          <span className="shivanya-account-overview-icon">
            <HistoryIcon size="md" />
          </span>

          <span className="shivanya-account-overview-content">
            <strong>Sessions</strong>
            <span>Devices and active sessions</span>
          </span>
        </button>

        <button type="button" onClick={() => onNavigate("security")}>
          <span className="shivanya-account-overview-icon">
            <ShieldCheckIcon size="md" />
          </span>

          <span className="shivanya-account-overview-content">
            <strong>Security</strong>
            <span>Password and account protection</span>
          </span>
        </button>

        <button type="button" onClick={() => onNavigate("connections")}>
          <span className="shivanya-account-overview-icon">
            <LinkIcon size="md" />
          </span>

          <span className="shivanya-account-overview-content">
            <strong>Connections</strong>
            <span>Connected services</span>
          </span>
        </button>

        <button type="button" onClick={() => onNavigate("settings")}>
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
  );
}