import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoughnutChart from "./Chart";
import "../styles/dashboard.css";

function Dashboard() {
    // const [cookedCount, setCookedCount] = useState(0);
    // const [uncookedCount, setUncookedCount] = useState(0);
    // const [packedCount, setPackedCount] = useState(0);
    const [donationCount, setDonationCount] = useState(0);
    const [requestCount, setRequestCount] = useState(0);
    // const [donations, setDonations] = useState([]);
    const navigate = useNavigate();

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
                // setDonations(data.user.donations);
                setDonationCount(data.user.donationCount);
                setRequestCount(data.user.requestsCount);
            } catch (error) {
                console.error("Error in fetching: ", error);
            }
            // donations.forEach((donation) => {
            //     if (donation.category == "Cooked Food") {
            //         setCookedCount(cookedCount + 1);
            //     } else if (donation.category == "UnCooked Food") {
            //         setUncookedCount(uncookedCount + 1);
            //     } else if (donation.category == "Raw Food") {
            //         setPackedCount(packedCount + 1);
            //     }
            // });
        };
        fetchDetails();
        fetchDetails();
    }, []);

    const data = [3, 1, 2];

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
                <div className="bottom-btns">
                    <button
                        className="btns-main"
                        onClick={(e) => {
                            navigate("/donations-list");
                        }}
                    >
                        Donate
                    </button>
                    &nbsp;&nbsp;
                    <button
                        className="btns-main"
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
