import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    gridTemplateColumns: "repeat(3, 1fr)",
                }}
            >
                {donations.map((element, index) => (
                    <Recipient key={index} element={element} />
                ))}
            </div>
            <button
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
        <div style={{ width: 150, border: "2px solid black" }}>
            <img src={element.image} style={{ width: 100 }} alt="" />
            <br />
            {element.description}
            <br />
            Serves: {element.serves}
            <br />
            Date: {new Date(element.date).toLocaleDateString("en-GB")}
            <br />
            {element.addressFrom.street}
            <br />
            {element.addressFrom.city}
            <br />
            <button>Accept</button>
        </div>
    );
}
