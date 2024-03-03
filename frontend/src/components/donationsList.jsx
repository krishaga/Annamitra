import { useState, useEffect } from "react";

export default function DonationsList() {
    const [recipients, setRecipients] = useState([]);

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
                {recipients.map((element, index) => (
                    <Donation key={index} element={element} />
                ))}
            </div>
            <button>Custom Donation</button>
        </div>
    );
}

function Donation({ element }) {
    const handleClick = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/list/Donations"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // Handle success if needed
        } catch (error) {
            console.error("Error in donation:", error);
        }
    };

    return (
        <div style={{ width: 150, border: "2px solid black" }}>
            <img src={element.image} style={{ width: 100 }} alt="" />
            <br />
            {element.description}
            <br />
            To Serve: {element.toServe}
            <br />
            Date: {element.date}
            <br />
            {element.addressTo}
            <br />
            <button onClick={handleClick}>Donate</button>
        </div>
    );
}
