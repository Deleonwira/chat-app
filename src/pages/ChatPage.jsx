import SideBar from "../components/SideBar/SideBar";
import "../CSS/pages/homepage.css"
import ChatWindow from "../components/ChatWindow/ChatWindow";
import { useState } from "react";

function ChatPage() {
    const [currentChatId, setCurrentChatId] = useState('c1')
    const [backgroundUrl, setBackgroundUrl] = useState('')

    return (
        <div className="chat-container" style={{
            background: backgroundUrl ? `url(${backgroundUrl}) center center / cover no-repeat` : undefined
        }}>

            <SideBar setCurrentChatId={setCurrentChatId} setBackgroundUrl={setBackgroundUrl} />

            <ChatWindow currentChatId={currentChatId} />
        </div>
    );
}

export default ChatPage;