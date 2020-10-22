import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

function Siderbar() {
    return (
        <div>
            <div className= "sidebar__header">
                <Avatar  />
                <div className="sidebar__input">
                    <SearchIcon/>
                    <input placeholder="Search"/>
                </div>
                <IconButton>
                    <RateReviewOutlinedIcon />
                </IconButton>
                
            </div>

            <div className= "sidebar__chats">

            </div>
        </div>
    )
}

export default Siderbar
