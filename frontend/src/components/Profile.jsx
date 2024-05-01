import React from "react";
import { Navigate } from "react-router-dom";
import "../styles/Profile.css";
import "../styles/forms.css";
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
        <div className="profile-settings">
            <div className="left-section">
                <div className="profile-image">
                    <div className="image">
                        <img src="../assets/images/navbarprofilepic.jpeg" alt=""/>
                    </div>
                    <div className="edit-btn">
                        <button className="btns-main">
                            Upload
                        </button>
                    </div>
                </div>
                <div className="categories">
                    <div className="pers-det">Personal Details</div>
                    <div className="add">Address</div>
                    <div className="pass-upd">Password Update</div>
                    <div className="del-acc">Delete Account</div>
                </div>
                <div className="Logout">
                    <button
                        className="btns-main"
                        onClick= {handleLogout}>
                                    Logout
                    </button>
                </div>
            </div>
            <div className="right-section">
                <div className="peronal-details">
                    <div className="cat-head">
                        <h1>Personal Details</h1>
                    </div>
                    <div className="main-section">
                        <div className="name">
                            <h4>Full Name</h4>
                            <input type="text" placeholder="Fetch hoga" />
                        </div>
                        <div className="email">
                            <h4>Email</h4>
                            <input type="text" placeholder="Fetch hoga" />
                        </div>
                        <div className="phone">
                            <h4>Phone Number</h4>
                            <input type="text" placeholder="Fetch hoga" />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">
                            Update
                        </button>           
                    </div>
                </div>
                <div className="Address">
                    <div className="cat-head">
                        <h1>Address</h1>
                    </div>
                    <div className="main-section">
                        <div className="street">
                            <h4>Street Address</h4>
                            <input type="text" placeholder="Fetch hoga" />
                        </div>
                        <div className="city">
                            <h4>City</h4>
                            <input type="text" placeholder="Fetch hoga" />
                        </div>
                        <div className="pincode">
                            <h4>Postal Code</h4>
                            <input type="text" placeholder="Fetch hoga" />
                        </div>
                        <div className="state">
                            <h4>State</h4>
                            <input type="text" placeholder="Fetch hoga" />
                        </div>
                        <div className="country">
                            <h4>Country</h4>
                            <input type="text" placeholder="Fetch hoga" />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">
                            Update
                        </button>           
                    </div>
                </div>
                <div className="change-password">
                    <div className="cat-head">
                        <h1>Change Password</h1>
                    </div>
                    <div className="main-sections">
                        <div className="current-password">
                            <h4>Current Password</h4>
                            <input type="password" placeholder="" />
                        </div>
                        <div className="new-password">
                            <h4>New Password</h4>
                            <input type="password" placeholder="" />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">
                            Update
                        </button>           
                    </div>
                </div>
                <div className="delete-account">
                    <div className="cat-head">
                        <h1>Delete Account</h1>
                    </div>
                    <div className="main-section">
                        <div className="paaword">
                            <h4>Enter Password</h4>
                            <input type="password" placeholder="" />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">
                            Delete
                        </button>           
                    </div>
                </div>       
            </div>  
        </div>
    )
}