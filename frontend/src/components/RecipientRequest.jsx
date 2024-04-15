import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";

function RequestList() {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [toServe, setToServe] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setCategory(category);
        setSelectedCategory(category);
    }

    const handleRequest = () => {
        fetch("http://localhost:3000/api/forms/new-request", {
            method: "POST",
            body: JSON.stringify({
                category,
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
                            <label htmlFor="inputCategory">
                                Category Of Food
                            </label>
                            <br />
                            <br />
                            <div className="formsrow">
                                <span className={`formsgroup col-md-4 ${selectedCategory === "Cooked Food" ? "selected" : ""}`}>
                                    <img
                                        style={{ width: 100 }}
                                        src="/assets/images/cookedfood.png"
                                        alt="Cooked Food"
                                        onClick={() => handleCategoryClick("Cooked Food")}
                                    />
                                    <br />
                                    <span>Cooked Food</span>
                                </span>
                                <span className={`formsgroup col-md-4 ${selectedCategory === "UnCooked Food" ? "selected" : ""}`}>
                                    <img
                                        style={{ width: 100 }}
                                        src="/assets/images/rawfood.jpg"
                                        alt="Un-Cooked Food"
                                        onClick={() => handleCategoryClick("UnCooked Food")}
                                    />
                                    <br />
                                    <span>Uncooked Food</span>
                                </span>
                                <span className={`formsgroup col-md-4 ${selectedCategory === "Packed Food" ? "selected" : ""}`}>
                                    <img
                                        style={{ width: 100 }}
                                        src="/assets/images/packedfood.png"
                                        alt="Packed Food"
                                        onClick={() => handleCategoryClick("Packed Food")}
                                    />
                                    <br />
                                    <span>Packed Food</span>
                                </span>
                            </div>
                        </div>
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
