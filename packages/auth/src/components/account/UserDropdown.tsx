"use client";

import { useEffect, useRef, useState } from "react";
import {
  MonitorIcon,
  SettingsIcon,
  UserCheckIcon,
  LogoutIcon,
  LoginIcon,
  UserPlusIcon,
  Avatar,
} from "shivanya-ui";
import { capitalizeWords } from "shivanya-core";
import { useAuth } from "../../hooks/useAuth";

export type UserDropdownView =
  | "profile"
  | "sessions"
  | "settings";

export interface UserDropdownProps {
  onNavigate?: (view: UserDropdownView) => void;
  onLogin?: () => void;
  onRegister?: () => void;
}

export function UserDropdown({
  onNavigate,
  onLogin,
  onRegister,
}: UserDropdownProps) {
  const { user, loading, isAuthenticated, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return null;
  }

  const firstName = capitalizeWords(user?.first_name ?? "");
  const lastName = capitalizeWords(user?.last_name ?? "");

  const fullName =
    `${firstName} ${lastName}`.trim() ||
    capitalizeWords(user?.username ?? "") ||
    user?.email?.trim() ||
    "User";

  const initials =
    `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() ||
    fullName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase() ||
    "U";

  const navigate = (view: UserDropdownView) => {
    setOpen(false);
    onNavigate?.(view);
  };

  const handleLogin = () => {
    setOpen(false);
    onLogin?.();
  };

  const handleRegister = () => {
    setOpen(false);
    onRegister?.();
  };

  const handleLogout = async () => {
    setOpen(false);
    await logout();
  };

  return (
    <div ref={dropdownRef} className="shivanya-user-dropdown">
      <button
        type="button"
        className={`shivanya-user-dropdown-trigger ${
          open ? "shivanya-user-dropdown-trigger-open" : ""
        }`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Open account menu"
      >
        {isAuthenticated ? (
          <Avatar
            src={user?.avatar ?? undefined}
            name={fullName}
            size="sm"
          />
        ) : (
          <span className="shivanya-user-dropdown-trigger-guest">
            <UserCheckIcon size="sm" />
          </span>
        )}
      </button>

      <div
        className={`shivanya-user-dropdown-menu ${
          open ? "shivanya-user-dropdown-menu-open" : ""
        }`}
        role="menu"
        aria-hidden={!open}
      >
        <span className="shivanya-user-dropdown-arrow" />

        {isAuthenticated ? (
          <>
            <button
              type="button"
              className="shivanya-user-dropdown-profile"
              onClick={() => navigate("profile")}
            >
              <Avatar
                src={user?.avatar ?? undefined}
                name={fullName}
                size="md"
              />

              <span className="shivanya-user-dropdown-profile-info">
                <span className="shivanya-user-dropdown-profile-name">
                  {fullName}
                </span>

                {user?.email && (
                  <span className="shivanya-user-dropdown-profile-email">
                    {user.email}
                  </span>
                )}
              </span>
            </button>

            <div className="shivanya-user-dropdown-divider" />

            <button
              type="button"
              className="shivanya-user-dropdown-item"
              onClick={() => navigate("profile")}
              role="menuitem"
            >
              <span className="shivanya-user-dropdown-item-icon profile">
                <UserCheckIcon size="sm" />
              </span>

              <span>Profile</span>
            </button>

            <button
              type="button"
              className="shivanya-user-dropdown-item"
              onClick={() => navigate("sessions")}
              role="menuitem"
            >
              <span className="shivanya-user-dropdown-item-icon sessions">
                <MonitorIcon size="sm" />
              </span>

              <span>Sessions</span>
            </button>

            <div className="shivanya-user-dropdown-divider" />

            <button
              type="button"
              className="shivanya-user-dropdown-item"
              onClick={() => navigate("settings")}
              role="menuitem"
            >
              <span className="shivanya-user-dropdown-item-icon settings">
                <SettingsIcon size="sm" />
              </span>

              <span>Account Settings</span>
            </button>

            <div className="shivanya-user-dropdown-divider" />

            <button
              type="button"
              className="shivanya-user-dropdown-item shivanya-user-dropdown-logout"
              onClick={handleLogout}
              role="menuitem"
            >
              <span className="shivanya-user-dropdown-item-icon logout">
                <LogoutIcon size="sm" />
              </span>

              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="shivanya-user-dropdown-item"
              onClick={handleLogin}
              role="menuitem"
            >
              <span className="shivanya-user-dropdown-item-icon profile">
                <LoginIcon size="sm" />
              </span>

              <span>Login</span>
            </button>

            <button
              type="button"
              className="shivanya-user-dropdown-item"
              onClick={handleRegister}
              role="menuitem"
            >
              <span className="shivanya-user-dropdown-item-icon settings">
                <UserPlusIcon size="sm" />
              </span>

              <span>Register</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}