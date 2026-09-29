import type { ShivanyaClient } from "shivanya-core";

import type {
  AIChatRequest,
  AIChatResponse,
} from "./types.js";

export class ShivanyaAI {
  constructor(
    private readonly client: ShivanyaClient
  ) {}

  async chat(
    request: AIChatRequest
  ): Promise<AIChatResponse> {
    return this.client.request<AIChatResponse>(
      "/api/ai/chat",
      {
        method: "POST",
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: request.message,
            },
          ],
          model: request.model,
          temperature: request.temperature,
        }),
      }
    );
  }
}