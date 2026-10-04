import test from "node:test";
import assert from "node:assert/strict";
import { ShivanyaAI } from "../dist/ai.js";

test("sends a chat request through the core client", async () => {
  const calls = [];
  const client = {
    async request(path, options) {
      calls.push({ path, options });
      return { content: "Hello", model: "test-model" };
    },
  };

  const ai = new ShivanyaAI(client);
  const result = await ai.chat({
    message: "Hello",
    model: "test-model",
    temperature: 0.4,
  });

  assert.deepEqual(result, { content: "Hello", model: "test-model" });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].path, "/api/ai/chat");
  assert.equal(calls[0].options.method, "POST");

  const body = JSON.parse(calls[0].options.body);
  assert.deepEqual(body.messages, [{ role: "user", content: "Hello" }]);
  assert.equal(body.model, "test-model");
  assert.equal(body.temperature, 0.4);
});
