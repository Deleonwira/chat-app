function SidebarHeader() {
    return (
        <div className="sidebar-header">
            <h1 className="sidebar-title">Messages</h1>
            <button className="btn-icon" id="search-btn" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
            </button>
        </div>
    )
}

export default SidebarHeader;