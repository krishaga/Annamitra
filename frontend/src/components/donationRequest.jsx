import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DonateList() {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [serves, setServes] = useState("");
    const [addressFrom, setAddress] = useState("");

    const navigate = useNavigate();

    const handleDonate = () => {
        fetch("http://localhost:3000/api/forms/new-donation", {
            method: "POST",
            body: JSON.stringify({
                category,
                description,
                serves,
                addressFrom,
            }),
            headers: {
                "Content-type": "application/json",
                "authorization" : "Bearer " + localStorage.getItem("token")
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
                            Donate
                        </h1>
                        <p></p>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="inputCategory">Category Of Food</label>
                                <br />
                                <div className="form-row">
                                    <span className="form-group col-md-4">
                                        <img style={{width: 100}} src="/assets/images/cookedfood.png" alt="Cooked Food" onClick={()=>{setCategory("Cooked Food")}}/>
                                    </span>
                                    <span className="form-group col-md-4">
                                        <img style={{width: 100}} src="/assets/images/rawfood.jpg" alt="Cooked Food" onClick={()=>{setCategory("UnCooked Food")}}/>
                                    </span>
                                    <span className="form-group col-md-4">
                                        <img style={{width: 100}} src="/assets/images/packedfood.png" alt="Cooked Food" onClick={()=>{setCategory("Raw Food")}}/>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputDescription">Description Of The Food</label>
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
                                <label htmlFor="inputServes">No. Of People Food Can Serve</label>
                                <input
                                    onChange={(e) => {
                                        setServes(e.target.value);
                                    }}
                                    placeholder="No. of People"
                                    className="form-control"
                                    id="inputServes"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddressFrom">Address</label>
                                <input
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    placeholder="Address"
                                    className="form-control"
                                    id="inputAddress"
                                />
                            </div>
                                <div className="bottom-buttons">
                                    <button
                                        className="btn-3"
                                        onClick={handleDonate}
                                    >
                                        Donate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default DonateList;
