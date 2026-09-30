import { sdkPackages } from "../discovery/sdkDiscovery";

interface CategoryPageProps {
  packageId: string;
  categoryId: string;
  onSelectComponent: (componentId: string) => void;
}

export default function CategoryPage({
  packageId,
  categoryId,
  onSelectComponent,
}: CategoryPageProps) {
  const pkg = sdkPackages.find((item) => item.id === packageId);

  const category = pkg?.categories.find(
    (item) => item.id === categoryId,
  );

  if (!category) {
    return null;
  }

  return (
    <div className="playground-page">
      <h1>{category.name}</h1>

      <div className="playground-component-list">
        {category.components.map((component) => (
          <button
            key={component.id}
            type="button"
            className="playground-component-item"
            onClick={() => onSelectComponent(component.id)}
          >
            {component.name}
          </button>
        ))}
      </div>
    </div>
  );
}