import React from 'react';

function Login(){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        fetch("http://localhost:3000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'username': username,
                'password': password,
            },
            body: JSON.stringify({}),
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("token", data.token);
            // navigate("/courses");
            console.log("Nav")
        })
        .catch(error => {
            // Handle errors here
            console.error('Error during login:', error);
        });
    };
    

    return <div>
            <div>
                    Welcome Back. Log In Below
            </div>
            <div>
                <input
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    label="Username"
                    placeholder="Username"
                />
                <br /><br />
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    label="Password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button
                onClick={handleLogin}>
                Log In
            </button>
    </div>
}

export default Login