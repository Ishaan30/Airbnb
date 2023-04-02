import React from "react";
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Button } from "@material-ui/core"
function Header() {
  const loginNav=useNavigate();
  return (
    
    <div className="header">
      <Link to="/">
      <img
        className="header_icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
        alt=""
        
      />
      </Link>
      
     
      <div className="header_center">
        <input type="text"/>
        <SearchIcon />
      </div>
      <div  className="header_right">
        <p >Become a host</p>
       <LanguageIcon/>
       <ExpandMoreIcon/>
     <Button onClick={()=>loginNav("/login")} className="header_signup " variant="outlined">Login</Button>

      </div>
    </div>
    
  );
}

export default Header;
