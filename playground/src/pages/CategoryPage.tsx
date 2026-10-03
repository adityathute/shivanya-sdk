import type { ComponentType } from "react";

import { iconEntries, sdkPackages } from "../discovery/sdkDiscovery";

import {
  getComponentIconColor,
  getComponentIconName,
} from "../config/component-icons";

interface CategoryPageProps {
  packageId: string;
  categoryId: string;
  onSelectComponent: (componentId: string) => void;
}

interface ConfiguredIcon {
  component: ComponentType<any>;
  color: string;
}

function getConfiguredIcon(
  componentName: string,
  categoryName: string,
): ConfiguredIcon | null {
  const iconName = getComponentIconName(componentName, categoryName);

  const color = getComponentIconColor(componentName, categoryName);

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

  const Icon = iconModule?.[iconName];

  if (!Icon) {
    return null;
  }

  return {
    component: Icon,
    color,
  };
}

export default function CategoryPage({
  packageId,
  categoryId,
  onSelectComponent,
}: CategoryPageProps) {
  const pkg = sdkPackages.find((item) => item.id === packageId);

  const category = pkg?.categories.find((item) => item.id === categoryId);

  if (!category) {
    return null;
  }

  if (packageId === "ui" && categoryId === "icons") {
    return (
      <div className="playground-page">
        <div className="playground-package-header">
          <div className="playground-package-header-content">
            <h1>Icons</h1>

            <p>A collection of reusable icons for Shivanya applications.</p>
          </div>
        </div>

        <div className="icons-demo">
          <div className="icons-demo-grid">
            {category.components.map((component) => {
              const iconModule = iconEntries[component.path] as
                | Record<string, ComponentType<any>>
                | undefined;

              const Icon = iconModule?.[component.id];

              if (!Icon) {
                return null;
              }

              return (
                <div key={component.id} className="icons-demo-item">
                  <Icon />
                  <span>{component.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="playground-page">
      <h1>{category.name}</h1>

      <div className="playground-component-list">
        {category.components.map((component) => {
          const configuredIcon = getConfiguredIcon(
            component.name,
            category.name,
          );

          const Icon = configuredIcon?.component;

          return (
            <button
              key={component.id}
              type="button"
              className="playground-component-item playground-component-card"
              onClick={() => onSelectComponent(component.id)}
            >
              {Icon && (
                <Icon
                  className="playground-component-card-icon"
                  color={configuredIcon.color}
                />
              )}

              <span>{component.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
