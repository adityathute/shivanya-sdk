import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const packageFile = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

test("build output contains the public UI entrypoint", () => {
  assert.ok(fs.existsSync(path.join(dist, "index.js")));
  assert.ok(fs.existsSync(path.join(dist, "index.d.ts")));
});

test("public UI exports are declared through the package entrypoint", () => {
  const source = fs.readFileSync(path.join(root, "src/index.ts"), "utf8");
  assert.match(source, /components\/foundation/);
  assert.match(source, /components\/forms/);
  assert.match(source, /components\/feedback/);
  assert.match(source, /components\/navigation/);
  assert.match(source, /components\/overlays/);
  assert.match(source, /icons/);
  assert.equal(packageFile.exports["."].import, "./dist/index.js");
  assert.equal(packageFile.exports["./styles"], "./dist/styles/index.css");
});

test("required UI build assets exist", () => {
  assert.ok(fs.existsSync(path.join(dist, "styles/index.css")));
  assert.ok(fs.existsSync(path.join(dist, "icons/index.js")));
});
