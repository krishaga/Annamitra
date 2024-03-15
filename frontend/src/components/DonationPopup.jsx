import React, { useState, useEffect } from "react";
import "../styles/confirmation.css";

export default function Confirmation({ element, onClose }) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const fetchRecipients = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/auth/get-username",
                    {
                        method: "GET",
                        headers: {
                            authorization:
                                "Bearer " + localStorage.getItem("token"),
                            userType: "Recipient",
                            userId: element.recipient_id
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsername(data.username);
            } catch (error) {
                console.error("Error in fetching:", error);
            }
        };

        fetchRecipients();

        const interval = setInterval(fetchRecipients, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="popup">
            <div className="product-container">
                <div className="product-image-container">
                    <img
                        className="product-image"
                        src="/assets/images/mapapi.png"
                        style={{ width: "100%" }}
                        alt=""
                    />
                </div>
                    <div className="description">
                        Description: {element.description}
                    </div>
                    <div className="serves">To Serve: {element.toServe}</div>
                    <div className="date">
                        Date: {new Date(element.date).toLocaleDateString("en-GB")}
                    </div>
                    <div className="addresspro">
                        Address: {element.addressTo.city}, {element.addressTo.postalcode}
                    </div>
            </div>
            <div className="confirmation">
                <div className="user-info">
                    <h2>To: {username}</h2>
                    <p>{element.addressTo.street}, {element.addressTo.city}, {element.addressTo.state}, {element.addressTo.postalcode}, {element.addressTo.country}</p>
                </div>
                <div className="proceed">
                    <h3>Would You Like To Donate to this person or not?</h3>
                    <div className="button-container">
                    {/* <button className="btn-3" onClick={handleDonate}>
                        Donate
                    </button>
                    <button className="btn-3" onClick={handleNo}>
                        No
                    </button> */}
                    </div>
                </div>
                <div className="contact-info">
                    Mobile No:- 
                    Email Id :-
                </div>
            </div>
        </div>
    );
}