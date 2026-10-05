import assert from "node:assert/strict";
import { test, afterEach } from "node:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { AuthClient } from "../dist/client/auth-client.js";
import { AuthError } from "../dist/client/types.js";

const packageRoot = fileURLToPath(new URL("../", import.meta.url));
const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
  delete globalThis.document;
});

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

test("build output contains the public JavaScript and stylesheet entrypoints", async () => {
  const packageJson = JSON.parse(await readFile(join(packageRoot, "package.json"), "utf8"));
  assert.equal(packageJson.main, "dist/index.js");
  assert.equal(packageJson.types, "dist/index.d.ts");
  assert.equal(packageJson.exports["./styles"], "./dist/styles/index.css");

  await readFile(join(packageRoot, "dist/index.js"));
  await readFile(join(packageRoot, "dist/index.d.ts"));
  await readFile(join(packageRoot, "dist/styles/index.css"));
});

test("login sends credentials and loads the authenticated user", async () => {
  const calls = [];

  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });

    if (url.endsWith("/auth/login/")) {
      return jsonResponse({
        user: {
          id: "u1",
          email: "user@example.com",
          username: "user",
          email_verified: true,
        },
      });
    }

    return jsonResponse({
      id: "u1",
      email: "user@example.com",
      username: "user",
      email_verified: true,
    });
  };

  const client = new AuthClient({
    baseUrl: "https://api.example.com/",
  });

  const result = await client.login({
    email: "user@example.com",
    password: "secret",
  });

  assert.deepEqual(result, {
    id: "u1",
    email: "user@example.com",
    username: "user",
    email_verified: true,
  });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.example.com/api/v1/auth/login/");
  assert.equal(calls[0].options.method, "POST");
  assert.equal(calls[0].options.credentials, "include");
  assert.equal(calls[0].options.headers.get("Content-Type"), "application/json");
  assert.deepEqual(JSON.parse(calls[0].options.body), {
    email: "user@example.com",
    password: "secret",
  });
});

test("unwraps API responses that use a data envelope", async () => {
  globalThis.fetch = async () =>
    jsonResponse({
      data: {
        id: "u1",
        email: "user@example.com",
      },
    });

  const client = new AuthClient({ baseUrl: "https://api.example.com" });
  const user = await client.getCurrentUser();

  assert.deepEqual(user, {
    id: "u1",
    email: "user@example.com",
  });
});

test("adds the configured CSRF header to unsafe requests", async () => {
  globalThis.document = { cookie: "csrftoken=csrf-value" };

  let request;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return jsonResponse({ google_connected: false });
  };

  const client = new AuthClient({ baseUrl: "https://api.example.com" });
  await client.disconnectGoogle();

  assert.equal(request.options.headers.get("X-CSRFToken"), "csrf-value");
});

test("throws AuthError with backend error details", async () => {
  globalThis.fetch = async () =>
    jsonResponse({ detail: "Invalid credentials." }, 401);

  const client = new AuthClient({ baseUrl: "https://api.example.com" });

  await assert.rejects(
    client.login({ email: "user@example.com", password: "wrong" }),
    (error) => {
      assert.ok(error instanceof AuthError);
      assert.equal(error.status, 401);
      assert.equal(error.message, "Invalid credentials.");
      assert.deepEqual(error.data, { detail: "Invalid credentials." });
      return true;
    },
  );
});

test("refreshes once after an authenticated request receives 401", async () => {
  const calls = [];

  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });

    if (calls.length === 1) {
      return jsonResponse({ detail: "Expired session." }, 401);
    }

    if (calls.length === 2) {
      return jsonResponse({ success: true });
    }

    return jsonResponse({
      id: "u1",
      email: "user@example.com",
    });
  };

  const client = new AuthClient({ baseUrl: "https://api.example.com" });
  const user = await client.getCurrentUser();

  assert.deepEqual(user, {
    id: "u1",
    email: "user@example.com",
  });
  assert.equal(calls.length, 3);
  assert.equal(calls[0].url, "https://api.example.com/api/v1/auth/me/");
  assert.equal(calls[1].url, "https://api.example.com/api/v1/auth/refresh/");
  assert.equal(calls[2].url, "https://api.example.com/api/v1/auth/me/");
});

test("does not refresh a failed login request", async () => {
  const calls = [];

  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    return jsonResponse({ detail: "Invalid credentials." }, 401);
  };

  const client = new AuthClient({ baseUrl: "https://api.example.com" });

  await assert.rejects(client.login({
    email: "user@example.com",
    password: "wrong",
  }), AuthError);

  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.example.com/api/v1/auth/login/");
});

test("builds the Google start URL with the optional next location", () => {
  const client = new AuthClient({
    baseUrl: "https://api.example.com/",
    apiPrefix: "/api/v2/",
  });

  assert.equal(
    client.googleStartUrl("https://app.example.com/account"),
    "https://api.example.com/api/v2/auth/google/start/?next=https%3A%2F%2Fapp.example.com%2Faccount",
  );
});
