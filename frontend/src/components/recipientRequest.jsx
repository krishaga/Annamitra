import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RequestList() {
    const [description, setDescription] = useState("");
    const [toServe, setToServe] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    const handleRequest = () => {
        fetch("http://localhost:3000/api/forms/new-request", {
            method: "POST",
            body: JSON.stringify({
                description,
                toServe,
                addressTo: address,
            }),
            headers: {
                "Content-type": "application/json",
                "authorization" : "Bearer "+localStorage.getItem("token")
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if(data){
                    navigate("/Annamitra");
                }
            });
    };

    return (
        <div>
            <div className="container">
                <div className="content">
                    <div className="left-section">
                        <img
                            src="/assets/images/signup_image.png"
                            alt="Food Donation Image"
                            style={{ maxWidth: "94%" }}
                        />
                    </div>
                    <div className="right-section">
                        <h1
                            className="h1-line-height"
                            style={{ fontSize: "45px" }}
                        >
                            Request
                        </h1>
                        <p></p>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="inputDescription">Describe Your Requirements</label>
                                <input
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                    placeholder="Description"
                                    className="form-control"
                                    id="inputDescription"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputToServe">No. Of People to be served</label>
                                <input
                                    onChange={(e) => {
                                        setToServe(e.target.value);
                                    }}
                                    placeholder="No. of People"
                                    className="form-control"
                                    id="inputToServe"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddressTo">Address</label>
                                <input
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    placeholder="Address"
                                    className="form-control"
                                    id="inputAddressTo"
                                />
                            </div>
                                <div className="bottom-buttons">
                                    <button
                                        className="btn-3"
                                        onClick={handleRequest}
                                    >
                                        Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default RequestList;
