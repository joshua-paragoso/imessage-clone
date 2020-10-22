import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

function Siderbar() {
    const user = useSelector(selectUser);
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
                    <RateReviewOutlinedIcon />
                </IconButton>
                
            </div>

            <div className= "sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                
            </div>
        </div>
    )
}

export default Siderbar
