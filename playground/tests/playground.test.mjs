import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("playground build output exists", () => {
  assert.ok(fs.existsSync(path.join(root, "dist/index.html")));
});

test("playground is private and depends on workspace packages", () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  assert.equal(pkg.private, true);
  assert.equal(pkg.dependencies["shivanya-ui"], "workspace:*");
  assert.equal(pkg.dependencies["shivanya-shell"], "workspace:*");
  assert.equal(pkg.dependencies["shivanya-auth"], "workspace:*");
});
