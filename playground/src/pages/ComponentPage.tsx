import {
  demoEntries,
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

  if (!component.demoPath) {
    return (
      <div className="playground-page">
        <h1>{component.name}</h1>
        <p>Demo is not available yet.</p>
      </div>
    );
  }

  const DemoComponent = demoEntries[component.demoPath];

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