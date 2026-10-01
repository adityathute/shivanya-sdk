import { useEffect, useState } from "react";
import "./ThemeDemo.css";

export default function ThemeDemo() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () =>
      (document.documentElement.dataset.theme as "light" | "dark") ||
      "dark",
  );

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-icon theme-toggle-moon">
          ☾
        </span>

        <span className="theme-toggle-icon theme-toggle-sun">
          ☀
        </span>

        <span className="theme-toggle-knob">
          {isDark ? "☀" : "☾"}
        </span>
      </span>
    </button>
  );
}