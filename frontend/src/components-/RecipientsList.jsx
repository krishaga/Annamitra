import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/list.css";

export default function RecipientsList() {
    const [donations, setDonations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/lists/recipients-list",
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
                setDonations(data.donationRequests);
            } catch (error) {
                console.error("Error in fetching:", error);
            }
        };

        fetchDonations();

        const interval = setInterval(fetchDonations, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div>Nearby Donations</div>
            <div className="mainContainer">
                {donations.map((element, index) => (
                    <Recipient key={index} element={element} />
                ))}
            </div>  
            <div className="bottoms-buttons"></div>
            <button className="btns-3"
                onClick={() => {
                    navigate("/recipientRequest");
                }}
            >
                Custom Recipient
            </button>
        </div>
    );
}

function Recipient({ element }) {
    return (
        <div className="product-container">
            <div className="product-image-container">
            <img className="product-image" src="/assets/images/mapapi.png" style={{ width: "100%" }} alt="hello" />
            </div>
            <div className="description">
            Description: {element.description}
            </div>
            <div className="serves">
            Serves: {element.serves}
            </div>
            <div className="date">
            Date: {new Date(element.date).toLocaleDateString("en-GB")}
            </div>
            <div className="addresspro">
            Address: {element.addressFrom.street}
            </div>
            <div className="citypro">
            City: {element.addressFrom.city}
            </div>
            <div className="container-button">
            <button className="button">Accept</button>
            </div>
        </div>
    );
}
