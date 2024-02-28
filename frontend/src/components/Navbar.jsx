import React from "react";
import '../styles/navbar.css'


function Navbar() {
    return (
        <div>
            <div className="navbar">
            <img src="/assets/images/logo.png" onClick={()=>{
                window.location="/Annamitra"; 
            }} alt="Logo" />
            <hr className="divider" />
            </div>
        </div>
    );
}

export default Navbar;
