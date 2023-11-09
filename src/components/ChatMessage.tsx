import React from 'react';
import ReactMarkdown from 'react-markdown';
interface ChatMessageProps {
  message: string;
  isUser: "user" | "assistant";
}


const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
    return <div>
        <h3>{isUser}</h3>
        <div className={`message ${isUser}-message`}><ReactMarkdown components={{
    img: ({node, ...props}) => <img style={{
      width: "150px",
      height: "auto"
    }} {...props} />
  }}>{message.replace(/\n/g, "\n\n")}</ReactMarkdown></div>
    </div>;
  };

  export default ChatMessage;