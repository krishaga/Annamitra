import React from "react";
import { Navigate } from "react-router-dom";
import "../styles/Profile.css";
import "../styles/forms.css";
export default function Component() {
    const handleLogout = () => {
        fetch("http://localhost:3000/api/auth/logout", {
            method: "POST",
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({}),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.errorMessage) {
                    alert(data.errorMessage);
                } else {
                    Navigate("/Annamitra");
                    window.location.reload();
                }
            });
    };

    return (
        <div className="profile-settings">
            <div className="left-section">
                <div className="profile-image">
                    <div className="image">
                        <img
                            src="../assets/images/navbarprofilepic.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="edit-btn">
                        <button className="btns-main">Upload</button>
                    </div>
                </div>
                <div className="categories">
                    <div className="compo">
                        <div className="rect"></div>
                        <div className="items">Personal Details</div>
                    </div>
                    <hr />
                    <div className="compo">
                        <div className="rect"></div>
                        <div className="items">Address</div>
                    </div>
                    <hr />
                    <div className="compo">
                        <div className="rect"></div>
                        <div className="items">Password Update</div>
                    </div>
                    <hr />
                    <div className="compo">
                        <div className="rect"></div>
                        <div className="items">Delete Account</div>
                    </div>
                    <hr />
                </div>
                <div className="logout">
                    <button className="btns-main" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
            <div className="right-section">
                <div className="category-detail">
                    <div className="cat-head">Personal Details</div>
                    <div className="main-section">
                        <div className="form-unit">
                            <div className="setting-head">Full Name</div>
                            <input
                                type="text"
                                className="formscontrol"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-unit">
                            <div className="setting-head">Email</div>
                            <input
                                type="text"
                                className="formscontrol"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-unit">
                            <div className="setting-head">Phone Number</div>
                            <input
                                type="text"
                                className="formscontrol"
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">Update</button>
                    </div>
                </div>
                {/* <div className="Address">
                    <div className="cat-head">
                        <h1>Address</h1>
                    </div>
                    <div className="main-section">
                        <div className="form-unit">
                            <h4>Street Address</h4>
                            <input type="text" className="formscontrol" placeholder="Fetch hoga" />
                        </div>
                        <div className="form-unit">
                            <h4>City</h4>
                            <input type="text" className="formscontrol" placeholder="Fetch hoga" />
                        </div>
                        <div className="form-unit">
                            <h4>Postal Code</h4>
                            <input type="text" className="formscontrol" placeholder="Fetch hoga" />
                        </div>
                        <div className="form-unit">
                            <h4>State</h4>
                            <input type="text" className="formscontrol" placeholder="Fetch hoga" />
                        </div>
                        <div className="form-unit">
                            <h4>Country</h4>
                            <input type="text" className="formscontrol" placeholder="Fetch hoga" />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">Update</button>
                    </div>
                </div>
                <div className="change-password">
                    <div className="cat-head">
                        <h1>Change Password</h1>
                    </div>
                    <div className="main-sections">
                        <div className="form-unit">
                            <h4>Current Password</h4>
                            <input type="password" className="formscontrol" placeholder="" />
                        </div>
                        <div className="form-unit">
                            <h4>New Password</h4>
                            <input type="password" className="formscontrol" placeholder="" />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">Update</button>
                    </div>
                </div>
                <div className="delete-account">
                    <div className="cat-head">
                        <h1>Delete Account</h1>
                    </div>
                    <div className="main-section">
                        <div className="form-unit">
                            <h4>Enter Password</h4>
                            <input type="password" className="formscontrol" placeholder="" />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">Delete</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
