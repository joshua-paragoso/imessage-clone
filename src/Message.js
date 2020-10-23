import { Avatar } from '@material-ui/core';
import { PhotoAlbumRounded } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";
import "./Message.css";

function Message({
    id, 
    contents: { timestamp,
                displayName, 
                email,
                message, 
                photo, 
                uid},
            }
        ) 
    {

    const user = useSelector(selectUser);

    return (
        <div className={`message ${user.email === email && "message__sender"}`}>
            <Avatar className="message__photo" src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleDateString()}</small>
        </div>
    );
}

export default Message
