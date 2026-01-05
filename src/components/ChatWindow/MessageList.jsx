import { currentSession } from "../../data/current.session"
import { users } from "../../data/users.dummy"

function MessageList({ currentChatId, message }) {
    const messageList = message.map(m => {
        if (m.chatId === currentChatId) {
            const userId = users.find(user => m.senderId === user.id)
            return (
                <div className={m.senderId === currentSession.id ? 'message sent' : "message received"} key={m.id}>
                    <img src={userId.avatar} alt="Diego" className="message-avatar" />
                    <div className="message-bubble">
                        <p className="message-text">{m.text}</p>
                        <span className="message-timestamp">{m.time}</span>
                    </div>
                </div>
            )
        }
    })


    return (
        <div className="messages-container" id="messages-container">
            {messageList}
            {/* <div className="message received">
                        <img src="https://i.pravatar.cc/150?img=12" alt="Diego" className="message-avatar" />
                        <div className="message-bubble">
                            <p className="message-text">I'm cautious about cryptos. It's unpredictable.</p>
                            <span className="message-timestamp">19:45</span>
                        </div>
                    </div>

                    <div className="message sent">
                        <div className="message-bubble">
                            <p className="message-text">Yeah, but the potential returns are worth considering!</p>
                            <span className="message-timestamp">19:47</span>
                        </div>
                    </div>

                    <div className="message received">
                        <img src="https://i.pravatar.cc/150?img=12" alt="Diego" className="message-avatar" />
                        <div className="message-bubble">
                            <p className="message-text">That's what I've heard. Any advice on where to start?</p>
                            <span className="message-timestamp">19:50</span>
                        </div>
                    </div>

                    <div className="message sent">
                        <div className="message-bubble">
                            <p className="message-text">Have you started investing in real estate?</p>
                            <span className="message-timestamp">19:52</span>
                        </div>
                    </div>

                    <div className="typing-indicator">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div> */}
        </div>
    )
}

export default MessageList;
