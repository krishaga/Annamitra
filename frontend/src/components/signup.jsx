import React, { useState } from "react";
import "../styles/signup.css";

function Signup() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [mobileno, setMobileno] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [street, setStreet] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [postalcode, setPostalcode] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [error, setError] = useState("");

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
                    country
                }
            }),
            headers: {
                "Content-type": "application/json",
            },
        })
        .then((res) => {
            if (!res.ok) {
                if(res.status==403){
                    window.alert("Username Already Exists");
                    return;
                }
            }
            return res.json();
        })
        .then((data) => {
            if (data.errors) {
                alert(data.errors.map(error => error.msg).join("\n"))
                setError(data.errors.map(error => error.msg).join(", "));
            } else {
                // Handle successful signup
                localStorage.setItem("token", data.token);
                // Redirect or update UI as needed
            }
        })
    };

    return (
        <div>
            <div>
                Welcome To Annamitra. Sign Up Below
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }}>
                <div className="side-image">
                    <img src="https://miro.medium.com/v2/da:true/resize:fit:700/1*BJHpzKGCqf7TrVQb96656Q.gif" alt="hello" />
                </div>
                <div className="signup-form">
                    <input
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        label="Username"
                        placeholder="Username"
                    />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        label="Password"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        label="Name"
                        placeholder="Name"
                    />
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        label="Email"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => {
                            setMobileno(e.target.value);
                        }}
                        label="Mobile No"
                        placeholder="Mobile No"
                    />
                    <input
                        onChange={(e) => {
                            setStreet(e.target.value);
                        }}
                        label="Street"
                        placeholder="Street"
                    />
                    <input style={{ marginRight: "10px" }}
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                        label="City"
                        placeholder="City"
                    />
                    <input
                        onChange={(e) => {
                            setState(e.target.value);
                        }}
                        label="State"
                        placeholder="State"
                    />
                    <input style={{ marginRight: "10px" }}
                        onChange={(e) => {
                            setPostalcode(e.target.value);
                        }}
                        label="Postal Code"
                        placeholder="Postal Code"
                    />
                    <input
                        onChange={(e) => {
                            setCountry(e.target.value);
                        }}
                        label="Country"
                        placeholder="Country"
                    />
                    <button
                        onClick={handleSignup}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
