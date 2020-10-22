import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    
    return (
        <div className="login">
            {/* <h2>login</h2> */}
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg" alt=""/>
                <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
