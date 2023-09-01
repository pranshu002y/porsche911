import React from "react";
import "./App.css"
import { useNavigate } from "react-router-dom";
const Header = ()=>{
  const navigate = useNavigate();
    return(
        <div>
<div className="app-header-left">
            <span className="app-icon"></span>
            <p className="app-name" onClick={()=> navigate("/intro")}>IntroCom</p>
            <div className="search-wrapper">
              <input className="search-input" type="text" placeholder="Search"/>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-search" viewBox="0 0 24 24">
                <defs></defs>
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </div>
            
          </div>
          
        </div>
    )
}
export default Header;