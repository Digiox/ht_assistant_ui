import React, { useEffect, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";

interface IUserSendMessageProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}

const UserSendMessage = ({ onSend, disabled }: IUserSendMessageProps) => {
    const [message, setMessage] = React.useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + "px";
        }
    }, [textareaRef?.current?.value]);

    const handleSend = () => {
        if (message.trim() !== "") {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <div className="user-input-container">
            <textarea
                ref={textareaRef}
                style={{
                    resize: "none",
                    overflow: "hidden",
                }}
                className="user-input"
                rows={1}
                placeholder="Entrez votre demande ici..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={disabled}
            />
            <button className="send-button" onClick={handleSend} disabled={disabled}>
                <AiOutlineSend size={30} />
            </button>
        </div>
    );
};

export default UserSendMessage;

