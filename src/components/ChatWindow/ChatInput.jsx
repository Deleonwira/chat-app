import { useState, useEffect } from "react";
import { currentSession } from "../../data/current.session";

function ChatInput({ message, setMessage, currentChatId }) {
    const [text, setText] = useState('')

    useEffect(() => {
        console.log(message);
    }, [message]);


    function handleSendMessage() {
        const newMessage = {
            id: `m${message.length + 1}`,
            chatId: currentChatId,
            senderId: currentSession.id,
            text: text,
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            })
        }

        setMessage((prev) => [...prev, newMessage])

        

    }

    return (
        <div className="message-input-area">
            <button className="btn-icon" id="attach-btn" aria-label="Attach file">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
            </button>

            <div className="input-wrapper">
                <input
                    type="text"
                    id="message-input"
                    className="message-input"
                    placeholder="I mean have you |"
                    autoComplete="off"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
            </div>

            <button className="btn-icon" id="voice-btn" aria-label="Voice message">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
            </button>

            <button className="btn-send" id="send-btn" onClick={handleSendMessage}>
                <span>Send</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    )
}

export default ChatInput;