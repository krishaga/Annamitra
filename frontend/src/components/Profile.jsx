import React from "react";
import { Navigate } from "react-router-dom";
import "../styles/Profile.css";

export default function Component(){

    const handleLogout = () =>{
        fetch("http://localhost:3000/api/auth/logout",{
            method:"POST",
            headers: {
                authorization:
                    "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({})
        })
        .then((response)=>response.json())
        .then((data)=>{
            if (data.errorMessage) {
                alert(data.errorMessage);
            } else {
                Navigate("/Annamitra");
                window.location.reload();
            }
        });
    }
    

    return (
        <div>
            <button
                    className="btns-main"
                    onClick= {handleLogout}
                    >
                        Logout
                    </button>
        </div>
    )
}