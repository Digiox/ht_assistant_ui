
import React from 'react';
import ChatMessage from './ChatMessage';
import ProductDisplay from './ProductDisplay';
import axios from 'axios';
import UserSendMessage from './UserSendMessage';
import TypingAnimation from './TypingAnimation';


interface IThread {
  id: string;
  object: string;
  created_at: number;
  thread_id: string;
  role: "user" | "assistant";
  content: IContent[];
  file_ids: string[];
  assistant_id: string;
  run_id: string;
  metadata: object;

}

interface IContent {
  type: string;
  text: IText;
}

interface IText {
  value: string;
  annotations: string[];
}


const ChatPage: React.FC = () => {
  const [thread, setThread] = React.useState<IThread[]>([]);
  const [mockedUserMessage, setMockedUserMessage] = React.useState<string | undefined>()
  const [isLoading, setIsLoading] = React.useState<Boolean>(false)



  const handleSendMessage = (message: string) => {
    setMockedUserMessage(message)
    setIsLoading(true)
    if (thread.length < 1) {
      return axios.post("http://localhost:3001/assistant/thread", {
        "role": "user",
        "content": message
      })
        .then((res) => {
          setThread(res.data);
          setMockedUserMessage(undefined)
          setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }

    return axios.post("http://localhost:3001/assistant/thread/" + thread[0].thread_id, {
      "role": "user",
      "content": message,
      "runId": thread[0].run_id
    })
      .then((res) => {
        setThread(res.data);
        setMockedUserMessage(undefined)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }


  return (
    <div className="page-container">
      <div className="chat-container-user">
        {thread.reverse().map((message) => {
          return message.role === "user" && <ChatMessage message={message.content[0].text.value} isUser={message.role} />
        }
        )}
        {mockedUserMessage && <ChatMessage message={mockedUserMessage} isUser={"user"} />}
        
        <UserSendMessage disabled={false} onSend={handleSendMessage} />
      </div>
      <div className="chat-container-assistant">
        {thread.length > 0 ? thread.map((message) => {
          return message.role === "assistant" && <ChatMessage message={message.content[0].text.value} isUser={message.role} />
        }
        ) : <ChatMessage message={"Bonjour ! Je suis votre assistant et ma mission est de vous conseiller sur les produits de notre catalogue.\nPosez moi une question et je ferais de mon mieux pour y répondre !"} isUser={"assistant"} />}
        {isLoading && <TypingAnimation />}
      </div>
      {/* <ProductDisplay productName="SATISFYER PRO PENGUIN NG ÉDITION 2020" price={69.95} imageUrl="path_to_image" /> */}

    </div>
  );
};

export default ChatPage;