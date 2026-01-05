import SideBar from "../components/SideBar/SideBar";
import "../CSS/pages/homepage.css"
import ChatWindow from "../components/ChatWindow/ChatWindow";
import { useState } from "react";
import { messages } from "../data/messages.dummy";

function ChatPage() {
    const [currentChatId, setCurrentChatId] = useState('c1')
    const [backgroundUrl, setBackgroundUrl] = useState('')
    const [message, setMessage] = useState(messages)

    return (
        <div className="chat-container" style={{
            background: backgroundUrl ? `url(${backgroundUrl}) center center / cover no-repeat` : undefined
        }}>

            <SideBar
                setCurrentChatId={setCurrentChatId}
                setBackgroundUrl={setBackgroundUrl}
                message = {message}
            />

            <ChatWindow
                currentChatId={currentChatId}
                message={message}
                setMessage={setMessage}
            />
        </div>
    );
}

export default ChatPage;