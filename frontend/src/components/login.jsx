import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                username: username,
                password: password,
            },
            body: JSON.stringify({}),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.errorMessage) {
                    alert(data.errorMessage);
                } else {
                    localStorage.setItem("token", data.token);
                    navigate("/Annamitra");
                }
            });
    };

    return (
        <div className="container">
            <div className="left-section">
                <img
                    src="/assets/images/form_image.png"
                    alt="Food Donation Image"
                />
            </div>
            <div className="right-section custom-r-section">
                <h1 className="h1-line-height" style={{ fontSize: "45px" }}>
                    Welcome Back. Log In Below
                </h1>
                <form>
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
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="form-control"
                            id="inputPassword"
                        />
                        <br />
                        <br />
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => {
                                setShowPassword(!showPassword);
                            }}
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                    <div className="bottom-buttons">
                        <button
                            className="btn-3"
                            onClick={handleLogin}
                            type="button"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
