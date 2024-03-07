import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/list.css";

export default function DonationsList() {
    const [recipients, setRecipients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipients = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/lists/donations-list",
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
                setRecipients(data.recipientRequests);
            } catch (error) {
                console.error("Error in fetching:", error);
            }
        };

        fetchRecipients();

        const interval = setInterval(fetchRecipients, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div>Nearby Requests</div>
            <div className="mainContainer">
                {recipients.map((element) => (
                    <Donation element={element} />
                ))}
            </div>
            <div className="bottoms-buttons">
                <button className="btns-3"
                    onClick={() => {
                        navigate("/donationRequest");
                    }}
                >
                    Custom Donation
                </button>
            </div>
        </div>
    );
}

function Donation({ element }) {
    const navigate = useNavigate();

    function handleClick(){
        console.log();
    }    

    return (
        <div className="product-container" >
            <div className="product-image-container">
            <img className="product-image" src="/assets/images/mapapi.png" style={{ width: "100%" }} alt="" />
            </div>            
            <div className="product-description-container">
                <div className="description">
                    Description: {element.description}
                </div>
                <div className="serves">
                    To Serve: {element.toServe}
                </div>
                <div className="date">
                    Date: {new Date(element.date).toLocaleDateString("en-GB")}
                </div>
                <div className="addresspro">
                    Address: {element.addressTo.street}
                </div>
                <div className="citypro">
                    City: {element.addressTo.city}
                </div>
                <div className="container-button">
                    <button onClick={handleClick} className="button">Donate</button>
                </div>
            </div>
        </div>
    );
}
