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
                setDonationnum(data.user.donationsCount);
                setRequestnum(data.user.requestsCount);
            } catch (error) {
                console.error("Error in fetching: ", error);
            }
        };

        fetchDetails(); // Corrected function name
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
                                <div className="count">{donationnum}</div>
                            </div>
                            <div className="text">Donations<br />Till Now</div>
                        </div>
                        <div className="card">
                            <div className="circle">
                                <div className="count">{requestnum}</div>
                            </div>
                            <div className="text">Requests<br />Till Now</div>
                        </div>
                    </div>
                    <div className="lower-section">
                        Click To View Your Past Donations History
                        <button className="btn-3" onClick={()=>{navigate('/donations-history');}}> Click Here</button><br />    
                        Click To View Your Past Requests History
                        <button className="btn-3" onClick={()=>{navigate('/request-history');}}> Click Here</button>
                    </div>
                </div>
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
            </div>
            <hr />
            <div className="secondd"></div>
        </div>
    );
}

export default DashboardDetails;
