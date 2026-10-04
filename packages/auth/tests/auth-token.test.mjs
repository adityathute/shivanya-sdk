import assert from "node:assert/strict";
import { test, afterEach } from "node:test";
import { AuthClient } from "../dist/client/auth-client.js";
import { MemoryAuthTokenStorage } from "../dist/client/token-storage.js";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

test("token mode stores login tokens and sends the access token", async () => {
  const storage = new MemoryAuthTokenStorage();
  const calls = [];

  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });

    if (url.endsWith("/auth/login/")) {
      return jsonResponse({
        access_token: "access-1",
        refresh_token: "refresh-1",
        user: { id: "u1", email: "user@example.com" },
      });
    }

    return jsonResponse({ id: "u1", email: "user@example.com" });
  };

  const client = new AuthClient({
    baseUrl: "https://api.example.com",
    mode: "token",
    tokenStorage: storage,
  });

  const user = await client.login({
    email: "user@example.com",
    password: "secret",
  });

  assert.deepEqual(user, { id: "u1", email: "user@example.com" });
  assert.equal(await client.getAccessToken(), "access-1");
  assert.equal(calls[0].options.credentials, "omit");
  assert.equal(calls[1].options.headers.get("Authorization"), "Bearer access-1");
});

test("token mode refreshes and retries with the rotated access token", async () => {
  const storage = new MemoryAuthTokenStorage();
  await storage.setTokens({ accessToken: "access-old", refreshToken: "refresh-old" });
  const calls = [];

  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });

    if (url.endsWith("/auth/me/") && calls.length === 1) {
      return jsonResponse({ detail: "Expired token." }, 401);
    }

    if (url.endsWith("/auth/refresh/")) {
      return jsonResponse({
        access_token: "access-new",
        refresh_token: "refresh-new",
      });
    }

    return jsonResponse({ id: "u1", email: "user@example.com" });
  };

  const client = new AuthClient({
    baseUrl: "https://api.example.com",
    mode: "token",
    tokenStorage: storage,
  });

  const user = await client.getCurrentUser();

  assert.deepEqual(user, { id: "u1", email: "user@example.com" });
  assert.equal(calls[1].options.headers.get("Authorization"), null);
  assert.deepEqual(JSON.parse(calls[1].options.body), { refresh_token: "refresh-old" });
  assert.equal(calls[2].options.headers.get("Authorization"), "Bearer access-new");
  assert.equal(await client.getAccessToken(), "access-new");
  assert.equal(await storage.getRefreshToken(), "refresh-new");
});

test("token mode shares one refresh request for concurrent 401 responses", async () => {
  const storage = new MemoryAuthTokenStorage();
  await storage.setTokens({ accessToken: "access-1", refreshToken: "refresh-1" });
  let refreshCalls = 0;

  globalThis.fetch = async (url, options) => {
    if (url.endsWith("/auth/refresh/")) {
      refreshCalls += 1;
      await new Promise((resolve) => setTimeout(resolve, 5));
      return jsonResponse({
        access_token: "access-2",
        refresh_token: "refresh-2",
      });
    }

    if (url.endsWith("/auth/me/")) {
      if (options.headers.get("Authorization") === "Bearer access-1") {
        return jsonResponse({ detail: "Expired token." }, 401);
      }
      return jsonResponse({ id: "u1", email: "user@example.com" });
    }

    throw new Error("Unexpected request");
  };

  const client = new AuthClient({
    baseUrl: "https://api.example.com",
    mode: "token",
    tokenStorage: storage,
  });

  const results = await Promise.all([
    client.getCurrentUser(),
    client.getCurrentUser(),
    client.getCurrentUser(),
  ]);

  assert.equal(refreshCalls, 1);
  assert.equal(results.length, 3);
  assert.equal(await client.getAccessToken(), "access-2");
});

test("failed token refresh clears stored credentials", async () => {
  const storage = new MemoryAuthTokenStorage();
  await storage.setTokens({ accessToken: "access-1", refreshToken: "refresh-1" });

  globalThis.fetch = async (url) => {
    if (url.endsWith("/auth/refresh/")) return jsonResponse({ detail: "Invalid refresh token." }, 401);
    return jsonResponse({ detail: "Expired token." }, 401);
  };

  const client = new AuthClient({
    baseUrl: "https://api.example.com",
    mode: "token",
    tokenStorage: storage,
  });

  await assert.rejects(client.getCurrentUser());
  assert.equal(await client.getAccessToken(), null);
  assert.equal(await storage.getRefreshToken(), null);
});

test("logout clears token storage even when the server rejects logout", async () => {
  const storage = new MemoryAuthTokenStorage();
  await storage.setTokens({ accessToken: "access-1", refreshToken: "refresh-1" });

  globalThis.fetch = async () => jsonResponse({ detail: "Already logged out." }, 401);

  const client = new AuthClient({
    baseUrl: "https://api.example.com",
    mode: "token",
    tokenStorage: storage,
  });

  await assert.rejects(client.logout());
  assert.equal(await client.getAccessToken(), null);
  assert.equal(await storage.getRefreshToken(), null);
});
