import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDirectory = path.resolve(
  __dirname,
  "../src/icons/icons",
);

const outputFile = path.join(
  iconsDirectory,
  "index.ts",
);

const iconFiles = fs
  .readdirSync(iconsDirectory)
  .filter(
    (file) =>
      file.endsWith(".tsx") &&
      file !== "index.ts",
  )
  .sort((a, b) => a.localeCompare(b));

const exports = iconFiles
  .map((file) => {
    const name = path.basename(file, ".tsx");

    return `export { ${name} } from "./${name}";`;
  })
  .join("\n");

const content = `${exports}\n`;

fs.writeFileSync(
  outputFile,
  content,
  "utf8",
);

console.log(
  `Generated ${iconFiles.length} icon exports.`,
);