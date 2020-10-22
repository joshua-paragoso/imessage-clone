import { Avatar, IconButton } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "./firebase";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
import { ChangeHistorySharp } from "@material-ui/icons";

function Siderbar() {
    const user = useSelector(selectUser);

    //keep track of chats
    const [chats, setChats] = useState([])

    useEffect(() => {
        db.collection("chats").onSnapshot((snapshot)=>
            setChats(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
            ) 
        ); 
    }, []);

    const addChat = () => {
        //add a pop out for adding chats
        const chatName = prompt('Please enter a chat name');

        if(chatName){
            db.collection('chats').add({
            chatName: chatName,
        });
        }
    };

    return (
        <div className="sidebar">
            <div className= "sidebar__header">
                <Avatar 
                    onClick ={() => auth.signOut()}
                    src={user.photo} 
                    className="sidebar__avatar" 
                />
                <div className="sidebar__input">
                    <SearchIcon/>
                    <input placeholder="Search"/>
                </div>
                <IconButton variant="outlined" className="sidebar__inputButton">
                    <RateReviewOutlinedIcon onClick={addChat} />
                </IconButton>
                
            </div>

            <div className= "sidebar__chats">
                {chats.map(({id, data: {chatName}}) => (
                   <SidebarChat key={id} id={id} chatName={chatName}/> 
                ))}

            </div>
        </div>
    )
}

export default Siderbar
