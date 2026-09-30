import {
  demoEntries,
  sdkPackages,
} from "../discovery/sdkDiscovery";

interface PackagePageProps {
  packageId: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function PackagePage({
  packageId,
  onSelectCategory,
}: PackagePageProps) {
  const pkg = sdkPackages.find(
    (item) => item.id === packageId,
  );

  if (!pkg) {
    return null;
  }

  const PackageDemo = pkg.packageDemoPath
    ? demoEntries[pkg.packageDemoPath]
    : null;

  return (
    <div className="playground-page">
      {PackageDemo ? (
        <PackageDemo />
      ) : (
        <>
          <h1>{pkg.name}</h1>

          {pkg.description && (
            <p>{pkg.description}</p>
          )}
        </>
      )}

      {pkg.categories.length > 0 && (
        <div className="playground-component-list">
          {pkg.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="playground-component-item"
              onClick={() =>
                onSelectCategory(category.id)
              }
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}