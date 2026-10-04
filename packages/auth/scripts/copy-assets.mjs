import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(root, "dist", "styles", "index.css");

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.copyFileSync(path.join(root, "src", "styles", "index.css"), target);
