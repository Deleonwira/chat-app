
import ContactList from "./ContactList";
import SidebarHeader from "./SidebarHeader";
function SideBar({ setCurrentChatId, setBackgroundUrl, message }) {
    return (
        <aside className="sidebar">

            <SidebarHeader />

            <ContactList
                setCurrentChatId={setCurrentChatId}
                message={message}
            />

            <div style={{ display: 'flex', gap: '8px', padding: '16px' }}>
                <button className="add-contact-btn" id="add-contact-sidebar" style={{ flex: 1, margin: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" y1="8" x2="19" y2="14"></line>
                        <line x1="22" y1="11" x2="16" y2="11"></line>
                    </svg>
                    Add
                </button>
                <button className="add-contact-btn" onClick={() => {
                    const url = prompt("Enter Image URL:");
                    if (url) setBackgroundUrl(url);
                }} style={{ flex: 1, margin: 0 }}>
                    Background
                </button>
            </div>
        </aside>
    )
}

export default SideBar;