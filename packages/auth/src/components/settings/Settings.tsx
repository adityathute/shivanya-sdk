"use client";

import { useState } from "react";
import { Button, SettingsIcon, Select, Typography } from "shivanya-ui";

import { useAuth } from "../../hooks/useAuth";

export interface SettingsProps {
  onThemeChange?: (theme: string) => void;
}

export function Settings({ onThemeChange }: SettingsProps) {
  const { user } = useAuth();

  const [theme, setTheme] = useState(user?.settings?.theme ?? "system");

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setTheme(value);
    onThemeChange?.(value);
  };

  const applyAppearance = () => {
    onThemeChange?.(theme);
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
            <Button variant="outline" onClick={applyAppearance}>
              Apply appearance
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
