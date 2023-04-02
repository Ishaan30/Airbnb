import { Button } from "@material-ui/core";
import React from "react";
import "./LoginPage.css";
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const nav=useNavigate();
  return (
    
    <div className="loginPage">
        <div className="loginPage_info">
            <LockOpenRoundedIcon className="loginIcon" />
            
            <h1>Sign Up</h1>
            
        </div>
        <div className="name">
        <input  className="firstname" type={"text"} placeholder="FirstName" />
        <input className="lastname" type={"text"} placeholder="LastName" />
      </div>
      <div>
        <input className="password" type={"password"} placeholder="Password" />
      </div>
      <div >
        <input className="email" type={"email"} placeholder="email" />
      </div>
      <Button onClick={()=>nav('/')} className="loginbutton">Log In</Button>
    </div>
  );
}

export default LoginPage;
