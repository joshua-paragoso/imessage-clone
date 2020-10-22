import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, login, logout} from "./features/userSlice";
import "./App.css";
import Imessage from "./Imessage";
import Login from "./Login";
import { auth } from "./firebase";

//first comment 
function App() {
  const user = useSelector(selectUser);

  //fire changes into reducer
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
        //user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        })

        );
      }else{
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])
    
   

  return (
    <div className="app">
      {/*if user exist you get to use imessage. If not youll need to login*/}
        {user ?
          (<Imessage/>)
         : 
          (<Login />)
        }
      
    </div>
  );
}

export default App;
