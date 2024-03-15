import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoughnutChart from "./Chart";
import "../styles/dashboard.css";

function Dashboard() {
    const [donationCount, setDonationCount] = useState([]);
    const [donations, setDonations] = useState([]);
    const [requestCount, setRequestCount] = useState([]);
    const navigate = useNavigate();

    const data = [30, 50, 20];

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
                setDonations(data.user.donations);
                setRequestCount(data.user.requestsCount);
            } catch (error) {
                console.error("Error in fetching: ", error);
            }
            console.log(donations);
            donations.forEach((donation) => {
                console.log(donation);
                // Process other fields as needed
            });
        };

        fetchDetails();
    }, []);

    return (
        <div>
            <div className="first">
                <div className="main">
                    <div className="intro">Your DashBoard</div>
                    <div className="dashboard">
                        <div className="upper-section">
                            <div className="card">
                                <div className="circle">
                                    <div className="count">{donationCount}</div>
                                </div>
                                <div className="text">
                                    Donations
                                    <br />
                                    Till Now
                                </div>
                            </div>
                            <div className="card">
                                <div className="circle">
                                    <div className="count">{requestCount}</div>
                                </div>
                                <div className="text">
                                    Requests
                                    <br />
                                    Till Now
                                </div>
                            </div>
                        </div>
                        <div className="lower-section">
                            <div className="second-section">
                                <DoughnutChart data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-buttons">
                    <button
                        className="button-main"
                        onClick={(e) => {
                            navigate("/donations-list");
                        }}
                    >
                        Donate
                    </button>
                    &nbsp;&nbsp;
                    <button
                        className="button-main"
                        onClick={(e) => {
                            navigate("/recipients-list");
                        }}
                    >
                        Request
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Dashboard;
