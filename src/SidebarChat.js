import { Avatar } from '@material-ui/core';
import { useDispatch } from "react-redux";
import {setChat } from "./features/chatSlice";
import React, {useState} from 'react';
import "./SidebarChat.css";
import db from './firebase';
import { useEffect } from "react";

function SidebarChat({id, chatName}) {
    const dispatch = useDispatch();

    //storage for message to show on side chat
    const [chatInfo, setChatInfo] = useState([]);

    //use effect
    useEffect(() => {
        db.collection("chats")
        .doc(id)
        .collection("messages").orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setChatInfo(snapshot.docs.map((doc) => doc.data()))
        );
    }, [id])

    return (
        <div 
            onClick={() => 
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName
                })
            )
        } 
        
        className="sidebarChat">
            <Avatar src={chatInfo[0]?.photo}/>
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>{new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}</small>
            </div>
        </div>
    )
}

export default SidebarChat
