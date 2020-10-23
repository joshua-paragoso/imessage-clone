import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, { useState } from 'react'
import {selectChatName} from "./features/chatSlice";
import {useSelector } from "react-redux";
import "./Chat.css";
import Message from "./Message";
function Chat() {

    const [input, setInput] = useState("");

    //used to keep track of chats
    const chatName = useSelector(selectChatName);

    //used to keep track of messages
    const [messages, setMessages] = useState([]);
    const sendMessage = event => {
        event.preventDefault();

        //Firebase magic 

        //after sending message to be an empty string  
        setInput("");

    };

    return (
        <div className="chat">

            {/*chat header*/}
                <div className="chat__header">
                    <h4>To: <span className="chat__name"> {chatName} </span></h4>
                    <strong> Details</strong>
                </div>

            {/* chat messages*/}
            <div className="chat__messages">
                <Message />
                
            </div>

            {/*chat input*/}
            <div className="chat__input">
                <form>
                    <input 
                        value={input} 
                        onChange= {(event) => setInput(event.target.value)}
                        placeholder="iMessage" 
                        type="text"
                    />
                    <button onClick={sendMessage}> Send message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
                
            </div>
        </div>
    )
}

export default Chat
