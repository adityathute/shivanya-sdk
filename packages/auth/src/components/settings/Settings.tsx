"use client";

import { useEffect, useState } from "react";
import { Button, SettingsIcon, Select, Typography } from "shivanya-ui";

import type { Language } from "shivanya-i18n";
import { useAuth } from "../../hooks/useAuth";
import { useAuthAction } from "../../hooks/useAuthAction";

export interface SettingsProps {
  onThemeChange?: (theme: string) => void;
}

export function Settings({ onThemeChange }: SettingsProps) {
  const { user, updateSettings, refreshUser } = useAuth();

  const [theme, setTheme] = useState(user?.settings?.theme ?? "light");
  const [language, setLanguage] = useState<Language>(
    user?.settings?.language ?? "en",
  );

  const [themeSuccess, setThemeSuccess] = useState(false);
  const [languageSuccess, setLanguageSuccess] = useState(false);

  useEffect(() => {
    if (user?.settings?.theme) {
      setTheme(user.settings.theme);
    }

    if (user?.settings?.language) {
      setLanguage(user.settings.language);
    }
  }, [user?.settings?.theme, user?.settings?.language]);

  const updateAppearance = useAuthAction(async () => updateSettings({ theme }));

  const updateLanguage = useAuthAction(async () =>
    updateSettings({ language }),
  );

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
    setThemeSuccess(false);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setLanguage(event.target.value as Language);
    setLanguageSuccess(false);
  };

  const applyAppearance = async () => {
    setThemeSuccess(false);

    try {
      await updateAppearance.run();
      await refreshUser();

      const appliedTheme =
        theme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : theme;

      document.documentElement.dataset.theme = appliedTheme;
      document.documentElement.style.colorScheme = appliedTheme;

      localStorage.setItem("shivanya-theme", appliedTheme);

      document.cookie = `shivanya-theme=${appliedTheme}; Path=/; Max-Age=31536000; SameSite=Lax`;

      onThemeChange?.(theme);
      setThemeSuccess(true);
    } catch {}
  };

  const applyLanguage = async () => {
    setLanguageSuccess(false);

    try {
      await updateLanguage.run();

      localStorage.setItem("shivanya-language", language);
      document.cookie = `shivanya-language=${language}; Path=/; Max-Age=31536000; SameSite=Lax`;

      await refreshUser();
      setLanguageSuccess(true);
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
              loading={updateAppearance.loading}
              onClick={applyAppearance}
            >
              Apply appearance
            </Button>
          </div>
        </div>

        {themeSuccess && (
          <Typography as="p" variant="caption" color="success">
            Appearance updated successfully.
          </Typography>
        )}

        {updateAppearance.error &&
          !Object.keys(updateAppearance.fieldErrors).length && (
            <Typography as="p" variant="caption" color="danger">
              {updateAppearance.error}
            </Typography>
          )}
      </section>

      <section className="shivanya-settings-card">
        <div className="shivanya-settings-card-header">
          <Typography as="h4" variant="body" weight="semibold">
            Language
          </Typography>

          <Typography as="p" variant="caption" color="muted">
            Choose the language for the ShivanyaMS interface.
          </Typography>
        </div>

        <div className="shivanya-settings-appearance-row">
          <div className="shivanya-settings-field">
            <Select
              label="Language"
              value={language}
              onChange={handleLanguageChange}
              fullWidth
            >
              <option value="en">English</option>
              <option value="mr">मराठी (Marathi)</option>
              <option value="hi">हिन्दी (Hindi)</option>
            </Select>
          </div>

          <div className="shivanya-settings-actions">
            <Button
              variant="outline"
              loading={updateLanguage.loading}
              onClick={applyLanguage}
            >
              Apply language
            </Button>
          </div>
        </div>

        {languageSuccess && (
          <Typography as="p" variant="caption" color="success">
            Language updated successfully.
          </Typography>
        )}

        {updateLanguage.error &&
          !Object.keys(updateLanguage.fieldErrors).length && (
            <Typography as="p" variant="caption" color="danger">
              {updateLanguage.error}
            </Typography>
          )}
      </section>
    </div>
  );
}
