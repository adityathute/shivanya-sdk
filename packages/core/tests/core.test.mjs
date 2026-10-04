import test from "node:test";
import assert from "node:assert/strict";
import { ShivanyaClient } from "../dist/client.js";
import { ShivanyaError } from "../dist/errors.js";

test("normalizes base URL and returns JSON", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://api.example.com/users");
    assert.equal(options.headers.get("Content-Type"), "application/json");
    return new Response(JSON.stringify({ id: 1 }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };

  try {
    const client = new ShivanyaClient({ baseURL: "https://api.example.com/" });
    const result = await client.request("/users");
    assert.deepEqual(result, { id: 1 });
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("adds API key as Bearer authorization", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (_url, options) => {
    assert.equal(options.headers.get("Authorization"), "Bearer test-key");
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };

  try {
    const client = new ShivanyaClient({
      baseURL: "https://api.example.com",
      apiKey: "test-key",
    });
    assert.deepEqual(await client.request("/test"), { ok: true });
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("throws ShivanyaError with response status", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });

  try {
    const client = new ShivanyaClient({ baseURL: "https://api.example.com" });
    await assert.rejects(
      client.request("/private"),
      (error) => {
        assert.ok(error instanceof ShivanyaError);
        assert.equal(error.message, "Unauthorized");
        assert.equal(error.status, 401);
        return true;
      },
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});
