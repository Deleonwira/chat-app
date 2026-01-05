import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { useState } from "react";
import { messages } from "../../data/messages.dummy"

function ChatWindow({ currentChatId }) {
    const [message, setMessage] = useState(messages)
    return (
        <main className="chat-main">
            <ChatHeader
                currentChatId={currentChatId} />
            <MessageList
                currentChatId={currentChatId}
                message={message} />
            <ChatInput
                message={message}
                setMessage={setMessage}
                currentChatId={currentChatId} />
        </main>
    )
}

export default ChatWindow;