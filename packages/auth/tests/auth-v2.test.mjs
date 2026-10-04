import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { createAuthRedirectUrl } from "../dist/client/redirect.js";
import { resolveAuthFeatures } from "../dist/components/account/auth-features.js";

const packageRoot = fileURLToPath(new URL("../", import.meta.url));

test("creates an explicit hosted auth redirect with a return location", () => {
  assert.equal(
    createAuthRedirectUrl(
      "https://auth.shivanya.com/login",
      "https://app.example.com/dashboard",
    ),
    "https://auth.shivanya.com/login?next=https%3A%2F%2Fapp.example.com%2Fdashboard",
  );
});

test("auth feature configuration supports minimal and full flows", () => {
  const minimal = resolveAuthFeatures(["login", "register"]);
  assert.equal(minimal.has("login"), true);
  assert.equal(minimal.has("register"), true);
  assert.equal(minimal.has("forgot"), false);
  assert.equal(minimal.has("google"), false);
  assert.equal(minimal.has("account"), false);

  const full = resolveAuthFeatures();
  assert.equal(full.has("login"), true);
  assert.equal(full.has("register"), true);
  assert.equal(full.has("forgot"), true);
  assert.equal(full.has("reset"), true);
  assert.equal(full.has("verify"), true);
  assert.equal(full.has("google"), true);
  assert.equal(full.has("account"), true);
});

test("public auth package exports v2 APIs from the built entrypoint", async () => {
  const entry = await readFile(join(packageRoot, "dist/index.js"), "utf8");
  assert.match(entry, /auth-client/);
  assert.match(entry, /token-storage/);
  assert.match(entry, /redirect/);
  assert.match(entry, /auth-features/);
});
