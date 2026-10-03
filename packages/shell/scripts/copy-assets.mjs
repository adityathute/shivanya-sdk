import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(currentFile), "..");

const source = path.join(root, "src", "styles");
const target = path.join(root, "dist", "styles");

fs.mkdirSync(target, { recursive: true });

for (const file of fs.readdirSync(source)) {
  if (!file.endsWith(".css")) {
    continue;
  }

  fs.copyFileSync(
    path.join(source, file),
    path.join(target, file),
  );
}

console.log("Shivanya Shell CSS and assets copied.");