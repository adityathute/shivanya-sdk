import { useState } from "react";

import { PlaygroundLayout } from "./components/playground/PlaygroundLayout";
import { PlaygroundSidebar } from "./components/playground/PlaygroundSidebar";
import PlaygroundBreadcrumb from "./components/playground/PlaygroundBreadcrumb";

import { sdkPackages } from "./discovery/sdkDiscovery";

import PackagePage from "./pages/PackagePage";
import CategoryPage from "./pages/CategoryPage";
import ComponentPage from "./pages/ComponentPage";
import HomePage from "./pages/HomePage";

function App() {
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handlePackageSelect = (packageId: string | null) => {
    setActivePackage(packageId);
    setActiveCategory(null);
    setActiveComponent(null);
  };

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveComponent(null);
  };

  const handleComponentSelect = (componentId: string) => {
    setActiveComponent(componentId);
  };

  const activePackageData = sdkPackages.find(
    (item) => item.id === activePackage,
  );

  const activeCategoryData = activePackageData?.categories.find(
    (item) => item.id === activeCategory,
  );

  const activeComponentData = activeCategoryData?.components.find(
    (item) => item.id === activeComponent,
  );

  return (
    <PlaygroundLayout
      onHome={() => {
        setActivePackage(null);
        setActiveCategory(null);
        setActiveComponent(null);
      }}
      sidebar={
        <PlaygroundSidebar
          activePackage={activePackage}
          onSelect={handlePackageSelect}
        />
      }
    >
      <PlaygroundBreadcrumb
        packageName={activePackageData?.name}
        categoryName={activeCategoryData?.name}
        componentName={activeComponentData?.name}
        onHome={() => {
          setActivePackage(null);
          setActiveCategory(null);
          setActiveComponent(null);
        }}
        onPackage={() => {
          setActiveCategory(null);
          setActiveComponent(null);
        }}
        onCategory={() => {
          setActiveComponent(null);
        }}
      />

      {activePackage && activeCategory && activeComponent ? (
        <ComponentPage
          packageId={activePackage}
          categoryId={activeCategory}
          componentId={activeComponent}
        />
      ) : activePackage && activeCategory ? (
        <CategoryPage
          packageId={activePackage}
          categoryId={activeCategory}
          onSelectComponent={handleComponentSelect}
        />
      ) : activePackage ? (
        <PackagePage
          packageId={activePackage}
          onSelectCategory={handleCategorySelect}
        />
      ) : (
        <HomePage />
      )}
    </PlaygroundLayout>
  );
}

export default App;
