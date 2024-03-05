import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function DashboardDetails() {
    const [donationnum, setDonationnum] = useState([]);
    const [requestnum, setRequestnum] = useState([]);
    const navigate = useNavigate(); // Add this line to get the navigate function

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/auth/dashboard",
                    {
                        method: "GET",
                        headers: {
                            authorization:
                                "Bearer " + localStorage.getItem("token"),
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Network Response was not ok");
                }
                const data = await response.json();
                // console.log(data);
                setDonationnum(data.details.donations);
                setRequestnum(data.details.receive);
            } catch (error) {
                console.error("Error in fetching: ", error);
            }
        };

        fetchDetails(); // Corrected function name
    }, []);

    return (
        <div>
            <div className="dashboard">
                <p>{donationnum}</p>
                <p>{requestnum}</p>
            </div>
            <div className="bottom-buttons">
                <button
                    className="btn-3"
                    onClick={(e) => {
                        navigate("/donations-list");
                    }}
                >
                    Donate
                </button>
            </div>
            &nbsp;&nbsp;
            <button
                className="btn-3"
                onClick={(e) => {
                    navigate("/recipients-list");
                }}
            >
                Request
            </button>
        </div>
    );
}

export default DashboardDetails;
