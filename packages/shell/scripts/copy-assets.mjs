import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(currentFile), "..");

const source = path.join(root, "src", "styles", "shell.css");
const target = path.join(root, "dist", "styles", "shell.css");

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.copyFileSync(source, target);

console.log("Shivanya Shell CSS copied.");