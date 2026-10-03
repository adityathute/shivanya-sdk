import type { ComponentType } from "react";

import {
  demoEntries,
  iconEntries,
  sdkPackages,
} from "../discovery/sdkDiscovery";

import {
  getCategoryIconColor,
  getCategoryIconName,
} from "../config/component-icons";

function getCategoryIcon(categoryName: string): ComponentType<any> | null {
  const iconName = getCategoryIconName(categoryName);

  const iconPath = Object.keys(iconEntries).find(
    (path) =>
      path
        .split("/")
        .pop()
        ?.replace(/\.tsx$/, "") === iconName,
  );

  if (!iconPath) {
    return null;
  }

  const iconModule = iconEntries[iconPath] as
    | Record<string, ComponentType<any>>
    | undefined;

  return iconModule?.[iconName] ?? null;
}

function getIcon(iconName: string): ComponentType<any> | null {
  const iconPath = Object.keys(iconEntries).find(
    (path) =>
      path
        .split("/")
        .pop()
        ?.replace(/\.tsx$/, "") === iconName,
  );

  if (!iconPath) {
    return null;
  }

  const iconModule = iconEntries[iconPath] as
    | Record<string, ComponentType<any>>
    | undefined;

  return iconModule?.[iconName] ?? null;
}

interface PackagePageProps {
  packageId: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function PackagePage({
  packageId,
  onSelectCategory,
}: PackagePageProps) {
  const pkg = sdkPackages.find((item) => item.id === packageId);

  if (!pkg) {
    return null;
  }

  const PackageDemo = pkg.packageDemoPath
    ? demoEntries[pkg.packageDemoPath]
    : null;

  const normalCategories = pkg.categories.filter(
    (category) => category.id !== "icons",
  );

  const iconCategory = pkg.categories.find(
    (category) => category.id === "icons",
  );

  const totalComponents = normalCategories.reduce(
    (total, category) => total + category.components.length,
    0,
  );

  const ViewIcon = getIcon("EyeIcon");

  return (
    <div className="playground-page">
      {PackageDemo ? (
        <PackageDemo />
      ) : (
        <div className="playground-package-header">
          <div className="playground-package-header-content">
            <h1>{pkg.name}</h1>

            {pkg.description && <p>{pkg.description}</p>}
          </div>

          <div className="playground-package-count">
            {totalComponents} Components
          </div>
        </div>
      )}

      {normalCategories.length > 0 && (
        <div className="playground-component-list">
          {normalCategories.map((category) => {
            const Icon = getCategoryIcon(category.name);

            const iconColor = getCategoryIconColor(category.name);

            return (
              <button
                key={category.id}
                type="button"
                className="playground-component-item playground-component-card"
                onClick={() => onSelectCategory(category.id)}
              >
                {Icon && (
                  <Icon
                    className="playground-component-card-icon"
                    style={{
                      color: iconColor,
                    }}
                  />
                )}

                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      )}

      {packageId === "ui" && iconCategory && (
        <div className="playground-icons-section">
          <div className="playground-icons-header">
            <div>
              <h2>Icons</h2>

              <p>Reusable icons for Shivanya applications.</p>
            </div>

            <div className="playground-package-count">
              {iconCategory.components.length} Icons
            </div>
          </div>

          <button
            type="button"
            className="playground-component-item playground-icons-card"
            onClick={() => onSelectCategory("icons")}
          >
            {ViewIcon && (
              <ViewIcon
                className="playground-component-card-icon"
                style={{
                  color: "var(--shivanya-color-primary)",
                  marginRight: "8px",
                }}
              />
            )}

            <span>View Icons</span>
          </button>
        </div>
      )}
    </div>
  );
}
