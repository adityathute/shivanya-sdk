import type { ComponentType } from "react";

import {
  demoEntries,
  iconEntries,
  sdkPackages,
} from "../discovery/sdkDiscovery";

interface ComponentPageProps {
  packageId: string;
  categoryId: string;
  componentId: string;
}

export default function ComponentPage({
  packageId,
  categoryId,
  componentId,
}: ComponentPageProps) {
  const pkg = sdkPackages.find(
    (item) => item.id === packageId,
  );

  const category = pkg?.categories.find(
    (item) => item.id === categoryId,
  );

  const component = category?.components.find(
    (item) => item.id === componentId,
  );

  if (!component) {
    return null;
  }

  if (
    packageId === "ui" &&
    categoryId === "icons"
  ) {
    const iconModule = iconEntries[
      component.path
    ] as Record<
      string,
      ComponentType<any>
    > | undefined;

    const Icon = iconModule?.[component.id];

    if (!Icon) {
      return (
        <div className="playground-page">
          <h1>{component.name}</h1>
          <p>Icon could not be loaded.</p>
        </div>
      );
    }

    return (
      <div className="playground-page">
        <div className="icons-demo-item">
          <Icon />
          <span>{component.name}</span>
        </div>
      </div>
    );
  }

  if (!component.demoPath) {
    return (
      <div className="playground-page">
        <h1>{component.name}</h1>
        <p>Demo is not available yet.</p>
      </div>
    );
  }

  const DemoComponent =
    demoEntries[component.demoPath];

  if (!DemoComponent) {
    return (
      <div className="playground-page">
        <h1>{component.name}</h1>
        <p>Demo could not be loaded.</p>
      </div>
    );
  }

  return (
    <div className="playground-page">
      <DemoComponent />
    </div>
  );
}