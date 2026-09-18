import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div className={`chat-message ${isUser ? 'user' : 'ai'}`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;