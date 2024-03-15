import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";

function DonateList() {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [serves, setServes] = useState("");

    const navigate = useNavigate();

    const handleDonate = () => {
        fetch("http://localhost:3000/api/forms/new-donation", {
            method: "POST",
            body: JSON.stringify({
                category,
                description,
                serves,
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
                    window.alert("Donation Request Made Succesfully");
                    navigate("/donations-list");
                }
            });
    };

    return (
        <div>
            <div className="storage-section">
                <div className="leftsection">
                    <img
                        src="/assets/images/donateform.png"
                        alt="Food Donation Image"
                        style={{ maxWidth: "94%" }}
                    />
                </div>
                <div className="rightsection">
                    <h1 className="heading" style={{ fontSize: "45px" }}>
                        Donate
                    </h1>
                    <div className="input-form">
                        <div className="formsgroup">
                            <label htmlFor="inputCategory">
                                Category Of Food
                            </label>
                            <br /><br />
                            <div className="formsrow">
                                <span className="formsgroup col-md-4">
                                    <img
                                        style={{ width: 100 }}
                                        src="/assets/images/cookedfood.png"
                                        alt="Cooked Food"
                                        onClick={() => {
                                            setCategory("Cooked Food");
                                        }}
                                        
                                    />
                                    <br />
                                    <span>Cooked Food</span>
                                </span>
                                <span className="formsgroup col-md-4">
                                    <img
                                        style={{ width: 100 }}
                                        src="/assets/images/rawfood.jpg"
                                        alt="Un-Cooked Food"
                                        onClick={() => {
                                            setCategory("UnCooked Food");
                                        }}
                                    />
                                    <br />
                                    <span>Uncooked Food</span>
                                </span>
                                <span className="formsgroup col-md-4">
                                    <img
                                        style={{ width: 100 }}
                                        src="/assets/images/packedfood.png"
                                        alt="Packed Food"
                                        onClick={() => {
                                            setCategory("Packed Food");
                                        }}
                                    />
                                    <br />
                                    <span>Packed Food</span>
                                </span>
                            </div>
                        </div>
                        <div className="formsgroup">
                            <label htmlFor="inputDescription">
                                Description Of The Food
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
                            <label htmlFor="inputServes">
                                No. Of People Food Can Serve
                            </label>
                            <input
                                onChange={(e) => {
                                    setServes(e.target.value);
                                }}
                                placeholder="No. of People"
                                className="formscontrol"
                                id="inputServes"
                            />
                        </div>
                    </div>
                    <div className="bottom-buttons">
                        <button className="button-main" onClick={handleDonate}>
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonateList;
