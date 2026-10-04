"use client";

import { useState } from "react";
import { Button, Select } from "shivanya-ui";
import { useAuth } from "../../hooks/useAuth";

export interface SettingsProps { onThemeChange?: (theme: string) => void; }

export function Settings({ onThemeChange }: SettingsProps) {
  const { user } = useAuth();
  const [theme, setTheme] = useState(user?.settings?.theme ?? "system");
  return <div className="shivanya-account-section"><div className="shivanya-account-section-header"><div><h3>Settings</h3><p>Control your account experience.</p></div></div><div className="shivanya-settings-card"><Select label="Theme" value={theme} onChange={(e) => { setTheme(e.target.value); onThemeChange?.(e.target.value); }} fullWidth><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></Select><Button variant="outline" onClick={() => onThemeChange?.(theme)}>Apply appearance</Button></div></div>;
}
