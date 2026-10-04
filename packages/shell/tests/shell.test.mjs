import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const packageFile = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

test("build output contains the public Shell entrypoint", () => {
  assert.ok(fs.existsSync(path.join(dist, "index.js")));
  assert.ok(fs.existsSync(path.join(dist, "index.d.ts")));
});

test("public Shell entrypoint exposes components, layouts, context and hooks", () => {
  const source = fs.readFileSync(path.join(root, "src/index.ts"), "utf8");
  assert.match(source, /components\/index/);
  assert.match(source, /context\/index/);
  assert.match(source, /hooks\/index/);
  assert.match(source, /layouts\/index/);
  assert.match(source, /types\/shell/);
  assert.match(source, /utils\/index/);
  assert.equal(packageFile.exports["."].import, "./dist/index.js");
  assert.equal(packageFile.exports["./styles"], "./dist/styles/shell.css");
});

test("required Shell build assets exist", () => {
  assert.ok(fs.existsSync(path.join(dist, "styles/shell.css")));
});
