import { users } from "../../data/users.dummy";
import { chats } from "../../data/chats.dummy";
import ChatWindow from "../ChatWindow/ChatWindow";
import { currentSession } from "../../data/current.session";


function ContactList({ setCurrentChatId }) {

    const contactList = users.map(user => {
        if (currentSession.id != user.id) {
            const chat = chats.find(chat => chat.participants.includes(user.id));
            return (
                <div className="contact-item" data-contact-id={user.id} key={user.id} onClick={() => setCurrentChatId(chat.id)}>
                    <div className="avatar-wrapper">
                        <img src={user.avatar} alt={user.name} className="avatar" />
                        <span className={user.isOnline ? "status-indicator online" : "status-indicator"}></span>
                    </div>
                    <div className="contact-info">
                        <div className="contact-header">
                            <h3 className="contact-name">{user.name}</h3>
                            <span className="message-time">{chat.lastMessageTime}</span>
                        </div>
                        <div className="contact-preview">
                            <p className="last-message">{chat.lastMessage}</p>
                            <span className="unread-badge">{chat.unreadCount}</span>
                        </div>
                    </div>
                </div>
            )
        }

    })

    return (
        <div className="contacts-list">
            {contactList}
        </div>
    )
}

export default ContactList;
