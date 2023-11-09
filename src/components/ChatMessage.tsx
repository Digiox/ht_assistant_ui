import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: "user" | "assistant";
}


const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
    return <div>
        <h3>{isUser}</h3>
        <div className={`message ${isUser}-message`}>{message}</div>
    </div>;
  };

  export default ChatMessage;