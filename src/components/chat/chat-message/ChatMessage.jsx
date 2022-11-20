import React from "react";
import "./chatMessage.scss"

const ChatMessage = ({ message, auth, time }) => {
    const { text, uid } = message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`msg ${messageClass}`}>
                <div className="msg-text">{text}</div>
                <div className="send-time">{time.slice(16, 21)}</div>
        </div>
    )
}
export default ChatMessage