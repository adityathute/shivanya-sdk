import { sdkPackages } from "../../discovery/sdkDiscovery";

interface PlaygroundSidebarProps {
  activePackage: string | null;
  onSelect: (packageId: string | null) => void;
}

export function PlaygroundSidebar({
  activePackage,
  onSelect,
}: PlaygroundSidebarProps) {
  return (
    <nav className="playground-main-nav" aria-label="SDK">
      <button
        type="button"
        className={
          activePackage === null
            ? "playground-nav-item active"
            : "playground-nav-item"
        }
        onClick={() => onSelect(null)}
      >
        Home
      </button>

      {sdkPackages.map((pkg) => (
        <button
          key={pkg.id}
          type="button"
          className={
            activePackage === pkg.id
              ? "playground-nav-item active"
              : "playground-nav-item"
          }
          onClick={() => onSelect(pkg.id)}
        >
          {pkg.name}
        </button>
      ))}
    </nav>
  );
}