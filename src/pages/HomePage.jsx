import SideBar from "../components/SideBar";
import "../CSS/pages/homepage.css"
import ChatWindow from "../components/ChatWindow";

function HomePage() {
    return (
        <div className="chat-container">
            
            <SideBar />

            <ChatWindow />
        </div>
    );
}

export default HomePage;