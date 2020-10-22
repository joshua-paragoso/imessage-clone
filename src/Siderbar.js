import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat";

function Siderbar() {
    return (
        <div className="sidebar">
            <div className= "sidebar__header">
                <Avatar className="sidebar__avatar" />
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
