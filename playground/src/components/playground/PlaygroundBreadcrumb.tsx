interface PlaygroundBreadcrumbProps {
  packageName?: string;
  categoryName?: string;
  componentName?: string;
  onHome: () => void;
  onPackage: () => void;
  onCategory: () => void;
}

export default function PlaygroundBreadcrumb({
  packageName,
  categoryName,
  componentName,
  onHome,
  onPackage,
  onCategory,
}: PlaygroundBreadcrumbProps) {
  return (
    <nav
      className="playground-breadcrumb"
      aria-label="Breadcrumb"
    >
      <button
        type="button"
        onClick={onHome}
        className="playground-breadcrumb-item"
      >
        Home
      </button>

      {packageName && (
        <>
          <span className="playground-breadcrumb-separator">
            /
          </span>

          <button
            type="button"
            onClick={onPackage}
            className="playground-breadcrumb-item"
          >
            {packageName}
          </button>
        </>
      )}

      {categoryName && (
        <>
          <span className="playground-breadcrumb-separator">
            /
          </span>

          <button
            type="button"
            onClick={onCategory}
            className="playground-breadcrumb-item"
          >
            {categoryName}
          </button>
        </>
      )}

      {componentName && (
        <>
          <span className="playground-breadcrumb-separator">
            /
          </span>

          <span className="playground-breadcrumb-current">
            {componentName}
          </span>
        </>
      )}
    </nav>
  );
}