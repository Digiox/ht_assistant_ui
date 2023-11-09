
import React from 'react';
import ChatMessage from './ChatMessage';
import ProductDisplay from './ProductDisplay';
import axios from 'axios';
import UserSendMessage from './UserSendMessage';

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

    React.useEffect(() => {
        axios.get("/mocks/thread.mock.json")
        .then((res) => {
            setThread(res.data);
        })
        .catch((err) => console.log(err))
    },[thread, setThread])


  return (
    <div className="page-container">
      <div className="chat-container-user">
        {thread.map((message) => {
            return message.role === "user" &&  <ChatMessage message={message.content[0].text.value} isUser={message.role} />
        }
        )}
        <UserSendMessage disabled={false} onSend={(msg) => {
          console.log(msg)
        }} />
      </div>
      <div className="chat-container-assistant">
        {thread.map((message) => {
            return message.role === "assistant" &&  <ChatMessage message={message.content[0].text.value} isUser={message.role} />
        }
        )}
        
      </div>
      {/* <ProductDisplay productName="SATISFYER PRO PENGUIN NG ÉDITION 2020" price={69.95} imageUrl="path_to_image" /> */}

    </div>
  );
};

export default ChatPage;