import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [country, setCountry] = useState("");

    const navigate = useNavigate();

    const handleSignup = () => {
        fetch("http://localhost:3000/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
                name,
                email,
                mobileno,
                address: {
                    street,
                    city,
                    state,
                    postalcode,
                    country,
                },
            }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) {
                    if (res.status === 403) {
                        window.alert("Username Already Exists");
                        return;
                    }
                }
                return res.json();
            })
            .then((data) => {
                if (data.errors) {
                    alert(data.errors.map((error) => error.msg).join("\n"));
                } else {
                    // Handle successful signup
                    localStorage.setItem("token", data.token);
                    // Redirect or update UI as needed
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
                            Sign Up
                        </h1>
                        <p></p>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="inputUserName">Username</label>
                                <input
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    label="inputUserName"
                                    placeholder="Username"
                                    className="form-control"
                                    id="inputUserName"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    id="inputPassword"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    label="Name"
                                    placeholder="Name"
                                    className="form-control"
                                    id="inputName"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    label="Email"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    id="inputEmail"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPhoneNumber">
                                    Mobile No
                                </label>
                                <input
                                    onChange={(e) => {
                                        setMobileno(e.target.value);
                                    }}
                                    label="Mobile No"
                                    placeholder="Mobile No"
                                    className="form-control"
                                    id="inputPhoneNumber"
                                />
                                <div className="form-group">
                                    <label htmlFor="inputAddress">
                                        Address
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setStreet(e.target.value);
                                        }}
                                        placeholder="Address"
                                        className="form-control"
                                        id="inputAddress"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputCity">City</label>
                                        <input
                                            onChange={(e) => {
                                                setCity(e.target.value);
                                            }}
                                            label="City"
                                            placeholder="City"
                                            className="form-control"
                                            id="inputCity"
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">
                                            State
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setState(e.target.value);
                                            }}
                                            label="State"
                                            placeholder="State"
                                            className="form-control"
                                            id="inputState"
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputZip">
                                            Zip Code
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setPostalcode(e.target.value);
                                            }}
                                            label="Postal Code"
                                            placeholder="Zip Code"
                                            className="form-control"
                                            id="inputZip"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputCountry">
                                        Country
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setCountry(e.target.value);
                                        }}
                                        label="Country"
                                        placeholder="Country"
                                        className="form-control"
                                        id="inputCountry"
                                    />
                                </div>
                                <div className="bottom-buttons">
                                    <button
                                        className="btn-3"
                                        onClick={handleSignup}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
