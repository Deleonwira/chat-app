import { users } from "../../data/users.dummy";
import { chats } from "../../data/chats.dummy";
import ChatWindow from "../ChatWindow/ChatWindow";
import { currentSession } from "../../data/current.session";


function ContactList({ setCurrentChatId, message }) {

    const contactList = users.map(user => {
        if (currentSession.id != user.id) {
            const chat = chats.find(chat => chat.participants.includes(user.id));
            const lastMessage = message.filter(m => m.chatId === chat.id).at(-1)

            console.log(lastMessage)
            return (
                <div className="contact-item" data-contact-id={user.id} key={user.id} onClick={() => setCurrentChatId(chat.id)}>
                    <div className="avatar-wrapper">
                        <img src={user.avatar} alt={user.name} className="avatar" />
                        <span className={user.isOnline ? "status-indicator online" : "status-indicator"}></span>
                    </div>
                    <div className="contact-info">
                        <div className="contact-header">
                            <h3 className="contact-name">{user.name}</h3>
                            <span className="message-time">{lastMessage.time}</span>
                        </div>
                        <div className="contact-preview">
                            <p className="last-message">{lastMessage.text}</p>
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
