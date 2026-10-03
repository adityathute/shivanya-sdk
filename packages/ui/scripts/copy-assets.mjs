import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(currentFile), "..");
const src = path.join(root, "src");
const dist = path.join(root, "dist");

function copyCssFiles(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) return;

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(
      targetDir,
      path.relative(sourceDir, sourcePath)
    );

    if (entry.isDirectory()) {
      copyCssFiles(sourcePath, targetPath);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".css")) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function copyDirectory(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) return;

  fs.cpSync(sourceDir, targetDir, {
    recursive: true,
    force: true
  });
}

copyCssFiles(
  path.join(src, "styles"),
  path.join(dist, "styles")
);

copyCssFiles(
  path.join(src, "components"),
  path.join(dist, "components")
);

copyCssFiles(
  path.join(src, "icons"),
  path.join(dist, "icons")
);

copyDirectory(
  path.join(src, "assets", "fonts"),
  path.join(dist, "assets", "fonts")
);

console.log("Shivanya UI CSS and assets copied.");