import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
function ChatWindow (){
    return (
        <main className="chat-main">
                <ChatHeader />

                <MessageList />

                <ChatInput />
            </main>
    )
}

export default ChatWindow;