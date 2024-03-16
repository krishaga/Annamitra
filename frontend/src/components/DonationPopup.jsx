import React, { useState, useEffect } from "react";
import "../styles/confirmation.css";

export default function Confirmation({ element, onClose }) {
    const [user, setUser] = useState({});
    const [showContactInfo, setShowContactInfo] = useState(false);

    useEffect(() => {
        const fetchRecipients = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/auth/get-user",
                    {
                        method: "GET",
                        headers: {
                            authorization:
                                "Bearer " + localStorage.getItem("token"),
                            user_type: "Recipient",
                            user_id: element.recipient_id,
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUser(data.user);
            } catch (error) {
                console.error("Error in fetching:", error);
            }
        };

        fetchRecipients();

        const interval = setInterval(fetchRecipients, 1000);

        return () => clearInterval(interval);
    }, []);

    async function handleDonate() {
        setShowContactInfo(true);
        try {
            const response = await fetch(
                "http://localhost:3000/api/match/match-donation",
                {
                    method: "PUT",
                    headers: {
                        authorization:
                            "Bearer " + localStorage.getItem("token"),
                        request_id: element._id,
                        updated_request: {
                            addressFrom: user.addressFrom,
                            donor_id: user._id,
                            completed: true,
                            ...element,
                        },
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            console.log(await response.json());
        } catch (error) {
            console.error("Error in fetching:", error);
        }
    }

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
                    Address: {element.addressTo.city},
                    {element.addressTo.postalcode}
                </div>
            </div>
            <div className="confirmation">
                <div className="user-info">
                    <h2>To: {user.username}</h2>
                    <p>
                        {element.addressTo.street}, {element.addressTo.city},{" "}
                        {element.addressTo.state},{" "}
                        {element.addressTo.postalcode},{" "}
                        {element.addressTo.country}
                    </p>
                </div>
                <div className="proceed">
                    <h3>
                        {showContactInfo
                            ? "Thank you for your Donatiton!"
                            : "Are you sure you would like to proceed?"}
                    </h3>
                    <div className="button-container">
                        <button
                            className={`button-main ${
                                showContactInfo ? "hidden" : ""
                            }`}
                            onClick={handleDonate}
                        >
                            Donate
                        </button>
                        <button className="button-main" onClick={onClose}>
                            Go Back
                        </button>
                    </div>
                </div>
                <div
                    className={`contact-info ${
                        showContactInfo ? "" : "hidden"
                    }`}
                >
                    For more information, contact here :- <br />
                    Mobile No:{user.mobileno} <br />
                    Email Id : {user.email}
                </div>
            </div>
        </div>
    );
}
