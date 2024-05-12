import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import "../styles/forms.css";

export default function Component() {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [phone, setPhone] = useState([]);
    const [address, setAddress] = useState([]);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchUser = async() =>{
            try{
                const response = await fetch(
                    "http://localhost:3000/api/auth/user-details",
                    {
                        method: "GET",
                        headers: {
                            authorization:
                                "Bearer " + localStorage.getItem("token"),
                        },
                    }
                );
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setName(data.user.name);
                setEmail(data.user.email);
                setPhone(data.user.mobileno);
                setAddress(data.user.address);
                setUsername(data.user.username);
                setPassword(data.user.password);
            } catch (error) {
                window.alert('Please Login or SignUp');
                navigate('/Annamitra')
                window.location.reload();
            }
        }
        fetchUser();
    },[])

    const handleLogout = () => {
        localStorage.setItem("token", "");
        navigate("/Annamitra");
        window.location.reload();
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
                                placeholder="Name" defaultValue={name}
                            />
                        </div>
                        <div className="form-unit">
                            <div className="setting-head">Username</div>
                            <input
                                type="text"
                                className="formscontrol"
                                placeholder="Username" defaultValue={username}
                            />
                        </div>
                        <div className="form-unit">
                            <div className="setting-head">Email</div>
                            <input
                                type="text"
                                className="formscontrol"
                                placeholder="Email" defaultValue={email}
                            />
                        </div>
                        <div className="form-unit">
                            <div className="setting-head">Phone Number</div>
                            <input
                                type="text"
                                className="formscontrol"
                                placeholder="Phone" defaultValue={phone}
                            />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">Update</button>
                    </div>
                </div>
                {/* <div className="category-detail">
                    <div className="cat-head">Address</div>
                    <div className="main-section">
                        <div className="form-unit">
                            <div className="setting-head">Street Address</div>
                            <input type="text" className="formscontrol" placeholder="Street" defaultValue={address.street} />
                        </div>
                        <div className="form-unit">
                        <div className="setting-head">City</div>
                            <input type="text" className="formscontrol" placeholder="City" defaultValue={address.city} />
                        </div>
                        <div className="form-unit">
                        <div className="setting-head">Postal Code</div>
                            <input type="text" className="formscontrol" placeholder="State" defaultValue={address.state} />
                        </div>
                        <div className="form-unit">
                        <div className="setting-head">State</div>
                            <input type="text" className="formscontrol" placeholder="Postal Code" defaultValue={address.postalcode} />
                        </div>
                        <div className="form-unit">
                            <div className="setting-head">Country</div>
                            <input type="text" className="formscontrol" placeholder="Country" defaultValue={address.country} />
                        </div>
                    </div>
                    <div className="update-button">
                        <button className="btns-main">Update</button>
                    </div>
                </div> */}
                {/* <div className="change-password">
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
                </div> */}
                {/* <div className="delete-account">
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
