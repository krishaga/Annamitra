import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import "../styles/navbar_2.css";

function Navbar() {
    const [name, setName] = useState([]);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
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
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setName(data.user.name);
                setAddress(data.user.address);
            } catch (error) {
                console.error("Error in fetching: ", error);
            }
        };
        fetchdata();
    }, []);

    if (
        location.pathname === "/Annamitra" ||
        location.pathname === "/Signup" ||
        location.pathname === "/Login"
    ) {
        return (
            <div>
                <div className="navbar1">
                    <img
                        src="/assets/images/logo.png"
                        onClick={() => {
                            window.location = "/Annamitra";
                        }}
                        alt="Logo"
                    />
                    <hr className="linebreak" />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="navbar2">
                    <div className="logo">
                        <img
                            src="/assets/images/logo.png"
                            onClick={() => {
                                window.location = "/dashboard";
                            }}
                            alt="Logo"
                        />
                    </div>
                    <div className="details">
                        <div className="name">
                            Hi {name} !! <br />
                        </div>
                        <div className="address">
                            {address.street}, {address.city}, {address.state}
                        </div>
                    </div>
                    <div className="profile">
                        <img
                            src="../assets/images/navbarprofilepic.jpeg"
                            alt="hi"
                        />
                    </div>
                </div>
                <hr className="linebreak" />
            </div>
        );
    }
}

export default Navbar;
