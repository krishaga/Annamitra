import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    gridTemplateColumns: "repeat(3, 1fr)",
                }}
            >
                {recipients.map((element) => (
                    <Donation element={element} />
                ))}
            </div>
            <button
                onClick={() => {
                    navigate("/donationRequest");
                }}
            >
                Custom Donation
            </button>
        </div>
    );
}

function Donation({ element }) {
    const handleClick = async () => {
        // try {
        //         "http://localhost:3000/api/list/Donations"
        //     );
        //     if (!response.ok) {
        //         throw new Error("Network response was not ok");
        //     }
        //     // Handle success if needed
        // } catch (error) {
        //     console.error("Error in donation:", error);
        // }
    };

    return (
        <div style={{ width: 150, border: "2px solid black" }}>
            <img src={element.image} style={{ width: 100 }} alt="" />
            <br />
            {element.description}
            <br />
            To Serve: {element.toServe}
            <br />
            Date: {new Date(element.date).toLocaleDateString("en-GB")}
            <br />
            {element.addressTo.street}
            <br />
            {element.addressTo.city}
            <br />
            <button onClick={handleClick}>Donate</button>
        </div>
    );
}
