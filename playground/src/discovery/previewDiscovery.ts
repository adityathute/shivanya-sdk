import type { ComponentType } from "react";

import { previewEntries } from "./sdkDiscovery";

export function getPreviewComponent(
  pathname: string,
): ComponentType | null {
  const match = pathname.match(/^\/([^/]+)-preview\/([^/]+)$/);

  if (!match) {
    return null;
  }

  const [, packageName, previewName] = match;

  const expectedName =
    previewName
      .split("-")
      .map(
        (part) =>
          part.charAt(0).toUpperCase() + part.slice(1),
      )
      .join("") + "Preview";

  const previewPath = Object.keys(previewEntries).find(
    (path) => {
      const fileName = path
        .split("/")
        .pop()
        ?.replace(/\.tsx$/, "");

      return (
        fileName === expectedName &&
        path.includes(`/demos/${packageName}/previews/`)
      );
    },
  );

  if (!previewPath) {
    return null;
  }

  const previewModule = previewEntries[previewPath] as
    | {
        default?: ComponentType;
      }
    | undefined;

  return previewModule?.default ?? null;
}