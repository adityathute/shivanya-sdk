import { LayoutProvider } from "../context/LayoutProvider";
export function AppShell({ children, className = "", }) {
    return (<LayoutProvider>
      <div className={`shivanya-app-shell ${className}`.trim()}>
        {children}
      </div>
    </LayoutProvider>);
}
