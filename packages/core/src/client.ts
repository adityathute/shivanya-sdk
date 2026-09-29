import { ShivanyaError } from "./errors.js";

export interface ShivanyaClientOptions {
  baseURL: string;
  apiKey?: string;
}

export class ShivanyaClient {
  private readonly baseURL: string;
  private readonly apiKey?: string;

  constructor(options: ShivanyaClientOptions) {
    this.baseURL = options.baseURL.replace(/\/+$/, "");
    this.apiKey = options.apiKey;
  }

  async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers = new Headers(options.headers);

    headers.set("Content-Type", "application/json");

    if (this.apiKey) {
      headers.set("Authorization", `Bearer ${this.apiKey}`);
    }

    const response = await fetch(
      `${this.baseURL}${path}`,
      {
        ...options,
        headers
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new ShivanyaError(
        data?.error ?? "Shivanya API request failed",
        response.status
      );
    }

    return data as T;
  }
}