import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";


function ChatWindow({ currentChatId, message, setMessage }) {

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