"use client";

import { useState } from "react";
import { Button, SettingsIcon, Select, Typography } from "shivanya-ui";

import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";

export interface SettingsProps {
  onThemeChange?: (theme: string) => void;
}

export function Settings({ onThemeChange }: SettingsProps) {
  const { user, client, refreshUser } = useAuth();

  const [theme, setTheme] = useState(user?.settings?.theme ?? "system");

  const [success, setSuccess] = useState(false);

  const updateSettings = useAuthAction(async () =>
    client.updateSettings({
      theme,
    }),
  );

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
    setSuccess(false);
  };

  const applyAppearance = async () => {
    setSuccess(false);

    try {
      await updateSettings.run();
      await refreshUser();

      const appliedTheme =
        theme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : theme;

      document.documentElement.dataset.theme = appliedTheme;
      localStorage.setItem("shivanya-theme", appliedTheme);

      onThemeChange?.(theme);
      setSuccess(true);
    } catch {}
  };

  return (
    <div className="shivanya-account-section shivanya-settings">
      <div className="shivanya-settings-header">
        <div className="shivanya-settings-title">
          <span className="shivanya-settings-title-icon">
            <SettingsIcon size="md" />
          </span>

          <div className="shivanya-settings-title-content">
            <Typography as="h3" variant="h3" size="lg" weight="semibold">
              Settings
            </Typography>

            <Typography as="p" variant="body" size="xs" color="muted">
              Control your account experience and appearance.
            </Typography>
          </div>
        </div>
      </div>

      <section className="shivanya-settings-card">
        <div className="shivanya-settings-card-header">
          <Typography as="h4" variant="body" weight="semibold">
            Appearance
          </Typography>

          <Typography as="p" variant="caption" color="muted">
            Choose how ShivanyaMS should appear on your device.
          </Typography>
        </div>

        <div className="shivanya-settings-appearance-row">
          <div className="shivanya-settings-field">
            <Select
              label="Theme"
              value={theme}
              onChange={handleThemeChange}
              fullWidth
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Select>
          </div>

          <div className="shivanya-settings-actions">
            <Button
              variant="outline"
              loading={updateSettings.loading}
              onClick={applyAppearance}
            >
              Apply appearance
            </Button>
          </div>
        </div>

        {success && (
          <Typography as="p" variant="caption" color="success">
            Appearance updated successfully.
          </Typography>
        )}

        {updateSettings.error &&
          !Object.keys(updateSettings.fieldErrors).length && (
            <Typography as="p" variant="caption" color="danger">
              {updateSettings.error}
            </Typography>
          )}
      </section>
    </div>
  );
}
