export interface AIResponse {
  message: string;
  timestamp: Date;
}

export interface AIRequest {
  userId: string;
  query: string;
  context?: string;
}

export interface AIConversation {
  id: string;
  userId: string;
  messages: AIResponse[];
  createdAt: Date;
  updatedAt: Date;
}