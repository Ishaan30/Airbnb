import React ,{useState}from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search"
import {useNavigate} from 'react-router-dom';


function Banner() {
  const [showSearch,setshowSearch]=useState(false);
  const nav= useNavigate();


  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search/>}
        
        <Button  onClick={()=>setshowSearch(!showSearch)} className="banner_searchButton" variant="outlined">
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1> Get out & stretch your image</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button onClick={()=>nav('/search')} variant="outlined"> Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
