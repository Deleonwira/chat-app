function ChatWindow (){
    return (
        <main className="chat-main">
                <header className="chat-header">
                    <div className="chat-user-info">
                        <img src="https://i.pravatar.cc/150?img=12" alt="Diego Bouldasar" className="header-avatar" />
                        <div className="header-user-details">
                            <h2 className="header-username">Diego Bouldasar</h2>
                            <span className="header-status">Active now</span>
                        </div>
                    </div>
                    <div className="chat-actions">
                        <button className="btn-icon" id="call-btn" aria-label="Voice call">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </button>
                        <button className="btn-icon" id="video-btn" aria-label="Video call">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                        </button>
                        <button className="btn-icon" id="menu-btn" aria-label="More options">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </button>
                    </div>
                </header>

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

                <div className="message-input-area">
                    <button className="btn-icon" id="attach-btn" aria-label="Attach file">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                        </svg>
                    </button>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="message-input"
                            className="message-input"
                            placeholder="I mean have you |"
                            autocomplete="off"
                        />
                    </div>

                    <button className="btn-icon" id="voice-btn" aria-label="Voice message">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                    </button>

                    <button className="btn-send" id="send-btn">
                        <span>Send</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </main>
    )
}

export default ChatWindow;