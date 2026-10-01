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
  [
    "../../../packages/*/src/components/**/index.ts",
    "../../../packages/*/src/components/*.tsx",
  ],
  {
    eager: true,
  },
);

export const demoEntries = import.meta.glob<ComponentType>(
  "../demos/**/*Demo.tsx",
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
  const packageMatch = path.match(
    /(?:\.\.\/)+packages\/([^/]+)/,
  );

  if (packageMatch) {
    return packageMatch[1];
  }

  const demoMatch = path.match(
    /(?:\.\.\/)+demos\/([^/]+)/,
  );

  return demoMatch?.[1] ?? "";
}

function getComponentPath(path: string): string[] {
  const folderMatch = path.match(
    /(?:\.\.\/)+packages\/[^/]+\/src\/components\/(.+)\/index\.ts$/,
  );

  if (folderMatch) {
    return folderMatch[1].split("/");
  }

  const fileMatch = path.match(
    /(?:\.\.\/)+packages\/[^/]+\/src\/components\/([^/]+)\.tsx$/,
  );

  if (fileMatch) {
    return ["components", fileMatch[1]];
  }

  return [];
}

function normalizePath(path: string): string {
  return path.replace(/\\/g, "/").toLowerCase();
}

function findDemoPath(
  packageId: string,
  categoryId: string,
  componentId: string,
): string | null {
  const expectedFile = `${componentId}Demo.tsx`;

  const demoPath = Object.keys(demoEntries).find((path) => {
    const normalized = normalizePath(path);

    const parts = normalized.split("/");

    const demosIndex = parts.findIndex(
      (part) => part === "demos",
    );

    if (demosIndex === -1) {
      return false;
    }

    const demoPackage = parts[demosIndex + 1];
    const demoCategory = parts[demosIndex + 2];
    const demoFile = parts[demosIndex + 3];

    return (
      demoPackage === packageId.toLowerCase() &&
      demoCategory === categoryId.toLowerCase() &&
      demoFile === expectedFile.toLowerCase()
    );
  });

  return demoPath ?? null;
}

function getDemoInfo(path: string) {
  const normalized = path.replace(/\\/g, "/");

  const match = normalized.match(
    /(?:\.\.\/)+demos\/([^/]+)\/(.+)$/,
  );

  if (!match) {
    return null;
  }

  const packageId = match[1];
  const relativePath = match[2];

  const parts = relativePath.split("/");

  if (parts.length < 2) {
    return null;
  }

  const fileName = parts[parts.length - 1];

  if (!fileName.toLowerCase().endsWith("demo.tsx")) {
    return null;
  }

  const componentId = fileName.replace(
    /Demo\.tsx$/i,
    "",
  );

  const categoryId = parts[0];

  return {
    packageId,
    categoryId,
    componentId,
    name: formatName(componentId),
    categoryName: formatName(categoryId),
    path,
  };
}

function getPackageDemoPath(
  packageId: string,
): string | null {
  const expectedPath =
    `../demos/${packageId}/${formatName(packageId).replace(/\s/g, "")}Demo.tsx`;

  return (
    Object.keys(demoEntries).find(
      (path) =>
        normalizePath(path) ===
        normalizePath(expectedPath),
    ) ?? null
  );
}

export const sdkPackages: SDKPackage[] = Object.entries(
  packageManifests,
).map(([manifestPath, manifest]) => {
  const packageId = getPackageId(manifestPath);

  const categoryMap = new Map<string, SDKCategory>();

  /*
   * -------------------------------------------------------------
   * 1. Add real SDK components
   * -------------------------------------------------------------
   */

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

      let category = categoryMap.get(
        categoryId.toLowerCase(),
      );

      if (!category) {
        category = {
          id: categoryId,
          name: formatName(categoryId),
          packageName: packageId,
          components: [],
        };

        categoryMap.set(
          categoryId.toLowerCase(),
          category,
        );
      }

      category.components.push({
        id: componentId,
        name: formatName(componentId),
        packageName: packageId,
        categoryId,
        categoryName: category.name,
        path: componentPath,
        demoPath: findDemoPath(
          packageId,
          categoryId,
          componentId,
        ),
      });
    });

  /*
   * -------------------------------------------------------------
   * 2. Add demo-only entries
   *
   * This is important for Shell:
   *
   * Components
   * Hooks
   * Layouts
   * Provider
   *
   * Hooks/Layout/Provider are not package components, so they
   * must be discovered directly from the demo structure.
   * -------------------------------------------------------------
   */

  Object.keys(demoEntries)
    .map(getDemoInfo)
    .filter(
      (
        demo,
      ): demo is NonNullable<
        ReturnType<typeof getDemoInfo>
      > =>
        demo !== null &&
        demo.packageId.toLowerCase() ===
          packageId.toLowerCase(),
    )
    .forEach((demo) => {
      let category = categoryMap.get(
        demo.categoryId.toLowerCase(),
      );

      if (!category) {
        category = {
          id: demo.categoryId,
          name: demo.categoryName,
          packageName: packageId,
          components: [],
        };

        categoryMap.set(
          demo.categoryId.toLowerCase(),
          category,
        );
      }

      const alreadyExists = category.components.some(
        (component) =>
          component.id.toLowerCase() ===
          demo.componentId.toLowerCase(),
      );

      if (alreadyExists) {
        return;
      }

      category.components.push({
        id: demo.componentId,
        name: demo.name,
        packageName: packageId,
        categoryId: demo.categoryId,
        categoryName: demo.categoryName,
        path: demo.path,
        demoPath: demo.path,
      });
    });

  /*
   * -------------------------------------------------------------
   * 3. Sort categories and demos
   * -------------------------------------------------------------
   */

  const categories = Array.from(
    categoryMap.values(),
  ).map((category) => ({
    ...category,
    components: [...category.components].sort(
      (a, b) =>
        a.name.localeCompare(b.name),
    ),
  }));

  categories.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  /*
   * -------------------------------------------------------------
   * 4. Package
   * -------------------------------------------------------------
   */

  return {
    id: packageId,
    name: formatName(packageId),
    description: manifest?.description ?? "",
    packageDemoPath:
      getPackageDemoPath(packageId),
    categories,
  };
});