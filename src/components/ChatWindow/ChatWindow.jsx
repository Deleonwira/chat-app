import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
function ChatWindow ({currentChatId}){
    
    return (
        <main className="chat-main">
                <ChatHeader currentChatId = {currentChatId} />
                <MessageList currentChatId={currentChatId} />
                <ChatInput />
            </main>
    )
}

export default ChatWindow;