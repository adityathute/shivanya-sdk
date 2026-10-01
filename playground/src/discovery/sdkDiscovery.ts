import type { ComponentType } from "react";

export interface SDKComponent {
  id: string;
  name: string;
  packageName: string;
  categoryId: string;
  categoryName: string;
  path: string;
  demoPath: string | null;
}

export interface SDKCategory {
  id: string;
  name: string;
  packageName: string;
  components: SDKComponent[];
}

export interface SDKPackage {
  id: string;
  name: string;
  description: string;
  packageDemoPath: string | null;
  categories: SDKCategory[];
}

interface SDKPackageManifest {
  name?: string;
  description?: string;
}

const packageManifests = import.meta.glob<SDKPackageManifest>(
  "../../../packages/*/package.json",
  {
    eager: true,
    import: "default",
  },
);

const componentEntries = import.meta.glob(
  "../../../packages/*/src/components/**/index.ts",
  {
    eager: true,
  },
);

export const demoEntries = import.meta.glob<ComponentType>(
  "../demos/**/*.tsx",
  {
    eager: true,
    import: "default",
  },
);

function formatName(value: string): string {
  return value
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getPackageId(path: string): string {
  const match = path.match(
    /(?:\.\.\/)+packages\/([^/]+)/,
  );

  return match?.[1] ?? "";
}

function getComponentPath(path: string): string[] {
  const match = path.match(
    /(?:\.\.\/)+packages\/[^/]+\/src\/components\/(.+)\/index\.ts/,
  );

  if (!match) {
    return [];
  }

  return match[1].split("/");
}

function getDemoPath(
  packageId: string,
  categoryId: string,
  componentId: string,
): string | null {
  const componentName = formatName(componentId).replace(
    /\s/g,
    "",
  );

  const expectedPath =
    `../demos/${packageId}/${categoryId}/${componentName}Demo.tsx`;

  const demoPath = Object.keys(demoEntries).find(
    (path) => path.toLowerCase() === expectedPath.toLowerCase(),
  );

  return demoPath ?? null;
}

function getPackageDemoPath(
  packageId: string,
): string | null {
  const componentName = formatName(packageId).replace(
    /\s/g,
    "",
  );

  const expectedPath =
    `../demos/${packageId}/${componentName}Demo.tsx`;

  return Object.keys(demoEntries).includes(expectedPath)
    ? expectedPath
    : null;
}

export const sdkPackages: SDKPackage[] = Object.entries(
  packageManifests,
).map(([manifestPath, manifest]) => {
  const packageId = getPackageId(manifestPath);

  const categoryMap = new Map<string, SDKCategory>();

  Object.keys(componentEntries)
    .filter(
      (componentPath) =>
        getPackageId(componentPath) === packageId,
    )
    .forEach((componentPath) => {
      const pathParts = getComponentPath(componentPath);

      if (pathParts.length < 2) {
        return;
      }

      const categoryId = pathParts[0];
      const componentId =
        pathParts[pathParts.length - 1];

      let category = categoryMap.get(categoryId);

      if (!category) {
        category = {
          id: categoryId,
          name: formatName(categoryId),
          packageName: packageId,
          components: [],
        };

        categoryMap.set(categoryId, category);
      }

      category.components.push({
        id: componentId,
        name: formatName(componentId),
        packageName: packageId,
        categoryId,
        categoryName: category.name,
        path: componentPath,
        demoPath: getDemoPath(
          packageId,
          categoryId,
          componentId,
        ),
      });
    });

  return {
    id: packageId,
    name: formatName(packageId),
    description: manifest?.description ?? "",
    packageDemoPath: getPackageDemoPath(packageId),
    categories: Array.from(categoryMap.values()),
  };
});