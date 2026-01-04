function MessageList() {
    return (
        <div className="messages-container" id="messages-container">
                    <div className="message received">
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
                    </div>
                </div>
    )
}

export default MessageList;
    