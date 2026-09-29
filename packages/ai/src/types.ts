export interface AIChatRequest {
  message: string;
  model?: string;
  temperature?: number;
}

export interface AIChatResponse {
  content: string;
  model: string;
}