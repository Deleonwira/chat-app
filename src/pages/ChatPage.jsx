import SideBar from "../components/SideBar/SideBar";
import "../CSS/pages/homepage.css"
import ChatWindow from "../components/ChatWindow/ChatWindow";

function ChatPage() {
    return (
        <div className="chat-container">
            
            <SideBar />

            <ChatWindow />
        </div>
    );
}

export default ChatPage;