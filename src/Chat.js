import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, { useEffect, useState } from 'react'
import {selectChatId, selectChatName} from "./features/chatSlice";
import {useSelector } from "react-redux";
import "./Chat.css";
import Message from "./Message";
import db from './firebase';
function Chat() {

    const [input, setInput] = useState("");

    //used to keep track of chats
    const chatName = useSelector(selectChatName);

    //used to keep track of messages
    const [messages, setMessages] = useState([]);
    
    //get chatId
    const chatId = useSelector(selectChatId);

    useEffect(() => {
        //got into chatroom and bring the messages from that chat
        if( chatId){
            db.collection('chats').docs(chatId).collection('messages')
            .orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
        }
    }, [chatId]);

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
                {messages.map (({id, data}) => (<Message key={id} contents={data} />
                ))}
                
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
