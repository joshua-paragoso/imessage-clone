import React from "react";
import Chat from "./Chat";
import "./Imessage.css";
import Sidebar from"./Siderbar";

function IMessage() {
    return (
        <div className="imessage">
            {/*side bar */}
            <Sidebar/>
            {/*chat */}
            <Chat/>
        </div>
    )
}

export default IMessage
