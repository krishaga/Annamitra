import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";

function RequestList() {
    const [description, setDescription] = useState("");
    const [toServe, setToServe] = useState("");

    const navigate = useNavigate();

    const handleRequest = () => {
        fetch("http://localhost:3000/api/forms/new-request", {
            method: "POST",
            body: JSON.stringify({
                description,
                toServe,
            }),
            headers: {
                "Content-type": "application/json",
                authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data) {
                    window.alert("Rquest for food was succesfully made");
                    navigate("/recipients-list");
                }
            });
    };

    return (
        <div>
            <div className="storage-section">
                <div className="leftsection">
                    <img
                        src="/assets/images/form_image.png"
                        alt="Food Donation Image"
                        style={{ maxWidth: "94%" }}
                    />
                </div>
                <div className="rightsection">
                    <h1 className="heading" style={{ fontSize: "45px" }}>
                        Request
                    </h1>
                    <br />
                    <div className="input-form">
                        <div className="formsgroup">
                            <label htmlFor="inputDescription">
                                Describe Your Requirements
                            </label>
                            <input
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                placeholder="Description"
                                className="formscontrol"
                                id="inputDescription"
                            />
                        </div>
                        <div className="formsgroup">
                            <label htmlFor="inputToServe">
                                No. Of People to be served
                            </label>
                            <input
                                onChange={(e) => {
                                    setToServe(e.target.value);
                                }}
                                placeholder="No. of People"
                                className="formscontrol"
                                id="inputToServe"
                            />
                        </div>
                        <div className="bottom-buttons">
                            <button
                                className="button-main"
                                onClick={handleRequest}
                            >
                                Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestList;
