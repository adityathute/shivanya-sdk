import { access } from "node:fs/promises";
import { dirname, resolve as resolvePath } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("./") || specifier.startsWith("../")) {
    try {
      const parentPath = fileURLToPath(context.parentURL);
      const candidate = resolvePath(dirname(parentPath), specifier + ".js");
      await access(candidate);
      return nextResolve(pathToFileURL(candidate).href, context);
    } catch {}
  }

  return nextResolve(specifier, context);
}
