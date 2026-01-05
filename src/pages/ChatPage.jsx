import SideBar from "../components/SideBar/SideBar";
import "../CSS/pages/homepage.css"
import ChatWindow from "../components/ChatWindow/ChatWindow";
import { useState } from "react";

function ChatPage() {
    const [currentChatId, setCurrentChatId] = useState('c1')
    
    return (
        <div className="chat-container">
            
            <SideBar setCurrentChatId={setCurrentChatId} />

            <ChatWindow currentChatId={currentChatId} />
        </div>
    );
}

export default ChatPage;