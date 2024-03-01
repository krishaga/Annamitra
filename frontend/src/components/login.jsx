import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
        <div>
            <div>Welcome Back. Log In Below</div>
            <div>
                <input
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    label="Username"
                    placeholder="Username"
                />
                <br />
                <br />
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    label="Password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}

export default Login;
