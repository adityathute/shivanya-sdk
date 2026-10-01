import type { ReactNode } from "react";
import ThemeDemo from "./ThemeDemo";

interface PlaygroundLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  onHome: () => void;
}

export function PlaygroundLayout({
  sidebar,
  children,
  onHome,
}: PlaygroundLayoutProps) {
  return (
    <div className="playground">
      <header className="playground-header">
        <button
          type="button"
          className="playground-brand"
          onClick={onHome}
        >
          <span className="playground-title">
            Shivanya SDK
          </span>

          <span className="playground-subtitle">
            SDK component playground.
          </span>
        </button>

        <ThemeDemo />
      </header>

      <div className="playground-layout">
        <aside className="playground-sidebar">
          {sidebar}
        </aside>

        <main className="playground-content">
          {children}
        </main>
      </div>
    </div>
  );
}