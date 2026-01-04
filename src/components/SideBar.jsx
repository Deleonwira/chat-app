

function SideBar(){
    return (
        <aside className="sidebar">
                <div className="sidebar-header">
                    <h1 className="sidebar-title">Messages</h1>
                    <button className="btn-icon" id="search-btn" aria-label="Search">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </button>
                </div>

                <div className="contacts-list">
                    <div className="contact-item active" data-contact-id="1">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=12" alt="Diego Bouldasar" className="avatar" />
                            <span className="status-indicator online"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Diego Bouldasar</h3>
                                <span className="message-time">19:58</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">Have you started investing in real...</p>
                                <span className="unread-badge">2</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-item" data-contact-id="2">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=45" alt="Noey Tomes" className="avatar" />
                            <span className="status-indicator online"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Noey Tomes</h3>
                                <span className="message-time">18:18</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">Great! I'll see you tomorrow</p>
                                <span className="unread-badge">1</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-item" data-contact-id="3">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=33" alt="Offort Bouldasar" className="avatar" />
                            <span className="status-indicator"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Offort Bouldasar</h3>
                                <span className="message-time">16:58</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">How's what you need?</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-item" data-contact-id="4">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=27" alt="Kaes Learno" className="avatar" />
                            <span className="status-indicator"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Kaes Learno</h3>
                                <span className="message-time">12:52</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">It's great. Let's schedule...</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-item" data-contact-id="5">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=48" alt="Kalemer Kristofno" className="avatar" />
                            <span className="status-indicator online"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Kalemer Kristofno</h3>
                                <span className="message-time">20:33</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">You have great potential</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-item" data-contact-id="6">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=8" alt="Kaétége Erik" className="avatar" />
                            <span className="status-indicator"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Kaétége Erik</h3>
                                <span className="message-time">09:18</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">The project is going well</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-item" data-contact-id="7">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=65" alt="Hiopollo Donisi" className="avatar" />
                            <span className="status-indicator online"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Hiopollo Donisi</h3>
                                <span className="message-time">15:30</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">Thank you for your help!</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-item" data-contact-id="8">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=31" alt="Heidi Dominika" className="avatar" />
                            <span className="status-indicator"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Heidi Dominika</h3>
                                <span className="message-time">12 May</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">Let's catch up this week</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-item" data-contact-id="9">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?img=23" alt="Elough Imre" className="avatar" />
                            <span className="status-indicator online"></span>
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <h3 className="contact-name">Elough Imre</h3>
                                <span className="message-time">12:45</span>
                            </div>
                            <div className="contact-preview">
                                <p className="last-message">Perfect! See you soon</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="add-contact-btn" id="add-contact-sidebar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" y1="8" x2="19" y2="14"></line>
                        <line x1="22" y1="11" x2="16" y2="11"></line>
                    </svg>
                    Add Contact
                </button>
            </aside>
    )
}

export default SideBar;